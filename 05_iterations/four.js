// used forin loop
const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"

}

for (const key in myObj) {
    // console.log(myObj[key]); // prints values and with onle key print keys
    // console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(key); // it gives you indexing 0, 1, 2, 3, 4
    console.log(programming[key]);
}
// for in :- object :- keys
// for of :- string, array, map :- values.

// 20:00 video no. 29


