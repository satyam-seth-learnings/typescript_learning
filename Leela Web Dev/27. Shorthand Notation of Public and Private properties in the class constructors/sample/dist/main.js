"use strict";
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
var department = new Department("d1", "Accounting");
department.addEmployee("Leela");
department.addEmployee("John");
department.describe();
