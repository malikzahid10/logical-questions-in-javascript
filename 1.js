// 1. Write a JavaScript program to swap the values of two variables without losing their original values.

// Matlab do variables ki values ek doosre se exchange karni hain.

let a = 10;
let b = 20;

let tempVariable = a;

a = b;
b = tempVariable;

console.log(`a = ${a} , b = ${b}`);

// ans is  a = 20 , b = 10
