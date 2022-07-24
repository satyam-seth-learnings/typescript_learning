// type IPerson = {
//   readonly name: string;
//   age: number;
//   hello(phrase: string): void;
//   greet(): void;
// };

// interface IPerson {
//   readonly name: string;
//   age: number;
//   hello(phrase: string): void;
//   greet(): void;
// }

interface IName {
  readonly name: string;
}

// interface IPerson {
interface IPerson extends IName {
  age: number;
  hello(phrase: string): void;
  greet(): void;
}

// class Person implements IPerson, IName {
class Person implements IPerson {
  constructor(public name: string, public age: number) {}

  hello(phrase: string): void {
    console.log(phrase + this.name);
  }

  greet() {
    console.log("hai greeting");
  }
}

// let leela: Person = new Person("Leela", 30);
let leela: IPerson = new Person("Leela", 30);
let john: IPerson = new Person("John", 20);

// leela.name = "Leela1";

leela.greet();
leela.hello("Hello");

john.hello("Hello");
