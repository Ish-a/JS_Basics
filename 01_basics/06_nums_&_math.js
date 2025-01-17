const score = 497
console.log(score) //497

const balance = new Number(100)
console.log(balance); //[Number" 100]

console.log(balance.toString().length); //3
console.log(balance.toFixed(3)); //100.000

const otherNumber = 12.987
console.log(otherNumber.toPrecision(3)); //13
console.log(otherNumber.toPrecision(4)); //12.99
console.log(otherNumber.toPrecision(2)); //13

//.toPrecision gives precised value to whatever digit you want.

const hundreds = 10000000
console.log(hundreds.toLocaleString()) //acc to US standards

console.log(hundreds.toLocaleString('en-IN'));


//+++++++++++++++++++++++Maths+++++++++++++++++++++

console.log(Math); //Object [Math] {}
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); //5 - round to ceil only
console.log(Math.floor(4.9)); //4

console.log(Math.min(4,3,2,6))
console.log(Math.max(7,4,2,3,4))

console.log(Math.random()); //between 0 and 1
console.log(Math.floor(Math.random()*10) + 1)
console.log((Math.random()*10) + 1); //*10 to get values between 1 nd 9, and +1 coz 0.00187 values to add 1 in them

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1)) + min) //nos between 10 and 20





