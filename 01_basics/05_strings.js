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
 
