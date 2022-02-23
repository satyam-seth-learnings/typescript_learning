// // // Example-1
// // const person = {
// //   name: "Maximilian",
// //   age: 30,
// //   hobbies: ["Sports", "Cooking"],
// //   role: [2, "author"], // (property) role: (string | number)[]
// // };
// // person.role.push("admin");
// // person.role[1] = 10;
// // Example-2
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"], // tuple - (property) role: [number, string]
// };
// // person.role.push("admin"); // Exception Case - ts not raise error if we use push()
// // person.role[1] = 10; // Type 'number' is not assignable to type 'string'
// // person.role = [10, "admin", "user"]; // Type '[number, string, string]' is not assignable to type '[number, string]'. Source has 3 element(s) but target allows only 2
// person.role = [10, "admin"];
// let favoriteActivities: any;
// favoriteActivities = ["Sports"];
// favoriteActivities = 5;
var favoriteActivities;
favoriteActivities = ["Sports"];
// favoriteActivities = 5; // Type 'number' is not assignable to type 'any[]'
