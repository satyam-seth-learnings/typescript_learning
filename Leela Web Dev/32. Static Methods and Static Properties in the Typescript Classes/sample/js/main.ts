class Department {
  protected employees: string[] = [];
  // static financialYear = 2020;
  static readonly financialYear = 2020;
  constructor(private readonly id: string, public name: string) {}

  addEmployee(employee: string) {
    // Validation
    this.employees.push(employee);
    // Department.financialYear;
  }

  static createEmployee(name: string) {
    return { name: name };
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
  private lastRecord: string;

  constructor(id: string, public reports: string[]) {
    super(id, "Accounting");
    this.lastRecord = reports[0];
  }

  get getMostRecentReport() {
    if (!this.reports) {
      throw new Error("No Reports Found");
    }
    // return this.reports[this.reports.length - 1];
    return this.lastRecord;
  }

  set getMostRecentReport(value: string) {
    if (!value) {
      throw new Error("Report cannot be inserted");
    }
    this.addReport(value);
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
    this.lastRecord = report;
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ItDepartment("d1", ["Leela"]);
it.addEmployee("Leela");
console.log(it);

// Department.financialYear = 2030;

console.log(Department.createEmployee("Leela"), Department.financialYear);

const accounting = new AccountDepartment("A1", []);
accounting.addEmployee("John");
accounting.addEmployee("Don");
accounting.addEmployee("Dean");
accounting.addEmployee("Leela");
accounting.printEmployees();

accounting.addReport("Something wrong");
accounting.addReport("Something Leela");
accounting.addReport("Something John");

// console.log(accounting.getMostRecentReport());
accounting.getMostRecentReport = "Recent Report";
accounting.addReport("Something Leela");
console.log(accounting.getMostRecentReport);

accounting.printReports();
console.log(accounting);
