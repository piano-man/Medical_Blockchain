pragma experimental ABIEncoderV2;

contract StoreRec {
  
  mapping (string => string[]) private hashmap;
  string[] public patientArray;
  uint256 count = 0;

  function StoreRec() public {

  }

  function storeHash(string patientkey,string hash) public {
    if(hashmap[patientkey].length==0)
    {
        count++;
        patientArray.push(patientkey);
    }
      hashmap[patientkey].push(hash);
  }

function getPatientHash(uint256 num) view public returns (string,string[]) {
    return (patientArray[num],hashmap[patientArray[num]]);
  }
  
function getListLength() view public returns (uint256) {
    return (count);
  }
}