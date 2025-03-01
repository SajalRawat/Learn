// fstrings in js (string interpolation)
let name = "Sajal Rawat"
let email = "sajalrawat2007@google.com"
console.log(`Hello my name is ${name} and my email is ${email}`)



// another method to construct a string
let gameName = new String("Hitesh Sir")


// methods with strings

let strA = "Hitesh Sir"

// accesing alphabets of word (starting from 0)
console.log(strA[2])


// to get thoer methods we can use __proto__ to acces these but not a compuslory in syntax

console.log(strA.length)
console.log(strA.toUpperCase())
// above is similiar to strA.__proto__.toUpperCase

console.log(strA.charAt(2))
// to have the character at the certain number

console.log(strA.indexOf("t"))
// to get number of a character


// dividing a string into a substring
let subStrA = strA.substring(0,2)
// last character number is not included
// using negative will be not accepted and will work in default method
console.log(subStrA)

let subStrB = strA.slice(-8,4)
// reverse values are also accepted in this and using (-) starts it from opposite side
console.log(subStrB);

let subStrC = "   Hitesh Sir    "
let trimStr = subStrC.trim()
// removes starting and ending spaces
console.log(trimStr);


let url = "https;/hiteshsir.com/%20HIteshSir"
let replacedUrl = url.replace("%20","-")
console.log(replacedUrl);


// asking 
 let ask = url.includes("hitesh")
 console.log(ask);
 


//  converting string into array based on a character

let hello = ("hello-bro-how are you")
let splite = hello.split('-')
console.log(splite);



