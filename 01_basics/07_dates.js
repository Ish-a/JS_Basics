let myDate = new Date() //this is an object, instance of date

console.log(typeof myDate) //Object

console.log(myDate.toString()); //Fri Jan 17 2025 13:55:31 GMT+0000
console.log(myDate.toDateString()); //Fri Jan 17 2025

console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

//Month start from 0 in javascript

let myCreatedDate = new Date(2025, 1, 25)
console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date("02-25-2025")

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); 

//both converted in time to compare 

console.log(Math.floor(Date.now()/1000));
// gives seconds

let newDate = new Date(); //object
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth+1); 

newDate.toLocaleDateString('default',{
    weekday:"long",
})

