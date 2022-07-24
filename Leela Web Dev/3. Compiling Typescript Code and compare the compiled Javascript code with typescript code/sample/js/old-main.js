const input1 = document.querySelector('#number1');
const input2 = document.querySelector('#number2');
const button = document.querySelector('#button');

const add = (number1, number2) => {
    return number1 + number2 ;
}

button.addEventListener('click', () => {
    // console.log(add(input1.value, input2.value));
    console.log(add(+input1.value, +input2.value));
});