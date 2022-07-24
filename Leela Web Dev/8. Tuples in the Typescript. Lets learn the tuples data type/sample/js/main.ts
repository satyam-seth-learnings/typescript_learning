// let person = {
//   name: "Leela",
//   age: 30,
//   hobbies: ["sports", "cooking"],
//   role: [2, "author"],
// };
let person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Leela",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: [2, "author"],
};

person.role.push("admin");
// person.role = [34, "Hello", "dsdsd"];
person.role = [34, "Hello"];

// person.role[0] = "adsads";
// person.role[1] = 20;

// person.role[0] = 10;
// person.role[1] = "adsadsd";

for (let hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
