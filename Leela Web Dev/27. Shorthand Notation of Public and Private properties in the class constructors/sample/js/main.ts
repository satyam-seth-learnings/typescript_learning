class Department {
  private employees: string[] = [];

  constructor(private id: string, public name: string) {}

  addEmployee(employee: string) {
    // Validation
    this.employees.push(employee);
  }

  printEmployees() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  describe(this: Department) {
    console.log(`Department with id (${this.id}) : ${this.name}`);
  }
}

let department = new Department("d1", "Accounting");
department.addEmployee("Leela");
department.addEmployee("John");
department.describe();
