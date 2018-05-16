// // //use proxy free internet 
var fs = require('fs');
Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
code = fs.readFileSync('Test.sol').toString();
solc = require('solc');
compiledCode = solc.compile(code);

abiDefinition = JSON.parse(compiledCode.contracts[':StoreRec'].interface)
VotingContract = web3.eth.contract(abiDefinition)
byteCode = compiledCode.contracts[':StoreRec'].bytecode
deployedContract = VotingContract.new({data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
contractInstance = VotingContract.at(deployedContract.address)

abi = abiDefinition;
VotingContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
web3.eth.defaultAccount=web3.eth.accounts[0]

//storing data and retrieving hash
// const IPFS = require('ipfs-api');
// const ipfs = new IPFS({host: 'ipfs.infura.io', port: 5001, protocol: 'https'});
// const randomData = "8803cf48b8805198dbf85b2e0d514320"; // random bytes for testing
// var buf = Buffer.from(randomData, 'utf8');
// ipfs.add(buf, (err, hash) => {
//  if (err) {
//    return console.log(err);
//  }
 
//  console.log("HASH:", hash);
// });
const hash = "Qmaj3ZhZtHynXc1tpnTnSBNsq8tZihMuV34wAvpURPZZMs";
const bs58 = require('bs58')
const bytes = bs58.decode(hash)
console.log(bytes)
const temp = bytes.toString('hex').substring(4);
console.log(temp)
console.log(Buffer(temp,'hex'))
var temp2 = "0x".concat(temp);
console.log(temp2)


// web3.fromAscii(bytes.toString('hex').substr(4))
contractInstance.storeHash("1234",temp,{from: web3.eth.accounts[2], gas:3000000});
var len = contractInstance.getListLength();
console.log(len)

//extraacting data from hash
// ipfs.cat(hash, (err, data) => {
//  if (err) {
//    return console.log(err);
//  }
 
//  console.log("DATA:", data.toString('utf8'));
// });