"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var data = merge({ name: "Leela" }, { age: 20 });
console.log(data);
