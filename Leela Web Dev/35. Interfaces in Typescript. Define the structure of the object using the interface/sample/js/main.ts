// let leelaPerson: {
//   name: string;
//   age: number;
//   hello(phrase: string): void;
// } = {
//   name: "Leela",
//   age: 30,
//   hello(phrase: string) {
//     console.log(phrase + this.name);
//   },
// };

// let johnPerson: {
//   name: string;
//   age: number;
//   hello(phrase: string): void;
// } = {
//   name: "John",
//   age: 23,
//   hello(phrase: string) {
//     console.log(phrase + this.name);
//   },
// };

interface Person {
  name: string;
  age: number;
  occupation: string;
  hello(phrase: string): void;
}

let leelaPerson: Person = {
  name: "Leela",
  age: 30,
  occupation: "ddsd",
  hello(phrase: string) {
    console.log(phrase + this.name);
  },
};

let johnPerson: Person = {
  name: "John",
  age: 23,
  occupation: "ddsd",
  hello(phrase: string) {
    console.log(phrase + this.name);
  },
};
