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

enum ROLES {
  // ADMIN,
  // AUTHOR,
  // GUEST,
  // ADMIN = 10,
  ADMIN = "ADMIN",
  AUTHOR = "AUTHOR",
  GUEST = "GUEST",
}

let person = {
  name: "Leela",
  age: 30,
  hobbies: ["sports", "cooking"],
  // role: 3,
  role: ROLES.ADMIN,
};

if (person.role === ROLES.ADMIN) {
  console.log("user is admin");
}

for (let hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
