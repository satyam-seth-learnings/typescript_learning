function Logger(logString: string) {
  console.log("Logger Factory");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function Component(template: string, hookId: string) {
  console.log("Component Factory");

  return function (constructor: any) {
    console.log("Template Component");

    const hookEl = document.getElementById(hookId);
    const data = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = data.name;
    }
    console.log(constructor);
  };
}

@Logger("Logging into Logger")
@Component("<h1>Hai</h1>", "app")
class Person {
  name = "Leela";

  constructor() {
    console.log("creating object...");
  }
}

function Log(target: any, propertyName: string) {
  console.log(target);
  console.log(propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Price should be positive number");
    }
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  getPriceWithTax(tax: number) {
    return this._price * tax;
  }
}

const product = new Product("New Product", 12);

console.log(product);
