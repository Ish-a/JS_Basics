const name = "isha"
const repoCount = 30

// console.log(name + repoCount + "Value") //isha30Value

//backticks - string interpolation

console.log(`Hello my name is ${name} and I have a repo count of ${repoCount}`)

// another way - how to declare a string
const gameName = new String('anushka-t')

//here the string anushkat is an object. 0-a, 1-n, 2-u...

console.log(gameName[0]); //a
console.log(gameName.__proto__); //{} - functions that could be accessed

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); //u
console.log(gameName.indexOf('t'));

const subbedString = gameName.substring(0,4);
console.log(subbedString)

const slicedString = gameName.slice(-8,4) //could use negative
console.log(slicedString)

const newStringOne = "   isha    "

console.log(newStringOne);
console.log(newStringOne.trim());


 const url = "https://anushka.com/anuhska tiwari"
 console.log(url.replace('%20','-'))

 //browser converts empty spaces into %20

 console.log(url.includes('anushka'))

 console.log(gameName.split('-'));
 
