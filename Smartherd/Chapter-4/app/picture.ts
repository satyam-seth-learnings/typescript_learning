/**
 * Defining class
 */
class Picture {
  // member are public by default
  artTitle: string;
  owner: string;

  orderPicture(quantity: number): void {
    console.log(`Order ${quantity} copies of ${this.artTitle}`);
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

  changeSettings(): void {
    console.log("update camera setting");
  }
}

let newPic: Photograph = new Photograph();
