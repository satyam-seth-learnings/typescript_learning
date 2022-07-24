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
