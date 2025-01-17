// types of datatypes - 
// kaise data ko memory me rakha jata hai and kaisa access kiya jata - ispe 2 categories of data -- primitive and non-primitive(reference type)

// 1. Primitive - call by value
// original memor ka refernce na dete hue, copy krke use hota hai ye

//-- 7 types : String, Number, Boolean, null, undefined (value nhi pata abhi, sirf declare kiya), Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const temp = null  //typeof = object
let userEmail; //value is undefined
const id = Symbol('123') //unique id
const anotherId = Symbol('123')
console.log(id===anotherId) //false

const bigNum = 9776535366237372837827382782n 

// 2. Reference (Non-primitive)
// memory ka reference directly

//-- Array, Objects, Functions

const heroes = ["superman","antman","wonderwoman"] //type of = object

let myObj = {
    name: "Anushka",
    age: "21",
} // typeof = object

//function as a variable 
// fun(){}

const myFunction = function(){
    console.log("Hello World");
} //typeof = function 

console.log(typeof heroes)