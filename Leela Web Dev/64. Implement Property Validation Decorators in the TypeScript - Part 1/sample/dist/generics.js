"use strict";
function getCountandDescribe(element) {
    let text = "Got No element";
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
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const stringStorage = new DataStorage();
stringStorage.addItem("Leela");
stringStorage.addItem("John");
stringStorage.removeItem("Leela");
console.log(stringStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());
function addCourse(title, description, addedDate) {
    let data = {};
    data.title = title;
    data.description = description;
    data.addedDate = addedDate;
    return data;
}
let names = ["Leela", "John"];
