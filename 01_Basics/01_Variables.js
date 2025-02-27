const accountId = 144553
// const locks the value
let accountEmail = "sajal@google.com"
var accountPassword = "12340"
accountCity = "Jaipur"


let accountState;
// this helps in declaring undefined variable 

// accountId = 2 not allowed

console.log(accountId)
// gives error as const cannot be assigned again

// let is prefered in js now 

/* 
prefer not use var 
because of issue in block scope and functional scope
simple method of direct declaring variable because it is not prefered
*/

accountEmail = "sajal@msc.com"
accountPassword = "5"
accountCity = "Bengaluru"

console.table([accountCity,accountEmail,accountPassword,accountState])
// this helps in printing multiple variables 