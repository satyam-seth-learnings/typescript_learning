// type Admin = {
//   name: string;
//   roles: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type superEmployee = {
//   name: string;
//   roles: string[];
//   startDate: Date;
// };

// type superEmployee = Admin & Employee;

interface Admin {
  name: string;
  roles: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface superEmployee extends Admin, Employee {}

let emp: superEmployee = {
  name: "Leela",
  roles: ["Admin"],
  startDate: new Date(),
};

type combinable = number | string;
type numeric = number | boolean;
type universal = combinable & numeric;

function getAdd(a: combinable, b: combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type unknownEmployee = Admin | Employee;

function printEmployeeInfo(emp: unknownEmployee) {
  console.log("name: " + emp.name);

  if ("roles" in emp) {
    console.log("roles: " + emp.roles);
  }

  if ("startDate" in emp) {
    console.log("start Date: " + emp.startDate);
  }
}

// printEmployeeInfo(emp);
printEmployeeInfo({ name: "Leela", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving car...");
  }
}

class Truck {
  drive() {
    console.log("Driving car...");
  }

  loadingCargo(amount: number) {
    console.log("loading cargo:" + amount);
  }
}

type vehicle = Car | Truck;

function useVehicle(veh: vehicle) {
  veh.drive();

  //   if ("loadingCargo" in veh) {
  if (veh instanceof Truck) {
    veh.loadingCargo(30);
  }
}

const v1 = new Car();
const v2 = new Truck();

useVehicle(v1);
useVehicle(v2);

// interface Bird {
//   flyingSpeed: number;
// }

// interface Snake {
//   crawlingSpeed: number;
// }

// interface Horse {
//   runningSpeed: number;
// }

// type Animal = Bird | Horse | Snake;

// function checkSpeedAdmin(animal: Animal) {
//   if ("flyingSpeed" in animal) {
//     console.log("Speed of animal is: " + animal.flyingSpeed);
//   }

//   if ("crawlingSpeed" in animal) {
//     console.log("Speed of animal is: " + animal.crawlingSpeed);
//   }

//   if ("runningSpeed" in animal) {
//     console.log("Speed of animal is: " + animal.runningSpeed);
//   }
// }

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Snake {
  type: "snake";
  crawlingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse | Snake;

// function checkSpeedAdmin(animal: Animal) {
//   if ("flyingSpeed" in animal) {
//     console.log("Speed of animal is: " + animal.flyingSpeed);
//   }

//   if ("crawlingSpeed" in animal) {
//     console.log("Speed of animal is: " + animal.crawlingSpeed);
//   }

//   if ("runningSpeed" in animal) {
//     console.log("Speed of animal is: " + animal.runningSpeed);
//   }
// }

function checkSpeedAdmin(animal: Animal) {
  let speed = 0;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
    case "snake":
      speed = animal.crawlingSpeed;
      break;
  }
  console.log("Speed of the animal is: " + speed);
}

const snake: Snake = {
  crawlingSpeed: 30,
  type: "snake",
};

const bird: Bird = {
  flyingSpeed: 50,
  type: "bird",
};

checkSpeedAdmin(snake);
checkSpeedAdmin(bird);

// const paragraph = document.querySelector("p");
// const paragraph = document.querySelector("#message-output");
// const paragraph = document.getElementById("message-output");
// const paragraph = document.querySelector("input");
// const paragraph = document.querySelector("#user-input");
const paragraph = document.getElementById("user-input");
// const paragraph = <HTMLInputElement>document.getElementById("user-input");
// const paragraph = document.getElementById("user-input") as HTMLInputElement;
// paragraph.value = "user-input";

if (paragraph) {
  (paragraph as HTMLInputElement).value = "user-input";
}

interface ErrorContainer {
  [prop: string]: string;
}

// let errorBag: ErrorContainer = {};
let errorBag: ErrorContainer = {
  id: "1",
  email: "Email is Valid",
  username: "Username is Valid",
};
