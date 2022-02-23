// Example-1
// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultConversion: string
// ) {
//   let result;
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   if (resultConversion === "as-number") {
//     return +result;
//   } else {
//     return result.toString();
//   }
// }

// Example-2
// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultConversion: string
// ) {
//   let result;
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultConversion === "as-number"
//   ) {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result.toString();
// }

// Example-3
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text" // literal type
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result.toString();
}

const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combineStringAges = combine("30", "26", "as-number");
// const combineStringAges = combine("30", "26", "as-numbe"); // Argument of type '"as-numbe"' is not assignable to parameter of type '"as-number" | "as-text"'
console.log(combineStringAges);

const combineNames = combine("Max", "Anna", "as-text");
console.log(combineNames);
