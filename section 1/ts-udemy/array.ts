// const person: {
//   name: string;
//   age: number;
// } = {
const array = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

// let favoriteActivities: string[];
// favoriteActivities = ["Sports"];

console.log(array.name);

for (const hobby of array.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
