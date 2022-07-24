function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("Logging for the class Person")
class Person {
  name = "Leela";

  constructor() {
    console.log("creating object...");
  }
}

// const person = new Person();
// console.log(person);
