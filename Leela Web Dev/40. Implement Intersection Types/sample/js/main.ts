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

// var x: universal = "dsdds";
var x: universal = 4;
