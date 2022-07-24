"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var data = merge({ name: "Leela", hobbies: ["Leela"] }, { age: 30 });
console.log(data.age);
