class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

let department = new Department("Accounting");
console.log(department);
