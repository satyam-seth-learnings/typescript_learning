const input1 = document.querySelector("#number1") as HTMLInputElement;
const input2 = document.querySelector("#number2") as HTMLInputElement;
const button = document.querySelector("#button");

const add = (number1: number, number2: number) => {
  return number1 + number2;
};

button!.addEventListener("click", () => {
  console.log(add(+input1.value, +input2.value));
});
