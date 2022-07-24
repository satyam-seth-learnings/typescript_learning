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

type Listener<T> = (projects: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listener: Listener<T>) {
    this.listeners.push(listener);
  }
}

class ProjectState extends State<Project> {
  private static instance: ProjectState;
  private projects: Project[] = [];

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
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
  constructor(private type: string) {
    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((project) => {
        if (this.type === "active") {
          return project.status === ProjectStatus.Active;
        }
        return project.status === ProjectStatus.Finished;
      });
      this.assignedProjects = relevantProjects;
      this.renderProject();
    });
  }

  private renderProject() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    ) as HTMLUListElement;

    listEl.innerHTML = "";
    for (const project of this.assignedProjects) {
      new ProjectItem(project, listEl);
    }
  }
}

class ProjectItem {
  liElement: HTMLLIElement;
  constructor(private project: Project, private element: HTMLUListElement) {
    this.liElement = document.createElement("li");
    this.renderContent();
  }

  get person() {
    if (this.project.people === 1) {
      return "1 Person";
    }
    return `${this.project.people} Persons`;
  }

  renderContent() {
    const liData = `<h3>${this.project.title}</h3>
    <div><strong>${this.person} Assigned</strong></div>
    <div>${this.project.description}</div>`;
    this.liElement.innerHTML = liData;
    this.element.appendChild(this.liElement);
  }
}

const projectInput = new ProjectInput();
const activeProjectList = new ProjectList("active");
const finishedProjectList = new ProjectList("finished");
