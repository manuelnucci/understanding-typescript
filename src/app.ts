// const userName = 'Max';
// userName = 'Maximilian';

// let age = 30;
// age = 29;

// var -> global and function scope
// function add(a: number, b: number) {
//   let result; // block scoped
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }
// console.log(isOld);

// console.log(result);

// const add = (a: number, b: number = 1) => a + b; // default parameters come last

// const printOutput: (output: string | number) => void = (output) =>
//   console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', (event) => console.log(event));
// }

// printOutput(add(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
  firstName: 'Max',
  age: 30,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => curResult + curValue, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2, remainingHobbies);

const { firstName: userName, age } = person;
console.log(userName, age, person);
