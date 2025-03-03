let myDate = new Date()

// date has datatype  = object

console.log(myDate.toString());
console.log(myDate.toLocaleDateString());


// creating a custom date 

// let mycreatedDate = new Date(2023,0,12)
// month in this syntax starts from 0
// can define more like time also
// let mycreatedDate = new Date(2023,0,12,5,30)

// another syntax 
let mycreatedDate = new Date("1-1-2025")

console.log(mycreatedDate.toLocaleDateString());


// to get the current time in milseconds string use this
let timestamp = Date.now()
console.log(timestamp)

// to compare the custom created date we can convert it into miliseconds 
let mycreatedDateinmili = mycreatedDate.getTime()
console.log(mycreatedDateinmili);


// to extract certain information from the date
// month will be starting from 0
let today = new Date()
console.log(today.getDay());
// similiarily




// now we can customise the tolocalestring function according to our need
console.log(myDate.toLocaleString("default",{
    weekday: "long"
}
));
