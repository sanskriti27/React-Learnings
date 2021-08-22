// promises
//1. are async

const myPromisesFunc = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 5) {
      resolve('Greater than 5');
    } else {
      reject('Less than 5');
    }
  });
};

async function myPromisesEx() {
  try {
    const val = await myPromisesFunc(1);
    console.log(val);
  } catch (err) {
    console.log('ERROR: ', err);
  }
}

myPromisesEx();

// myPromisesFunc(5)
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log('ERROR: ', err);
//   });

// myPromises
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log('Error:', err);
//   });

// Rest and spread operators
const person = {
  name1: 'abc',
  age2: 19,
  hobby: 'designing',
};

const extendedPerson = {
  ...person,
  school: 'ihj',
};

console.log(extendedPerson);

const { name, ...anotherPerson } = person;

console.log(anotherPerson);

const anotherPersonRelation = {
  ...extendedPerson,
  relation: 'brother',
  name1: 'xyz',
  ...anotherPerson,
};

console.log(anotherPersonRelation);

//array

const arr2 = ['this', 'is', 'an', 'array'];

const arr3 = [5, 6, 7];

const arr4 = [...arr2, 'some', 'value', ...arr3];

console.log(arr4);

function letsReduce(first, ...rest) {
  console.log(rest);
}

letsReduce(arr3);

// object and array destructuring

//1.

const hobby = 'webdev';

const { name5, age2, hobby: hobby5 } = person;

console.log(name5, age2, hobby5);

//2.

const [first, , , fourth] = arr2;

console.log(fourth);

//3.

function somefun({ name1 } = {}, { fourth } = []) {
  console.log(name1, fourth);
} // fourth will give undefined as the array is not passed but default argument undefined is set, without that it will give an error

somefun(person);

// string interpolation

const age = 19;
const name2 = 'kole';
const getName = () => 'full name';

const compString = `My name is ${name2}. My age is ${age}`;
const compString2 = `My full name is ${getName()}`;

console.log(compString);
console.log(compString2);

// Arrow function and default argument

const arrowF = () => {
  return 10;
};

console.log(arrowF());

// Var vs Let vs Const
function wow() {
  if (true) {
    //var myVar = 'Hello'; //(2) Used throughout the scope of function
    //const myVar = 'Hello';    // (3)scoped to brackets, but cannot be reassigned
    //myVar = 'bye';//(3) this statement won't work with const variable
    let myVar = 'Hello'; //(1) scoped to brackets
    console.log(myVar);
  }
  //console.log(myVar); //(1) this statement won't work with let
}

wow();

//array.map

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(function (val, index, arr) {
  // maps existing array (arr) to a new array by performing the function.
  return val + 5;
});

console.log(arr);

console.log(newArr);

//arr.reduce

const sum = arr.reduce(function (acc, val) {
  return acc + val;
}, 0);

console.log(sum);

//FUNCTION DEC vs FUNCTION EXP

functionDeclaration(); // will work

function functionDeclaration() {}

//functionDeclaration(); //will work

//functionExpression(); // won't work

const functionExpression = function () {};

functionExpression(); //will work
