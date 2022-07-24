function add(number1, number2) {
    return number1 + number2;
}
function printResult(value) {
    console.log("Result " + value);
}
// let combineValues;
// let combineValues: Function;
var combineValues;
combineValues = add;
// combineValues = 5;
// combineValues = printResult;
console.log(combineValues(1, 2));
