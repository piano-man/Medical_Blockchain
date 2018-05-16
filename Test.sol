pragma solidity ^0.4.24;

contract StoreRec {
  
  mapping (string => bytes32[]) private hashmap;
  string[] public patientArray;
  uint256 count = 0;

  function StoreRec() public {

  }

  function storeHash(string patientkey,bytes32 hash) public {
     // bytes32 temp = stringToBytes32(hash);
    if(hashmap[patientkey].length==0)
    {
        count++;
        patientArray.push(patientkey);
    }
      hashmap[patientkey].push(hash);
  }

function getPatientHash(uint256 num) view public returns (string,bytes32[]) {
    return (patientArray[num],hashmap[patientArray[num]]);
  }
  
function getListLength() view public returns (uint256) {
    return (count);
  }
}