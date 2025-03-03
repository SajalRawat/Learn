const tinderUser = new Object()  //this is a singleton object 

const tinderUserTwo  = {} // while this is a non singleton object


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


const regularUser  = {
    email : "saome@gmail.com",
    fullname : {
        userFullname :
        {
        firsname : "some",
        lastname : "user"
    }
}
}
console.log(regularUser.fullname.userFullname.firsname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}


const obj3 = Object.assign({},obj1,obj2) //giving {empty} is a good practice 
// to understand the use of {} we need to understand that the first obj is target and rest of them is source 


console.log(obj3);



// spreading method
obj4 = {obj1,obj2}
// it will give object in objects

obj5 = {...obj1,...obj2}
console.log(obj5);

// we can have objects as items in arrays


// now to get keys, values only as a array 
console.log(Object.keys(obj5));  // retursn array of keys 
console.log(Object.values(obj5));  // retursn array of values


console.log(Object.entries(obj5));  // returns array of array having key and value pairs




// to check if a key is there or not(

console.log(obj1.hasOwnProperty('4'));








