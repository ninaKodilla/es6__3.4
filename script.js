//task1 

const first = 'Hello';
const sec = 'world';

console.log(`${first} ${sec}`)

//task2

let a =5;
let b= 2;

const multiply = (a, b = 1) => a * b;

console.log(`${multiply(a, b)}`)

//task3

let val = 0;

const average = (...args) => {
    val = args.reduce((x, y) => x + y) / args.length;
    return val;
};

average(1,2,3,4,5);
console.log(`${val}`);

//task4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//task5

const data = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstname, , lastname] = data;

console.log(firstname, lastname);