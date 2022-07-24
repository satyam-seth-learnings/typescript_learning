"use strict";
var _a;
let emp = {
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
const result = getAdd(1, 2);
const userData = {
    name: "Leela",
    job: { title: "CEO", description: "My Company" },
};
console.log((_a = userData === null || userData === void 0 ? void 0 : userData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = undefined;
const storeData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storeData);
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
class Car {
    drive() {
        console.log("Driving car...");
    }
}
class Truck {
    drive() {
        console.log("Driving car...");
    }
    loadingCargo(amount) {
        console.log("loading cargo:" + amount);
    }
}
function useVehicle(veh) {
    veh.drive();
    if (veh instanceof Truck) {
        veh.loadingCargo(30);
    }
}
const v1 = new Car();
const v2 = new Truck();
useVehicle(v1);
useVehicle(v2);
function checkSpeedAdmin(animal) {
    let speed = 0;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
        case "snake":
            speed = animal.crawlingSpeed;
            break;
    }
    console.log("Speed of the animal is: " + speed);
}
const snake = {
    crawlingSpeed: 30,
    type: "snake",
};
const bird = {
    flyingSpeed: 50,
    type: "bird",
};
checkSpeedAdmin(snake);
checkSpeedAdmin(bird);
const paragraph = document.getElementById("user-input");
if (paragraph) {
    paragraph.value = "user-input";
}
let errorBag = {
    id: "1",
    email: "Email is Valid",
    username: "Username is Valid",
};
