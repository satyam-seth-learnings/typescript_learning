/**
 * Basic Interface
 */
interface Person {
  name: string;
  age: number;
}

// Structural type system
// player implements Person interface
let player = {
  name: "Hanna",
  age: 6,
  score: 5,
};
let anotherPerson: Person = player;

/**
 * Interface extends interface
 */
interface Developer extends Person {
  domain: string;
  experience: number;

  develop: (software: string) => void;
}
