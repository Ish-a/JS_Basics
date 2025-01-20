// const tinderUserr = new Object()
//the above is empty singleton object
//since made thru constructor(function)
const tinderUser = {}
//above is empty non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sid"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//object in object
const regularUser = {
    email: "someuser@gmail",
    fullname: {
        userfullname:{
            firstname: "Anushka",
            lastname: "Tiwari"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.lastname);

//console.log(regularUser.fullname?.userfullname.lastname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const objn = {5:"c", 6:"d"}

// const obj3 = {obj1, obj2} 
//object in object issue

// Object.assign(target,source) 
const obj3 = Object.assign({},obj1,obj2,objn)

//{} acts as target and others a source. (not necessary to use {})
console.log(obj3);

// OR
const objnext = {...obj1, ...obj2} //spread
console.log(objnext)

//4:15
