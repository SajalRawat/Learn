console.log(2>1);
console.log(2 >=1);
console.log(2==1);

console.log(2!=1);
// != not equal to



console.log("2">1);
console.log("02">1);
// this sometime do not give predictable result hence not prefered to compare different data types


console.log(null >0);
console.log(null ==0);
console.log(null >=0);
// predictabe result nhi aate
// OMG equality check and comparison work differently 
// equlity me null is not converted in to number 0 but in comparison(<,>,>=,<=) converts null to number 0 

// same happens with undeifined but it gives false always

// stict check "===" it strictly checks data type also
console.log("2"==2);
console.log("2"===2);


// avoid such conversions having different data types

