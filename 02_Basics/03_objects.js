// singleton

// object literals
// object.create
let obj = {
    name : "SajalRawat",
    email: "sajalrawat2007@google.com"

}
// key is considered string by default name -> "name"
console.log(obj.email)
console.log(obj["email"])
// if dot then no need to String in key but using bracket we need string key
// if we had a string as key with "" then we can't use dot notations 


// now if we want to use a Symbol(unique id) as a key and call the symbol thenwe need to use different syntax 

let mysym1 = Symbol("Hello")
let obj2 = {
    [mysym1] : "Interesting" // we have to use [ ] to use symbol as key not a string 
}

// to call it we need to use [] without ""

console.log(obj2[mysym1]);
console.log(obj2);


// ok now to edit the the values we can directly call them and change them

obj.email = "sajalrawat2007@microsoft.com"
obj.newkey = "hello world"  //can add new key value pairs also
console.log(obj);





// now to lock the object and resist any changes we can use freeze
// Object.freeze(obj)
// now changing will not give error but it will not change

obj.email = "sajalrawat20007@tesla.com"
console.log(obj);



// adding function in object as a value (functiona are also treated as variables in js)
obj.greetings = function(){
    console.log("Hello Brother");
    
}

obj.greetingsTwo = function(){
    console.log(`Hello ${this.name} ,  How are you?`);
    // now to refer the same obj in which function is created we can use this
    
}

console.log(obj.greetings) 
console.log(obj.greetings()) 
console.log(obj.greetingsTwo()) 




