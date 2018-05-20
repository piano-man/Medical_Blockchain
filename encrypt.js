const ecies = require("eth-ecies");
const util = require('ethereumjs-util')

var StringDecoder = require('string_decoder').StringDecoder;


const publicKey = '00d6e64c0789d886c19b9ff0a92088fb07a97545b1c0441a347238469b44a220c4fd604d88f6377cb0678ef8d15f0ee84f5452e61181390867c607da66fce86b';
const privateKey = '616c0f618793eb4ffc03ddcc793e451803067d8d3cde435fd7a517c7c290cf20';
const data = '{foo:"bar",baz:42}';

function encrypt(publicKey, data) {
    let userPublicKey = new Buffer(publicKey, 'hex');
    let bufferData = new Buffer(data);

    let encryptedData = ecies.encrypt(userPublicKey, bufferData);

    return encryptedData.toString('base64')
}

var ans = encrypt(publicKey,data)
console.log(ans)


//deriving public key from private key
// var temp = util.privateToPublic('0x616c0f618793eb4ffc03ddcc793e451803067d8d3cde435fd7a517c7c290cf20')
// console.log(temp.toString('hex'))

//testing proxy re-encyrption


