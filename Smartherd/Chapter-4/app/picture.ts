/**
 * Defining class
 */
class Picture {
  // member are public by default
  static artTitle: string;
  owner: string;

  constructor() {
    console.log("Creating a new Picture");
  }

  orderPicture(quantity: number): void {
    console.log(`Order ${quantity} copies of ${Picture.artTitle}`);
  }
}

/**
 * Interface to implement
 */
interface Artist {
  fullName: string;
  age: number;
}

/**
 * Child class
 */
class Photograph extends Picture implements Artist {
  camera: string;
  fullName: string;
  age: number;

  constructor(newCamera: string) {
    super();
    this.camera = newCamera;
  }

  changeSettings(): void {
    console.log("update camera setting");
  }
}

let newPic: Photograph = new Photograph("Sony");
newPic.camera = "Canon g7x";
