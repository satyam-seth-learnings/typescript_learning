interface ValidationConfig {
  [property: string]: {
    [validationProperty: string]: string[];
  };
  //   Course: {
  //     title: ["required"];
  //     price: ["required"];
  //   };
}

const validatorObj: ValidationConfig = {};

function Required(target: any, name: string) {
  //   console.log(target);

  const className = target.constructor.name;
  validatorObj[className] = {
    ...validatorObj[className],
    [name]: ["required"],
  };
}

function Positive(target: any, name: string) {
  //   console.log(target);

  const className = target.constructor.name;
  validatorObj[className] = {
    ...validatorObj[className],
    [name]: ["positive"],
  };
}

class Course {
  @Required
  title: string;

  @Positive
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const form = document.querySelector("form")!;

function validate(obj: any) {
  let validatorName = validatorObj[obj.constructor.name];
  //   console.log(validatorName);

  if (!validatorName) {
    return true;
  }

  let isValid = true;
  console.log(validatorObj);

  for (const prop in validatorName) {
    // console.log(prop);
    for (const validator of validatorName[prop]) {
      //   console.log(validator);
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const courseObj = new Course(title, price);

  if (!validate(courseObj)) {
    alert("input values are not valid");
    return;
  }
  console.log(courseObj);
});
