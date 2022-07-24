"use strict";
var button = document.querySelector("button");
function clickHandler(message) {
    console.log("clicked");
}
button.addEventListener("click", clickHandler.bind(null, "You are Leela"));
//# sourceMappingURL=main.js.map