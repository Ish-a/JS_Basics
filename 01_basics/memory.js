// Stack - used in primitive datatypes (we get copy of variable)
// Heap - used in non-primitive datatypes(we get reference here)

let me = "Anushka Tiwari"

let anotherMe = me
anotherMe = "Isha"
console.log(me) //Anushka Tiwari
console.log(anotherMe) //Isha

// Since used primitive datatype, so stack me data store hua and copy mila of variable, so changing value wont change the actual one

let userOne = {
    email: "anu@gmail.com"
}

let userTwo = userOne

userTwo.email = "second@gmail.com"
console.log(userOne) 
console.log(userTwo)
//both values will change, since it is non-primitive, so data is reference and it changes

