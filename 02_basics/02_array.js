const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeors = marvel_heros.concat(dc_heros)
// console.log(allHeors);

// another easy method

// spread operator = kaanch ka gilass

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

// output of concat and spreadoperator is same
// but coders prefer using spreadoperator more.

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]]
const real_another_array = another_array.flat(Infinity) // depth ki value apni traf se deni hoti hai but hum ifinity use kar rahe taaki compiler khud read karke proper out put hume de de.

console.log(real_another_array);

// data cleaning form another website 

console.log(Array.isArray("Hitesh"));
console.log(Array.from("shivam"));
console.log(Array.from({name: "shivam"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// isArray = array check
// from = convert to array
// of = create new array 

// Array prototype vs Array static method

//Prototype methods → existing array par kaam karte hain
// Example :- push, pop, map, filer, slice, splice, reduce, foreach(loop).

// Static methods → naya array banane ya check karne ke kaam aate hain
// Example :- isArray, from, of. 
