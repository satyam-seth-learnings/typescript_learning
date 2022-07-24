"use strict";
var Department = (function () {
    function Department(name) {
        this.employees = [];
        this.name = name;
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployees = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.prototype.describe = function () {
        console.log("department is " + this.name);
    };
    return Department;
}());
var department = new Department("Accounting");
department.addEmployee("Leela");
department.addEmployee("John");
department.printEmployees();
