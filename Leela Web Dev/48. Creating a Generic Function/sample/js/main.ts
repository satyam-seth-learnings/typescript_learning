// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// const data = merge({ name: "Leela" }, { age: 30 }) as {
//   name: string;
//   age: number;
// };
// const data = merge({ name: "Leela", hobbies: [] }, { age: 30 }) as {
//   name: string;
//   age: number;
//   hobbies: string[];
// };

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// const data = merge({ name: "Leela" }, { age: 30 });
const data = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "Leela", hobbies: ["Leela"] },
  { age: 30 }
);

console.log(data.age);
