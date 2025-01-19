// const arr = [0,1,2,3,4,5,true,"anushka"]

const myArr = [0,1,2,3,4,5]

//JS array me copy operation creates shallow copies
//shallow copy - copy with same reference 
//deep copies - not same reference
//JS array is resizable and can contain mix of different datatypes.

const arr2 = new Array(1,2,3,4,5)
// console.log(arr2);
// console.log(arr2[2]);

//METHODS

// myArr.push(6);
// myArr.push(7);
// myArr.pop()

// myArr.unshift(9) //starting me add
myArr.shift()//starting se remove

console.log(myArr.includes(8));
console.log(myArr.indexOf(10)); // -1

const newArr = myArr.join()
//converts array in string

console.log(typeof newArr); //string
console.log(typeof myArr); //object

//slice,splice

// slice - doesnt manipulates original Array

// splpice - manipulates original array

const newArr2 = myArr.slice(1,3)
console.log("slice : ",newArr2);
// console.log(typeof "myArr after slice " + myArr);
console.log("myArr after slice " , myArr);

const newArr3 = myArr.splice(1,3)
console.log("Spliced arr " , newArr3)
console.log("myArr after splice ", myArr);





