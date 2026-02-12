// for of these are high order and array specific loops / array, and objects in javascript are very very powerful.

// ["", "", ""] / [{}, {},{}] / iss trah se aapko objects milete  hai and aapko loops ka use karke value nikalna hota hai.

const arr = [1, 2, 3, 4, 5]

// example of For of loop
for (const num of arr) { // element = num / object = arr
    // console.log(num);
    
}

const greeting = "Hello World !"
for (const greet of greeting) {
    // console.log(greet);
    if (greet == " ") {
        // console.log("space removed");
        continue
    }
    
    // console.log(`each char is ${greet}`);
    
}

// Maps
// map() → array method
// new Map() → built-in object for key-value pairs

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map);
//output: 
// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'FR' => 'France'
// }

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

let myObj = {
    game1 : "nfs",
    game2: "spiderman"
}

for (const [key, value] of myObj) {
    console.log(key, ':-', value); // error
    
}

// forof new map() buit-in object par kaam karta hai but object = {} par kaam nahi karta 