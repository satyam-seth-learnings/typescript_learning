function add(number1, number2) {
    // return number1.toString() + number2.toString();
    return number1 + number2;
}
// function printResult(value: number): void {
//   console.log("Result " + value);
// }
// function printResult(value: number): void {
function printResult(value) {
    console.log("Result " + value);
    return;
}
// console.log(add(1, 2));
printResult(add(1, 2));
console.log(printResult(add(1, 2)));
var result;
