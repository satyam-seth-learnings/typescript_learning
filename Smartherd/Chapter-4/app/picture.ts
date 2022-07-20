/**
 * Defining class
 */
class Picture {
  public artTitle: string; // member are public by default
  protected owner: string; // accessed inside the class or any classes that inherit from the class
  private _price: number; // can't be accesses outside the class

  /**
   * Getter method: with 'get' keyword with name of the property takes no parameter
   * returns value of the property
   */
  get price() {
    return this._price;
  }

  /**
   * Setter method: with 'set' keyword with name of the property takes ones parameter
   * sets the value of the property
   */
  set price(newPrice: number) {
    this._price = newPrice;
  }

  orderPicture(quantity: number): void {
    console.log(`Order ${quantity} copies of ${this.artTitle}`);
  }
}
