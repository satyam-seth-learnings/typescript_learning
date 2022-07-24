var person = {
    name: "Leela",
    age: 30,
    hobbies: ["sports", "cooking"]
};
// let favorite = ["animals"];
// let favorite: string[] = ["animals"];
var favorite;
// let favorite: any[];
// favorite = "animals";
favorite = ["animals"];
// favorite = ["animals", 1];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    // console.log(hobby);
    console.log(hobby.toUpperCase());
}
