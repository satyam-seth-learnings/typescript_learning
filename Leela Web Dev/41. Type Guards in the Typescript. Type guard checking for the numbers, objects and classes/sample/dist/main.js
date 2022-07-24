"use strict";
var emp = {
    name: "Leela",
    roles: ["Admin"],
    startDate: new Date(),
};
function getAdd(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(emp) {
    console.log("name: " + emp.name);
    if ("roles" in emp) {
        console.log("roles: " + emp.roles);
    }
    if ("startDate" in emp) {
        console.log("start Date: " + emp.startDate);
    }
}
printEmployeeInfo({ name: "Leela", startDate: new Date() });
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving car...");
    };
    return Car;
}());
var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving car...");
    };
    Truck.prototype.loadingCargo = function (amount) {
        console.log("loading cargo:" + amount);
    };
    return Truck;
}());
function useVehicle(veh) {
    veh.drive();
    if (veh instanceof Truck) {
        veh.loadingCargo(30);
    }
}
var v1 = new Car();
var v2 = new Truck();
useVehicle(v1);
useVehicle(v2);
