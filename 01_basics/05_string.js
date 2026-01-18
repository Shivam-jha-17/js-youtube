const name = "shivam"
const repoCount = 50

// console.log(name + repoCount + " value"); // this is outdated method

// the modern way of concatenation syntax which is called string interpolation.
// console.log(`Hello My Name is ${name} and my repo count is ${repoCount}`); // backticks provide string interpolation jisme aap banate hai placeholders jisme aap variable directly inject kar sakte hai.
 
// another way of declaring string.

const gameName = new String('shivam-hc') // we got some method [prototype] on inspect console window about string by declaring this variable.

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 8)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "      shivam      "
console.log(newStringOne.trim());

const url = "https://shivam.com/shivam%20jha"

console.log(url.replace('%20', '-'));

console.log(url.includes('kumar'));

// spliting or converting string into array on the basis of '-' .

console.log(gameName.split('-'));

 





