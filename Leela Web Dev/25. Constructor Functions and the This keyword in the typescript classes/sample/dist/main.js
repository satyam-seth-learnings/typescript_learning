"use strict";
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("department is " + this.name);
    };
    return Department;
}());
var department = new Department("Accounting");
console.log(department);
department.describe();
var departmentCopy = { name: "Leela", describe: department.describe };
console.log(departmentCopy);
departmentCopy.describe();
var departmentCopy2 = { describe: department.describe };
departmentCopy2.describe.bind(department)();
