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

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string, position: number) {
  console.log("Parameter Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
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

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * tax;
  }
}

const product = new Product("New Product", 12);

console.log(product);
