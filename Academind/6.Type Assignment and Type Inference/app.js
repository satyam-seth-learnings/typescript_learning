function add(n1, n2, printResult, phrase) {
    var result = n1 + n2;
    if (printResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
// let number1 = 5; // 5.0
var number1;
// number1 = "5"; // Type 'string' is not assignable to type 'number'
number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: "[0];
// resultPhrase = 0; // Type 'number' is not assignable to type 'string'
add(number1, number2, printResult, resultPhrase);
