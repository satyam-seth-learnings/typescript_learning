// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// function merge<T extends string | number, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// const data = merge({ name: "Leela" }, 30);
const data = merge({ name: "Leela" }, { age: 20 });

console.log(data);
