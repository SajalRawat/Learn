let marvel = ["thor","captain america","spiderman"]
let dc = ["flash","superman","batman"]

// marvel.push(dc)
// console.log(marvel);
// here dc array got added as a element in marvel array 
// console.log((marvel [3])[2]);


let newArray = marvel.concat(dc)
// joins array 
console.log(newArray);

// spread operator (this spreads(...) the element individual)
let allHeroes = [...marvel,...dc]
 

// array me array 
let arrayinarray = [1,2,3,[2,3,[1,2,4]]]

// now to get all the elements out from array and make them direct the elements of the original array 

let flattedarray = arrayinarray.flat(Infinity)
// in function tell the depth in it

console.log(flattedarray);




// converion in array
console.log(Array.isArray("Hitesh Sir"))

console.log(Array.from("hitesh sir"))
console.log(Array.from({"teacher":"hitesh sir"}))  //interesting (we need to tell from what to make arry (from key or the value)) returns empty array


let sc1 = 100
let sc2 = 200
let sc3 = 300


console.log(Array.of(sc1,sc2,sc3));
















 
    