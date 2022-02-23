const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

// Example-1
let favoriteActivities: string[];
// favoriteActivities = "Sports"; // Type 'string' is not assignable to type 'string[]'
// favoriteActivities = ["Sports", 1]; // Type 'number' is not assignable to type 'string'
favoriteActivities = ["Sports"];

// Example-2
// let favoriteActivities: any[];
// favoriteActivities = ["Sports", 1];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // Property 'map' does not exist on type 'string'
}
