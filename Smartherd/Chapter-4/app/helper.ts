class Helper {
  /**
   * Fetch input data
   * @param elementID
   * @return input element
   */
  static getInputVal(elementID: string): string {
    const inputElement: HTMLInputElement = <HTMLInputElement>(
      document.getElementById(elementID)
    );

    return inputElement.value;
  }
}
