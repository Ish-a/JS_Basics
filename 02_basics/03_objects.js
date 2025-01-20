//objects can be declared in 2 ways : literal and constructor

//singleton - only 1 instance, made when objects made with constructors not with literals

// object.create - when creating through constructors

//object literals

const mySym = Symbol("key1"); //declared a new symbol


const JsUser = {
    name: "Anushka",
    "full name": "Anushka Tiwari",
    [mySym]: "myKey1",
    age: 21,
    location: "Mumbai",
    email: "anushka@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday","Friday"]
}

//the key (eg name) is a string
console.log(JsUser.email)
console.log(JsUser["email"]);

//above both are ways, but dot one is used less, since for key like full name, only the 2nd method is possible

console.log(JsUser["full name"]);
// console.log(typeof JsUser.mySym); //string
console.log(JsUser[mySym]);
//defined the key as [mySym] since it is a symbol

JsUser.email = "anushka@yahoo.com"; 
//can change or override the values with = 
// Object.freeze(JsUser)
JsUser.email = "anushka@micro.com";
console.log(JsUser)

//by Object.freeze - we freeze the object value to the prior one, and it couldn't be changed

//Adding a function
JsUser.greetings = function(){
    console.log("Hello! Greetings JS user");    
}

JsUser.greetingsTwo = function(){
    console.log(`Hello ${this["full name"]}! Hope you doing great`);    
}

console.log(JsUser.greetings()); //output of the function

console.log(JsUser.greetings);//here a function is returned back, not executed, but just reference

console.log(JsUser.greetingsTwo());







