// let score = 23 
let score = "33"
// let score = "33abc"

console.log(typeof score);
console.log(typeof(score)); //same as above

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); 
//NaN for "33abc"
//33 for "33"
// 0 for null 
// NaN for undefined
// NaN for anushka

let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//for any value != 0, it gives true or else false
//empty string => false
//"Anushka" => true

let someNum = 88
// let someNum = undefined

let stringNumber = String(someNum)
console.log(stringNumber)
console.log(typeof stringNumber)