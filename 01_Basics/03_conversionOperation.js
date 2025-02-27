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


