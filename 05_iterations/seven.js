// map() method 
// this is also a callback function.
const myNumbers = [1, 2, 3, 5, 6, 7, 8, 9, 10]

// map ki sabse achi baat hai automatically value return karta hai.
// const newNums = myNumbers.map( (num) => num + 10)
// console.log(newNums);

// chaining

const newNums = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num => num >= 40 )) 
console.log(newNums);

