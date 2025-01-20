//objects can be declared in 2 ways : literal and constructor

//singleton - only 1 instance, made when objects made with constructors not with literals

// object.create - when creating through constructors

//object literals
const JsUser = {
    name: "Anushka",
    "full name": "Anushka Tiwari",
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
