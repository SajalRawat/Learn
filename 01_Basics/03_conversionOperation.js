let score = "33"
console.log(typeof(score));
console.log(typeof score);

valueInNumber = Number(score)
// in syntax use capital first letter in datatype

let stringscore = "33abc"
let stringscoreinnumber = Number(stringscore)
// it converts succesfully but not actually
console.log(stringscoreinnumber)
// this prints NaN which is also a data type
// NaN can be identified by typeof function
// similiarly undefined gives NaN


// in boolean var true gets convert to 1
// false gets convert to 0

let nullvar = null
let nullvarinnumber = Number(nullvar)
console.log(nullvarinnumber)
// null gets convert to zero

/*
"33"= 33
"33abc" = NaN
true = 1,false = 0
*/




let isloggedin = 1
let booleanisloggedin = Boolean(isloggedin)
console.log(booleanisloggedin);
// OMG bro number greater than 1 also gives true
// empty sting "" = false
// string = true


let somenumber = 33
let stringnumber = String(somenumber)
console.log(stringnumber);
console.log(typeof(stringnumber));


// ******************************** Operations *************************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2)
// 2**2 means 2 raise to the power 2 
// 2%3 = remainder

let str1 = "hello"
let str2 = "hello2"
let str3 = str1+ str2
console.log(str3);


console.log(1+"2"); 
// error nhi aata =12
console.log("2"+1);

console.log("2"+1+1);
// OMG

console.log(2+1+"1");
// OMG

// samjha brother,examples se, prioritise kaise hota hai 
// jo pehle hota hai usi tarah sabko treat next tak

// can use paranthesis
console.log(3+2*4);
console.log((3+2)*4);


console.log(true);

console.log(+true);
// OMG gives 1

// console.log(true+);
// error

console.log(+"");
// empty in num is zero


// dont use such complex operators in code



let num1,num2,num3
num1 = num2 = num3 = 2+2
// decrease readibilty hence not prefered


// increment operators 
let gamescore = 100
// let gamescore++; let use nhi hota

// gamescore++;
// postfix increment

//prefix incremement
++gamescore;

console.log(gamescore);

// study increment in mdn




