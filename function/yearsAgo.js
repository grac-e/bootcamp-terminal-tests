export function yearsAgo(year) {
    const currentYear = new Date().getFullYear();
    // if (year > currentYear) {
    //     return "Please enter appropriate year"
    // }
    return currentYear - year;
}
