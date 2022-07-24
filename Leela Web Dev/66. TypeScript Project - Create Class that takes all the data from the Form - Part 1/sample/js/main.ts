function autobind(target: any, name: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  const newDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      return originalMethod.bind(this);
    },
  };
  return newDescriptor;
}

enum ProjectStatus {
  Active,
  Finished,
}

class Project {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}

class ProjectInput {
  FormEl: HTMLFormElement;
  titleEl: HTMLInputElement;
  peopleEl: HTMLInputElement;
  descriptionEl: HTMLInputElement;

  constructor() {
    this.FormEl = document.querySelector("form") as HTMLFormElement;
    this.titleEl = document.getElementById("title") as HTMLInputElement;
    this.peopleEl = document.getElementById("people") as HTMLInputElement;
    this.descriptionEl = document.getElementById(
      "description"
    ) as HTMLInputElement;

    this.configure();
  }

  private configure() {
    // this.FormEl.addEventListener("submit", this.submitHandler.bind(this));
    this.FormEl.addEventListener("submit", this.submitHandler);
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();

    const title = this.titleEl.value;
    const people = this.peopleEl.value;
    const description = this.descriptionEl.value;

    console.log(title, people, description);
  }
}

const projectInput = new ProjectInput();
