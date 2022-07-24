// any Type
// let array: string[] = [];
var array = [];
array.push("dssdds");
array.push(1);
// Union Type
// function add(number1: number, number2: number) {
//   return number1 + number2;
// }
// let result = add(1, 2);
function combine(number1, number2) {
    var result;
    if (typeof number1 === "number" && typeof number2 === "number") {
        result = number1 + number2;
    }
    else {
        result = number1.toString() + number2.toString();
    }
    return result;
}
var result = combine("Leela", "Leela");
console.log(result);
