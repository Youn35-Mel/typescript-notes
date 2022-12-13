function add(n1: number, n2: number, n3: boolean) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("incorrect input!");
  }
  if (n3) {
    console.log(n1 + n2);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 3;
const printResult = false;

add(number1, number2, printResult);
