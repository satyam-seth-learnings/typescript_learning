/**
 * Result Interface
 */
interface Result {
  playerName: string;
  score: number;
  numberOfProblem: number;
}

/**
 * Object literal implementing Result interface
 */
let newResult: Result = {
  playerName: "Anna",
  score: 5,
  numberOfProblem: 4,
};
