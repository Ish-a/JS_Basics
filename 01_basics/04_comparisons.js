// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// all above answers in boolean values

// ****comparing different data types****

// console.log("2">1); //true
// console.log("02" > 1); //true

// avoid such conversions
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); //true

// NOTE - equality == and comparisons >,<=,<,>= work differently. 
// Comparisons convert null to a number treating it as 0.

console.log(undefined >= 0); //false

console.log("2" == 2); //true
console.log("2" === 2); //false
