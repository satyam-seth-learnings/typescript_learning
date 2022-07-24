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

interface Validatable {
  value: string | number;
  required?: true;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(validatableInput: Validatable) {
  let isValid = true;

  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }

  if (
    validatableInput.minLength != null &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length >= validatableInput.minLength;
  }

  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length <= validatableInput.maxLength;
  }

  if (
    validatableInput.min != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }

  if (
    validatableInput.max != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }

  return isValid;
}

enum ProjectStatus {
  Active,
  Finished,
}

class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}

type Listener = (projects: Project[]) => void;
class ProjectState {
  private static instance: ProjectState;
  private projects: Project[] = [];

  private listeners: Listener[] = [];

  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addListener(listener: Listener) {
    this.listeners.push(listener);
  }

  addProject(title: string, description: string, people: number) {
    const project = new Project(
      Math.random().toString(),
      title,
      description,
      people,
      ProjectStatus.Active
    );
    this.projects.push(project);

    for (const listenerFn of this.listeners) {
      listenerFn(this.projects);
    }
  }
}

const projectState = ProjectState.getInstance();

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

    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      this.clearInput();
      projectState.addProject(title, description, people);
    }
  }

  private clearInput() {
    this.titleEl.value = "";
    this.descriptionEl.value = "";
    this.peopleEl.value = "";
  }

  private gatherUserInput(): [string, string, number] | void {
    const title = this.titleEl.value;
    const description = this.descriptionEl.value;
    const people = +this.peopleEl.value;

    const titleValidatable: Validatable = {
      value: title,
      required: true,
    };

    const descriptionValidatable: Validatable = {
      value: description,
      required: true,
      minLength: 4,
      maxLength: 10,
    };

    const peopleValidatable: Validatable = {
      value: people,
      required: true,
      min: 1,
      max: 10,
    };

    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert("Input values are not valid");
      return;
    }

    return [title, description, people];
  }
}

class ProjectList {
  assignedProjects: Project[] = [];
  constructor() {
    projectState.addListener((projects: Project[]) => {
      this.assignedProjects = projects;
      this.renderProject();
    });
  }

  private renderProject() {
    const listEl = document.getElementById("project-list") as HTMLUListElement;

    listEl.innerHTML = "";
    for (const project of this.assignedProjects) {
      const listItem = document.createElement("li");
      listItem.innerHTML = project.title;
      listEl.appendChild(listItem);
    }
  }
}

const projectInput = new ProjectInput();
const peojectList = new ProjectList();
