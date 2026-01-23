// array

const Myarr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5)
console.log(Myarr[2]);

// array method

// Myarr.push(6)
// Myarr.push(7)
// Myarr.pop()

// Myarr.unshift(9) // ye method value add karta hai starta mein array ke 
// Myarr.shift() // shift(), pop() ka ulta hai hai matlab shift() aage se value gayab karta hai aur pop() piche se 

// console.log(Myarr.includes(98));
// console.log(Myarr.indexOf(9));

// const newArr = Myarr.join() // array to string
// console.log(Myarr);
// console.log(newArr);

//slice, splice

//slice original array manipulate nahi karta bas joo value hume chahiye woo laake deta hai without including last range.
// splice array manipulate kar deta hai matlab joo value hume chahiye woo usse original array se gayab kar deta hai.

console.log("A", Myarr);

const myn1 = Myarr.slice(1,3)

console.log(myn1);
console.log("B", Myarr);

const myn2 = Myarr.splice(1,3)
console.log("C", Myarr);

console.log(myn2);









