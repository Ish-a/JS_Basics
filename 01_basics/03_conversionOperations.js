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

// ------OPERATIONS------

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2) //power
// console.log(2/2)
// console.log(2%2)

let str1 = "Hello"
let str2 = " Anushka"

console.log(str1+str2);

// console.log("1" + 2) //12
// console.log(1 + "2") //12
// console.log("1" + 2 + 2) //122
// console.log(1 + 2 + "2") //32

console.log(true);
console.log(+true); //1
// console.log(true+); //error
console.log(+""); //0

let gameCounter = 100
gameCounter++
// ++gameCounter //same as gameCounter++
// console.log(gameCounter)

// ------Example from mdn docs

let x = 3;
let y = x++ //assign hone ke baad increment hua x, so y = 3
console.log(x,y)

let a = 4
let b = ++a //assign hone ke phele he a increment ho gaya
console.log(a,b)

