// type addFn = (a: number, b: number) => number;

interface addFn {
  (a: number, b: number): number;
}

var add: addFn;

add = (x: number, y: number) => {
  return x + y;
};

interface IName {
  readonly name: string;
}

interface IPerson extends IName {
  age: number;
  hello(phrase: string): void;
  greet(): void;
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

let leela: IPerson = new Person("Leela", 30);
let john: IPerson = new Person("John", 20);

leela.greet();
leela.hello("Hello");

john.hello("Hello");
