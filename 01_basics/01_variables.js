const accountId = 13
let accountEmail = "sid@gmail.com"
var accountPassword = "12345"
accountCity = "Goa" //Works in JS, but not a good practice to use
let accountState // Undefined

// accountId=04 //This is constant value once declared cannot be changed, will throw error
accountEmail="sn@google.com" 
accountPassword="54321"
accountCity="Tokyo"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId) // Use to print 

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) //To print many instance in tabular form