function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// function WithTemplate(template: string, hookId: string) {
//   return function (constructor: Function) {
//     const hookEl = document.getElementById(hookId);
//     if (hookEl) {
//       hookEl.innerHTML = template;
//     }
//     console.log(constructor);
//   };
// }

function Component(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const data = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      //   hookEl.textContent = data.name;
      hookEl.querySelector("h1")!.textContent = data.name;
    }
    console.log(constructor);
  };
}

@Component("<h1>Hai</h1>", "app")
class Person {
  name = "Leela";

  constructor() {
    console.log("creating object...");
  }
}

// const person = new Person();
// console.log(person);
