/**
 * Person Interface
 */
interface Person {
  name: string;
  formatName: () => string;
}

/**
 * Object literal implementing Person interface
 */
let newPlayer: Person = {
  name: "Annapurna",
  formatName: () => "Ann",
};
