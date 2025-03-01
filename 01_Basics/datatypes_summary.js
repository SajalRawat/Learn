// Primtive

// 7 types : String,Number,Boolean,Null,undefined,Symbol,BigInt


// Javascript is
// number and float are same (decimal wale)
const id  = Symbol("123")
const anotherid  = Symbol("123")
// still they have same value but they are not same they are unique in themselves
console.log(id==anotherid);
// gives false

// let bignumber = 123456789n








// Reference (non-primitive)

//Array,Objects,Functions


const herosArray = ["shakitman","naagraj","doga"]
let myobj={
    name:"hitesh",
    age:"22"
}

const myfunction = function(a,b){
    console.log("Hello World",a)
}
myfunction(1,2)
console.table(typeof(myobj))
console.table(typeof(myfunction))
console.table(typeof(herosArray))


// *************************************************

// memory = Stack,Heap
// primitve me stack memory
// non primitve me heap memory

// stack memory me hame variable ka copy milta hai



// heap memory me hame variable original milta hai (reference)


// simple changing another variable having the value of original will change the original in heap memory metho