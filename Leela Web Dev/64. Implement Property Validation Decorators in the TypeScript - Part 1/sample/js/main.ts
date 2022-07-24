interface ValidationConfig {
  [property: string]: {
    [validationProperty: string]: string[];
  };
  //   Course: {
  //     title: ["required"];
  //     price: ["required"];
  //   };
}

function Required(target: any, name: string) {}

class Course {
  @Required
  title: string;

  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const form = document.querySelector("form")!;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const courseObj = new Course(title, price);
  console.log(courseObj);
});
