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
 * Child class
 */
class Photograph extends Picture {
  camera: string;

  changeSettings(): void {
    console.log("update camera setting");
  }
}

let newPic: Photograph = new Photograph();
