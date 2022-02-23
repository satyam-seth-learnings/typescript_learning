// // Example-1
// const person = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: "READ ONLY USER",
// };
// if (person.role === "READ-ONLY-USER") {
//   console.log("is read only");
// }
// Example-2
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// const person = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: ADMIN,
// };
// if (person.role === ADMIN) {
//   console.log("is admin");
// }
// Example-3
// enum Role {
//   ADMIN,
//   READ_ONLY,
//   AUTHOR,
// }
// enum Role {
//   ADMIN = 5, // Role.ADMIN = 5
//   READ_ONLY, // Role.READ_ONLY = 6
//   AUTHOR, // Role.AUTHOR = 7
// }
// enum Role {
//   ADMIN = 5, // Role.ADMIN = 5
//   READ_ONLY = 100, // Role.READ_ONLY = 100
//   AUTHOR = 200, // Role.AUTHOR = 200
// }
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
if (person.role === Role.AUTHOR) {
    console.log("is author");
}
