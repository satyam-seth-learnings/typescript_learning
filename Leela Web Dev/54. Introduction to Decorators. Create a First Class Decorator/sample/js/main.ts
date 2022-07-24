function Logger(constructor: Function) {
  console.log("logging the data");
  console.log(constructor);
}

@Logger
class Person {
  name = "Leela";

  constructor() {
    console.log("creating object...");
  }
}

// const person = new Person();
// console.log(person);
