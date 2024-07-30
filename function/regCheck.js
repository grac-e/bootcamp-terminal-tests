export function regCheck(registrationNumber, locationIndicator) {
    if (!locationIndicator) {
      return "please indicate location";
    }
    return registrationNumber.endsWith(locationIndicator);
  }
  
  var isGP = regCheck('RG 45 HN GP', 'GP');
  console.log(isGP);
  
  var isEC = regCheck('LKG 679 EC', 'EC');
  console.log(isEC);
  
  var isMP = regCheck('GHT 456 MP', 'MP');
  console.log(isMP);
  
  var isL = regCheck('FGT 491 L', 'L');
  console.log(isL);
  
  var isMP = regCheck('ND 123-456', 'MP');
  console.log(isMP);
  
  var isEC = regCheck('CY 678-453', 'EC');
  console.log(isEC);
  
  var isL = regCheck('CA 1234-123', 'L');
  console.log(isL);