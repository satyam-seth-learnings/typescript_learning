"use strict";
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    return Department;
}());
var department = new Department("Accounting");
console.log(department);
