// Example-1
// let obj: any = { x: 0 };

// obj.foo();
// obj.bar = 100;
// obj= "hello";

// const n: number = obj;

// Example-2
// function greet(name: string){
//     console.log("Hello, "+ name.toUpperCase() + "!!");
// }

// greet(42);

// Example-3
// function getFavoriteNumber(): Number{
//     return 26;
// }

// Example-4
// const names=["Alice", "Bob", "Eve"];

// names.forEach(function (s){
//     console.log(s.toUppercase());
// });

// names.forEach((s) => {
//     console.log(s.toUppercase());
// });

// Example-5
// function printCoord(pt: { x: number, y:number }) {
//     console.log("The coorfinate's x value is " + pt.x);
//     console.log("The coorfinate's y value is " + pt.y);
// }

// printCoord({x: 3, y: 4});

// Example-5
// function printObj(obj: { first: string, last?:string }) {
//     console.log(obj.first.toUpperCase());
//     // if(obj.last != undefined){
//     //     console.log(obj.last.toUpperCase())
//     // }
//     // or
//     console.log(obj.last?.toUpperCase());
// }

// printObj({first: "satyam", last:"seth"});
// printObj({first: "satyam"});

// Example-6 Union Types
// function printId(id: number | string){
//     console.log("Your ID is: " + id);
// }

// printId(101);

// printId("202");

// printId({ myID: 22342 })

// Example-7
// function printId(id: string | number){
//     // console.log(id.toUpperCase())
//     if (typeof id === "string") {
//         console.log(id.toUpperCase())
//     } else {
//         console.log(id);
//     }
// }

// Example-8
// function welcomePeople(x: string[] | string) {
//   if (Array.isArray(x)) {
//     console.log("Hello, " + x.join(" and "));
//   } else {
//     console.log("Welcome lone traveler " + x);
//   }
// }

// Example-9
// function getFirstThree(x: number[] | string) {
//   return x.slice(0, 3);
// }

// Example-10
// type Point = {
//   x: number;
//   y: number;
// };

// // Exactly the same as the earlier example
// function printCoord(pt: Point) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }

// printCoord({ x: 100, y: 100 });

// type ID = number | string;

// Example-11
// type UserInputSanitizedString = string;

// function sanitizeInput(str: string): UserInputSanitizedString {
//   return str.toLocaleLowerCase();
// }

// // Create a sanitized input
// let userInput = sanitizeInput("getInput");

// // Can still be re-assigned with a string though
// userInput = "new input";

// Example-12
// interface Point {
//   x: number;
//   y: number;
// }

// function printCoord(pt: Point) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }

// printCoord({ x: 100, y: 100 });

// Example-13.1
// interface Animal {
//   name: string;
// }

// interface Bear extends Animal {
//   honey: boolean;
// }

// // const bear: Animal = { name: "satyam", honey: true };
// const bear: Bear = { name: "satyam", honey: true };
// bear.name;
// bear.honey;

// Example-13.2
// type Animal = {
//   name: string;
// };

// type Bear = Animal & {
//   honey: boolean;
// };

// // const bear: Animal = { name: "satyam", honey: true };
// const bear: Bear = { name: "satyam", honey: true };
// bear.name;
// bear.honey;

// Example-13.3
// interface Window {
//   title: string;
// }

// interface Window {
//   ts: number;
// }

// let demo: Window;

// demo.title = "demo";
// demo.ts = 13;

// Example-13.4
// type Window = {
//   title: string;
// };

// type Window = {
//   ts: TypeScriptAPI;
// };

// Example-14
// const myCanvas1 = document.getElementById("main_canvas") as HTMLCanvasElement;
// const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");

// Example-15
// // let changingString = "Hello World";
// // changingString = "Olá Mundo";
// // // Because `changingString` can represent any possible string, that
// // // is how TypeScript describes it in the type system
// // changingString;

// // let changingString1: string;

// // const constantString1 = "Hello World";
// // // Because `constantString1` can only represent 1 possible string, it
// // // has a literal type representation
// // constantString1;

// let x: "hello" = "hello";
// // OK
// x = "hello";
// // ...
// x = "howdy";

// Example-16
// function printText(s: string, alignment: "left" | "right" | "center") {
//   // ...
// }
// printText("Hello, world", "left");
// printText("G'day, mate", "centre");

// function compare(a: string, b: string): -1 | 0 | 1 {
//   return a === b ? 0 : a > b ? 1 : -1;
// }

// interface Options {
//   width: number;
// }
// function configure(x: Options | "auto") {
//   // ...
// }
// configure({ width: 100 });
// configure("auto");
// configure("automatic");

// Example-17
// const obj = { counter: 0 };
// obj.counter = 1;

// const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method);

// // Change 1:
// const req = { url: "https://example.com", method: "GET" as "GET" };
// // Change 2
// handleRequest(req.url, req.method as "GET");

// const req = { url: "https://example.com", method: "GET" } as const;
// handleRequest(req.url, req.method);

// Example-18
// function doSomething(x: string | null) {
//   if (x === null) {
//     // do nothing
//   } else {
//     console.log("Hello, " + x.toUpperCase());
//   }
// }

// function liveDangerously(x?: number | null) {
//   // No error
//   console.log(x!.toFixed());
// }

// Example-19
// // Creating a bigint via the BigInt function
// const oneHundred: bigint = BigInt(100);

// // Creating a BigInt via the literal syntax
// const anotherHundred: bigint = 100n;

// const firstName = Symbol("name");
// const secondName = Symbol("name");

// if (firstName === secondName) {
// }
