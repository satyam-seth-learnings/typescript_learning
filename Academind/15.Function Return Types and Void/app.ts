function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result:" + num);
}

// function printResult(num: number): undefined {
//   // A function whose declared type is neither 'void' nor 'any' must return a value
//   console.log("Result:" + num);
// }

// function printResult(num: number): undefined {
//   console.log("Result:" + num);
//   return;
// }

printResult(add(5, 12));
// console.log(printResult(add(5, 12))); // undefine
