class Department {
  name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addEmployee(employee: string) {
    // Validation
    this.employees.push(employee);
  }

  printEmployees() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  describe(this: Department) {
    console.log("department is " + this.name);
  }
}

let department = new Department("Accounting");
department.addEmployee("Leela");
department.addEmployee("John");
// department.employees[2] = "Don";

department.printEmployees();
