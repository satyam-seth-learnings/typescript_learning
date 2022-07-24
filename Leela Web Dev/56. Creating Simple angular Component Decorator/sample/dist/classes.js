"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    static createEmployee(name) {
        return { name: name };
    }
    printEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.financialYear = 2020;
class HRDepartment extends Department {
    constructor(id, admins) {
        super(id, "HrDepartment");
        this.admins = admins;
    }
    describe() {
        console.log("HR Department with id: " + this.id);
    }
}
class ItDepartment extends Department {
    constructor(id, admins) {
        super(id, "ItDepartment");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department with id: " + this.id);
    }
}
class AccountDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastRecord = reports[0];
    }
    static getInstance() {
        if (AccountDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountDepartment("d2", []);
        return this.instance;
    }
    describe() {
        console.log("Accounting Department with id: " + this.id);
    }
    get getMostRecentReport() {
        if (!this.reports) {
            throw new Error("No Reports Found");
        }
        return this.lastRecord;
    }
    set getMostRecentReport(value) {
        if (!value) {
            throw new Error("Report cannot be inserted");
        }
        this.addReport(value);
    }
    addEmployee(employee) {
        if (employee === "Leela") {
            return;
        }
        super.addEmployee(employee);
    }
    addReport(report) {
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
const accounting = AccountDepartment.getInstance();
const accounting2 = AccountDepartment.getInstance();
console.log(accounting, accounting2);
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
