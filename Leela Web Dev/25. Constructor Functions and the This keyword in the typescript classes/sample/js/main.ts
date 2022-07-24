class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // describe() {
  //   console.log("department is " + this.name);
  // }

  describe(this: Department) {
    console.log("department is " + this.name);
  }
}

let department = new Department("Accounting");
console.log(department);
department.describe();

// let departmentCopy = { describe: department.describe };
let departmentCopy = { name: "Leela", describe: department.describe };
console.log(departmentCopy);
departmentCopy.describe();

let departmentCopy2 = { describe: department.describe };
departmentCopy2.describe.bind(department)();
