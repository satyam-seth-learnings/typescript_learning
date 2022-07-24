"use strict";
var button = document.querySelector("button");
function clickHandler(message) {
    console.log("clicked");
}
function add(n1, n2) {
    if (n1 + n2) {
        return n1 + n2;
    }
    return;
}
button.addEventListener("click", clickHandler.bind(null, "You are Leela"));
//# sourceMappingURL=main.js.map