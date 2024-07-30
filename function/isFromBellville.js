export function isFromBellville(registrationNumber) {
    if (!registrationNumber) {
        return "please enter registration number"
    } else 
    return registrationNumber.startsWith('CY');
}

console.log(isFromBellville('CY 123')); 
console.log(isFromBellville('CJ 123'));