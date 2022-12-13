// // Code goes here!
// const names: Array<string> = []; //string[]
// names[0].split("");

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("this is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// console.log(merge({ name: "Max" }, { age: 30 }));
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj.hobbies);

//count and description function
function countAndDescription<T extends string>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 elements.";
  } else {
    descriptionText = "Got" + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescription("Hi there"));
