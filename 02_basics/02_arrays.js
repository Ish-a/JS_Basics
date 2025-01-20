const marvel_heros = ['Thor','Ironman','Spiderman']

const dc_heros = ['Superman','Flash','Batman']

// marvel_heros.push(dc_heros) 
//gives array in array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
//again the same, array in an array. concat gives a the new array as output so const allHeroes used
// console.log(allHeros);

//spread - ek ek element indiviaual 

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

//hover on falt to know details

console.log(real_another_array);

console.log(Array.isArray("Anushka"));

console.log(Array.from("Hitesh"));  //converts into array

console.log(Array.from({name:"anushka"})); //[] empty array. Since we will have to tell beforehand if key value pair wala array hona 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

//of - converts set of elements into array





