var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs')
var http = require('http').createServer(app);
app.use(cors())
app.use(bodyParser.json());
app.use(express.static('./Public'));
app.use(bodyParser.urlencoded({ extended: true }));;
http.listen(process.env.PORT || 5000);
var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/medical_blockchain"

async function checkValidity(id,pwd)
{
    let db = await mongo.connect(url)
    var ans = await db.collection('registration').findOne({"id":id})
    if(ans!=null)
    {
        return ans
    }
    else{
        return "Error"
    }

}

app.post('/storekeys/:patientid/:pwd',function(req,res){
    var patid = req.params.patientid;
    var password = req.params.pwd;
    console.log(patid)
    console.log(req.body.value)
    var record = {
        id:patid,
        login_password:password,
        pbkey:req.body.pbkey,
        pvtkey:req.body.value
    }
    mongo.connect(url,function(err,db){
        db.collection('registration').insertOne(record,function(err,result){
            if(err)
            {
                console.log(err)
            }
            else{
                res.send({"response":"success"})
            }
        })
    })

})

app.get('/login/:id/:pwd',async function(req,res){
    var id = req.params.id
    var pwd = req.params.pwd
    var result = await checkValidity(id,pwd)
    res.send({"result":result})
})