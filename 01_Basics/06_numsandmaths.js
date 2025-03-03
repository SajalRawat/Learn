let score = 100
let number = new Number(100)
console.log(score,number);

console.log(score.toString());
// converting it into string to do more methods on it


let balance = 234.567
console.log(balance.toFixed(2));
// this converts and precises value to a number after decimals


console.log(balance.toPrecision(3));
// retuns string and is a different function


const hundreds = 10000000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));





// **************************************************MATHS************************************************
console.log(Math);
console.log(Math.abs(-4));
// returns absolute value (modulus)
console.log(Math.round(4.7));
console.log(Math.ceil(4.2));
// takes top value (opposite of Greatest integer function)
console.log(Math.floor(4.5));
// greatest integer function


console.log(Math.min(4,3,51,1))
// similarily max


console.log(Math.random());
// gives random value between 0 and 1

console.log(Math,random()*10)
// now it will give value between 0 to 10 hmmm




// code copied from hitesh sir's code for  random number between a range
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


