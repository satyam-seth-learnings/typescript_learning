let person = {
  name: "Leela",
  age: 30,
  hobbies: ["sports", "cooking"],
};

// let favorite = ["animals"];
// let favorite: string[] = ["animals"];
let favorite: string[];
// let favorite: any[];
// favorite = "animals";
favorite = ["animals"];
// favorite = ["animals", 1];

for (let hobby of person.hobbies) {
  // console.log(hobby);
  console.log(hobby.toUpperCase());
}
