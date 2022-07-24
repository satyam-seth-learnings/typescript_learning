abstract class Department {
  protected employees: string[] = [];
  static readonly financialYear = 2020;
  constructor(protected readonly id: string, public name: string) {}

  addEmployee(employee: string) {
    // Validation
    this.employees.push(employee);
    // Department.financialYear;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(): void;

  printEmployees() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class HRDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "HrDepartment");
  }

  describe(): void {
    console.log("HR Department with id: " + this.id);
  }
}

class ItDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "ItDepartment");
  }

  describe(): void {
    console.log("IT Department with id: " + this.id);
  }
}

class AccountDepartment extends Department {
  private lastRecord: string;

  constructor(id: string, public reports: string[]) {
    super(id, "Accounting");
    this.lastRecord = reports[0];
  }

  describe(): void {
    console.log("Accounting Department with id: " + this.id);
  }

  get getMostRecentReport() {
    if (!this.reports) {
      throw new Error("No Reports Found");
    }
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
it.describe();

const accounting = new AccountDepartment("A1", []);
accounting.addEmployee("John");
accounting.addEmployee("Don");
accounting.addEmployee("Dean");
accounting.addEmployee("Leela");
accounting.printEmployees();

accounting.addReport("Something wrong");
accounting.addReport("Something Leela");
accounting.addReport("Something John");

accounting.getMostRecentReport = "Recent Report";
accounting.addReport("Something Leela");
accounting.describe();
