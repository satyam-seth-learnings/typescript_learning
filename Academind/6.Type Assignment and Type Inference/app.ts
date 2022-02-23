function add(n1: number, n2: number, printResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (printResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

// let number1 = 5; // 5.0
let number1: number;
// number1 = "5"; // Type 'string' is not assignable to type 'number'
number1 = 5;
const number2 = 2.8;
const printResult = true;
let [resultPhrase] = "Result is: ";
// resultPhrase = 0; // Type 'number' is not assignable to type 'string'

add(number1, number2, printResult, resultPhrase);
