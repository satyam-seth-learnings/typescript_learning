"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var DataStorage = (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var stringStorage = new DataStorage();
stringStorage.addItem("Leela");
stringStorage.addItem("John");
stringStorage.removeItem("Leela");
console.log(stringStorage.getItems());
var numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());
