// //use proxy free internet 
 Web3 = require('web3');
 web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const IPFS = require('ipfs-api');
const ipfs = new IPFS({host: 'ipfs.infura.io', port: 5001, protocol: 'https'});
const randomData = "8803cf48b8805198dbf85b2e0d514320"; // random bytes for testing
var buf = Buffer.from(randomData, 'utf8');
ipfs.add(buf, (err, hash) => {
 if (err) {
   return console.log(err);
 }
 
 console.log("HASH:", hash);
});

const hash = "Qmaj3ZhZtHynXc1tpnTnSBNsq8tZihMuV34wAvpURPZZMs";
ipfs.cat(hash, (err, data) => {
 if (err) {
   return console.log(err);
 }
 
 console.log("DATA:", data.toString('utf8'));
});