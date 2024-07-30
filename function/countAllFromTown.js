export function countAllFromTown(regNumbers, townCode) {
    var regNumArray = regNumbers.split(',');
    var count = 0;

    for (var i = 0; i < regNumArray.length; i++) {
        if (regNumArray[i].trim().startsWith(townCode)) {
            count++;
        }
    }

    return count;
}

var fromStellies = countAllFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341', 'CL');
console.log(fromStellies); 

var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345,CF 456,CL 341', 'CF');
console.log(fromKuilsriver);
