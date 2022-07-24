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

function extractFromObject<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

// class DataStorage {
//   public data: Array<string> = [];

//   addItem(item: string) {
//     this.data.push(item);
//   }

//   removeItem(item: string) {
//     this.data.splice(this.data.indexOf(item), 1);
//   }

//   getItems() {
//     return [...this.data];
//   }
// }

// class DataStorage {
//   public data: Array<string | number> = [];

//   addItem(item: string | number) {
//     this.data.push(item);
//   }

//   removeItem(item: string | number) {
//     this.data.splice(this.data.indexOf(item), 1);
//   }

//   getItems() {
//     return [...this.data];
//   }
// }

// const stringStorage = new DataStorage();
// stringStorage.addItem("Leela");
// stringStorage.addItem("John");
// stringStorage.removeItem("Leela");
// console.log(stringStorage.getItems());

// const numberStorage = new DataStorage();
// numberStorage.addItem(1);
// numberStorage.addItem(2);
// numberStorage.removeItem(1);
// console.log(numberStorage.getItems());

// class DataStorage<T> {
class DataStorage<T extends string | number | boolean> {
  public data: Array<T> = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const stringStorage = new DataStorage<string>();
stringStorage.addItem("Leela");
stringStorage.addItem("John");
stringStorage.removeItem("Leela");
console.log(stringStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());

interface course {
  title: string;
  description: string;
  addedDate: Date;
}

// function addCourse(
//   title: string,
//   description: string,
//   addedDate: Date
// ): course {
//   let course: course = {
//     title,
//     description,
//     addedDate,
//   };

//   return course;
// }

function addCourse(
  title: string,
  description: string,
  addedDate: Date
): course {
  //   let data: course = {};
  let data: Partial<course> = {};

  data.title = title;

  data.description = description;

  data.addedDate = addedDate;

  //   return data;
  //   return data as course;
  return <course>data;
}

// let names: string[] = ["Leela", "John"];
let names: Readonly<string[]> = ["Leela", "John"];
// names.push("Manik");
