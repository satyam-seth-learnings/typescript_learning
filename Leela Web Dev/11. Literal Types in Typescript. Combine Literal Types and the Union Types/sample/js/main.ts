enum RESULT_TYPE {
  AS_NUMBER = "as-number",
  AS_TEXT = "as-text",
}

function combine(
  number1: number | string,
  number2: number | string,
  // resultType: string
  // resultType: "as-number" | "as-text"
  resultType: RESULT_TYPE
) {
  let result;
  if (typeof number1 === "number" && typeof number2 === "number") {
    result = number1 + number2;
  } else {
    result = number1.toString() + number2.toString();
  }
  // if (resultType === "as-number") {
  if (resultType === RESULT_TYPE.AS_NUMBER) {
    return +result;
  } else {
    return result.toString();
  }
}

// let result = combine(1, 2, "as-number");
let result = combine(1, 2, RESULT_TYPE.AS_NUMBER);
console.log(result);
// console.log(combine("1", "2", "as-text"));
console.log(combine("1", "2", RESULT_TYPE.AS_TEXT));
