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

// function extractFromObject(obj: object, key: string) {
//   return obj[key];
// }

function extractFromObject<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

// extractFromObject({ name: "Leela" }, "name");
// extractFromObject({ name: "Leela" }, "age");
extractFromObject({ name: "Leela", age: 30 }, "age");
