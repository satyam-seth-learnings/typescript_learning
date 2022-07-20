/**
 * Basic Interface
 */
interface Person {
  name: string;
  age: number;
}

/**
 * Interface extends interface
 */
interface Developer extends Person {
  domain: string;
  experience: number;
}
