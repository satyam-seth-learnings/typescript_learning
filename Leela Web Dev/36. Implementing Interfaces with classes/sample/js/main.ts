// type IPerson = {
//   name: string;
//   age: number;
//   hello(phrase: string): void;
// };

interface IPerson {
  name: string;
  age: number;
  hello(phrase: string): void;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}

  hello(phrase: string): void {
    console.log(phrase + this.name);
  }

  greet() {
    console.log("hai greeting");
  }
}

// let leela: IPerson = new Person("Leela", 30);
let leela: Person = new Person("Leela", 30);
let john: IPerson = new Person("John", 20);
leela.hello("Hello");
leela.greet();
john.hello("Hello");
