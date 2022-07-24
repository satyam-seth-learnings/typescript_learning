"use strict";
function getCountandDescribe(element) {
    var text = "Got No element";
    if (element.length === 1) {
        text = "Got 1 element";
    }
    if (element.length > 1) {
        text = "Got " + element.length + " elements";
    }
    return [element, text];
}
console.log(getCountandDescribe("Hai Leela"));
function extractFromObject(obj, key) {
    return obj[key];
}
extractFromObject({ name: "Leela", age: 30 }, "age");
