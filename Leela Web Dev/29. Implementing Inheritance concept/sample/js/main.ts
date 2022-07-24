class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

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

// class ItDepartment extends Department {}

// const it = new ItDepartment("d1", "ItDepartment");

class ItDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "ItDepartment");
  }
}

const it = new ItDepartment("d1", ["Leela"]);
it.addEmployee("Leela");
console.log(it);

class AccountDepartment extends Department {
  constructor(id: string, public reports: string[]) {
    super(id, "Accounting");
  }

  addReport(report: string) {
    this.reports.push(report);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountDepartment("A1", []);
accounting.addEmployee("John");
accounting.addReport("Something wrong");
accounting.printReports();
console.log(accounting);
