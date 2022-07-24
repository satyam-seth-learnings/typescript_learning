"use strict";
var names = [];
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("resolve string data");
    }, 2000);
});
promise.then(function (data) {
    data.split(" ");
});
