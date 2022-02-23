// Example-1
// const person: object = {
//   name: "Maximilian",
//   age: 30,
// };

// // console.log(person);
// // console.log(person.nickname); // Property 'nickname' does not exist on type '{ name: string; age: number; }'
// console.log(person.name); // Property 'name' does not exist on type 'object'

// Example-2
const person: {
  name: string;
  age: number;
} = {
  name: "Maximilian",
  age: 30,
};

console.log(person);
