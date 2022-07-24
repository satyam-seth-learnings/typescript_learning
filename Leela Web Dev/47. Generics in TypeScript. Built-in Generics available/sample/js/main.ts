// let names = ["Leela", "john"];
let names: Array<string> = []; // string[]

let promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(1);
    resolve("resolve string data");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});
