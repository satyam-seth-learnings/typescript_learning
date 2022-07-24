var RESULT_TYPE;
(function (RESULT_TYPE) {
    RESULT_TYPE["AS_NUMBER"] = "as-number";
    RESULT_TYPE["AS_TEXT"] = "as-text";
})(RESULT_TYPE || (RESULT_TYPE = {}));
function combine(number1, number2, 
// resultType: string
// resultType: "as-number" | "as-text"
resultType) {
    var result;
    if (typeof number1 === "number" && typeof number2 === "number") {
        result = number1 + number2;
    }
    else {
        result = number1.toString() + number2.toString();
    }
    // if (resultType === "as-number") {
    if (resultType === RESULT_TYPE.AS_NUMBER) {
        return +result;
    }
    else {
        return result.toString();
    }
}
// let result = combine(1, 2, "as-number");
var result = combine(1, 2, RESULT_TYPE.AS_NUMBER);
console.log(result);
// console.log(combine("1", "2", "as-text"));
console.log(combine("1", "2", RESULT_TYPE.AS_TEXT));
