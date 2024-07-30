export function countAllPaarl(regNumbers) {
  var regNumArray = regNumbers.split(',');
  var count = 0;
  
for (var i = 0; i < regNumArray.length; i++) {
  var regNum = regNumArray[i].trim(); 
        
if (regNum.startsWith('CJ')) {
            count++; 
    }
}
 return count; 
}
