interface Lengthy {
  length: number;
}

function getCountandDescribe<T extends Lengthy>(element: T): [T, string] {
  let text = "Got No element";

  if (element.length === 1) {
    text = "Got 1 element";
  }

  if (element.length > 1) {
    text = "Got " + element.length + " elements";
  }

  return [element, text];
}

console.log(getCountandDescribe("Hai Leela"));
// console.log(getCountandDescribe(["Leela", "john"]));
// console.log(getCountandDescribe([]));
// console.log(getCountandDescribe(1));
// console.log(getCountandDescribe({ name: "leela" }));
