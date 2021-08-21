





















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

functionExpression(); // won't work

const functionExpression = function () {};

functionExpression(); //will work
