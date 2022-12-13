function addTwo(num: number) {
  return num + 2;
}

console.log(addTwo(5));

function getUpper(val: string) {
  return val.toUpperCase();
}
console.log(getUpper("james"));

function signUpUser(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {}

signUpUser("james", "@gmail", "password", true);

export {};
