function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result:" + num);
}

printResult(add(5, 12));

// let combineValues: Function;
// combineValues = add;
// combineValues = printResult;
// combineValues = 5; // Type 'number' is not assignable to type 'Function'

let combineValues: (a: number, b: number) => number;
// combineValues = add; // combineValues = printResult; // Type '(num: number) => void' is not assignable to type '(a: number, b: number) => number'. Type 'void' is not assignable to type 'number'
// combineValues = 5; // Type 'number' is not assignable to type '(a: number, b: number) => number'

console.log(combineValues(8, 8));
