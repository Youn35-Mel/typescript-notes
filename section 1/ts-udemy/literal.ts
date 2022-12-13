//combinable is not built in JS
//Date is built in in JS
type Combinable = number | string;

function combination(
  input1: Combinable,
  input2: Combinable,
  resultConversion: "as-number" | "as-text"
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
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const TotalAge = combination(30, 26, "as-number");
console.log(TotalAge);

const combinedStringAges = combination(30, 26, "as-number");
// "30", "26", "as-number";
console.log(combinedStringAges);

const combinedName = combination("Max", "Anna", "as-text");
console.log(combinedName);
