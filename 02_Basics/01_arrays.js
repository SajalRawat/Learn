// array


let myArray = ['hitesh sir',1,2,3,4,5,5,6]
console.log(myArray[0]);

// can be deifned in another way not using square bracket in that
let anotherArray = new Array(0,2,3,4)


// array methods 

// pushing or adding values to array

myArray.push("Hello")
console.log(myArray);


myArray.pop()
// removes the last value from array
console.log(myArray);


// shift and unshift
// unshift adds item from starting and shift removes the first item
// unshift is not good as it creates load on system to shift all the values 


myArray.unshift("Rawat")
myArray.unshift("hello")
myArray.shift()
myArray.shift()

console.log(myArray);



// join() joins all the array elements and converts array into a string 
let joinfunction = myArray.join()
console.log(joinfunction);

// includes - checks if a elemtn is in the array or not 
// indexof - gives the index of item and reutrns -1 if item not is not there

console.log(myArray.includes(9));
console.log(myArray.indexOf("hitesh sir"));


// to get a part of array from original array


// slice and splice
// slice do not removes elements fom original array while splice does that
let ar1 = myArray.slice(1,3)
// last one is not included in slice
console.log(ar1);
console.log(myArray);

let ar2 = myArray.splice(1,3)
// removes from original arrya and includes last index (here 3)
console.log(ar2);
console.log(myArray);

