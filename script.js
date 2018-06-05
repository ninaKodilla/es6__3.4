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


const average = (...args) => args.reduce((x, y) => x + y) / args.length;


average(1,2,3,4,5);

//task4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//task5

const data = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstname, , lastname] = data;

console.log(firstname, lastname);

//task6 -caps

const names = ["Ania", "Krzyś", "Tomka", "Madzia", "Nina", "Julka", "Mateusz", "Jakuba"];
const teacherCaps = 237;

const sum = (...names) => {
    names.map(x => 5)
    names.reduce((x,y) => x + y , teacherCaps)
}