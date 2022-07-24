// const USER_ADMIN = 1;
// const USER_AUTHOR = 2;
// let person = {
//   name: "Leela",
//   age: 30,
//   hobbies: ["sports", "cooking"],
//   role: USER_AUTHOR,
// };
// if (person.role === USER_ADMIN {
//   console.log("user is admin");
// }
var ROLES;
(function (ROLES) {
    // ADMIN,
    // AUTHOR,
    // GUEST,
    // ADMIN = 10,
    ROLES["ADMIN"] = "ADMIN";
    ROLES["AUTHOR"] = "AUTHOR";
    ROLES["GUEST"] = "GUEST";
})(ROLES || (ROLES = {}));
var person = {
    name: "Leela",
    age: 30,
    hobbies: ["sports", "cooking"],
    // role: 3,
    role: ROLES.ADMIN
};
if (person.role === ROLES.ADMIN) {
    console.log("user is admin");
}
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
