"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployees = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.prototype.describe = function () {
        console.log("Department with id (".concat(this.id, ") : ").concat(this.name));
    };
    return Department;
}());
var ItDepartment = (function (_super) {
    __extends(ItDepartment, _super);
    function ItDepartment(id, admins) {
        var _this = _super.call(this, id, "ItDepartment") || this;
        _this.admins = admins;
        return _this;
    }
    return ItDepartment;
}(Department));
var it = new ItDepartment("d1", ["Leela"]);
it.addEmployee("Leela");
console.log(it);
var AccountDepartment = (function (_super) {
    __extends(AccountDepartment, _super);
    function AccountDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        return _this;
    }
    AccountDepartment.prototype.addReport = function (report) {
        this.reports.push(report);
    };
    AccountDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountDepartment;
}(Department));
var accounting = new AccountDepartment("A1", []);
accounting.addEmployee("John");
accounting.addReport("Something wrong");
accounting.printReports();
console.log(accounting);
