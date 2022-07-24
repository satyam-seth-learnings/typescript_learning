class Department {
  protected employees: string[] = [];

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

class ItDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "ItDepartment");
  }
}

class AccountDepartment extends Department {
  constructor(id: string, public reports: string[]) {
    super(id, "Accounting");
  }

  override addEmployee(employee: string): void {
    if (employee === "Leela") {
      return;
    }
    // this.employees.push(employee);
    super.addEmployee(employee);
  }

  addReport(report: string) {
    this.reports.push(report);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ItDepartment("d1", ["Leela"]);
it.addEmployee("Leela");
console.log(it);

const accounting = new AccountDepartment("A1", []);
accounting.addEmployee("John");
accounting.addEmployee("Don");
accounting.addEmployee("Dean");
accounting.addEmployee("Leela");
accounting.printEmployees();
accounting.addReport("Something wrong");
accounting.printReports();
console.log(accounting);
