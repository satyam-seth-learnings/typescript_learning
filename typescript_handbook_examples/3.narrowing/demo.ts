// Example-1
// function padLeft(padding: number | string, input: string): string {
//   throw new Error("Not implemented yet!");
// }

// function padLeft(padding: number | string, input: string) {
//   return " ".repeat(padding) + input;
// }

// function padLeft(padding: number | string, input: string) {
//   if (typeof padding === "number") {
//     return " ".repeat(padding) + input;
//   }
//   return padding + input;
// }

// Example-2
// function printAll(strs: string | string[] | null) {
//   if (typeof strs === "object") {
//     for (const s of strs) {
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   } else {
//     // do nothing
//   }
// }

// Example-3
// function getUsersOnlineMessage(numUsersOnline: number) {
//   if (numUsersOnline) {
//     return `There are ${numUsersOnline} online now!`;
//   }
//   return "Nobody's here. :(";
// }

// both of these result in 'true'
// Boolean("hello"); // type: boolean, value: true
// !!"world"; // type: true,    value: true

// Example-3
// function printAll(strs: string | string[] | null) {
//   if (strs && typeof strs === "object") {
//     for (const s of strs) {
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   }
// }

// function printAll(strs: string | string[] | null) {
//   // !!!!!!!!!!!!!!!!
//   //  DON'T DO THIS!
//   //   KEEP READING
//   // !!!!!!!!!!!!!!!!
//   if (strs) {
//     if (typeof strs === "object") {
//       for (const s of strs) {
//         console.log(s);
//       }
//     } else if (typeof strs === "string") {
//       console.log(strs);
//     }
//   }
// }

// function multiplyAll(
//   values: number[] | undefined,
//   factor: number
// ): number[] | undefined {
//   if (!values) {
//     return values;
//   } else {
//     return values.map((x) => x * factor);
//   }
// }

// Example-4
// function example(x: string | number, y: string | boolean) {
//   if (x === y) {
//     // We can now call any 'string' method on 'x' or 'y'.
//     x.toUpperCase();

//     y.toLowerCase();
//   } else {
//     console.log(x);

//     console.log(y);
//   }
// }

// function printAll(strs: string | string[] | null) {
//   if (strs !== null) {
//     if (typeof strs === "object") {
//       for (const s of strs) {
//         console.log(s);
//       }
//     } else if (typeof strs === "string") {
//       console.log(strs);
//     }
//   }
// }

// interface Container {
//   value: number | null | undefined;
// }

// function multiplyValue(container: Container, factor: number) {
//   // Remove both 'null' and 'undefined' from the type.
//   if (container.value != null) {
//     console.log(container.value);

//     // Now we can safely multiply 'container.value'.
//     container.value *= factor;
//   }
// }

// type Fish = { swim: () => void };
// type Bird = { fly: () => void };

// function move(animal: Fish | Bird) {
//   if ("swim" in animal) {
//     return animal.swim();
//   }

//   return animal.fly();
// }

// type Fish = { swim: () => void };
// type Bird = { fly: () => void };
// type Human = { swim?: () => void; fly?: () => void };

// function move(animal: Fish | Bird | Human) {
//   if ("swim" in animal) {
//     animal;

//   } else {
//     animal;

//   }
// }

// Example-5
// function logValue(x: Date | string) {
//   if (x instanceof Date) {
//     console.log(x.toUTCString());
//   } else {
//     console.log(x.toUpperCase());
//   }
// }

// Example-6
