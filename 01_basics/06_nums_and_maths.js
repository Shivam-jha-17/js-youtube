const score = 400

const balance = new Number(100) // iska matlab ye hua ki aap ne strictly javascript ko bola ki mujhe ye data type number mein hi chahiyye.

// isko use karne ka ek dusra reason bhi hai ki isse use karne se huume numbers ke prototype ke baare mein pata lagta hai by running this on console inspect.

// console.log(balance);

// console.log(balance.toString().length); // isse fayda ye hai ki number ab string data type mein convert ho gya hai jisse usse aur additional methods mil gye hai.
// console.log(balance.toFixed(2)); // 100.00

const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(3)) // dhyan se use karna hai 

const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));

// we also learn more about numbers MAX_SAFE_INTEGER OR MIN_SAFE_INTEGER (number.MAX_SAFE_INTEGER OR number.MAX_SAFE_INTEGER) ON console inspect

// +++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math); // run this on inspect console for prototype methods.

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); // output :- 5 // means jab bhi ceil(top) use karte hai uska matlab ye hua ki agar value 4 se thoda bhi upar gyi toh top value print karna hai which is 5.
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1)) + min));





// 1. Understanding Math.random()
// Math.random() generates a random decimal number between 0 and 1. This range includes 0 but excludes 1.
// For example, Math.random() might generate numbers like 0.234, 0.6789, or 0.999.
// 2. Multiplying Math.random()
// When you multiply Math.random() by a number, like 10, you stretch the range:
// Math.random() * 10 will give a random number between 0 and just below 10.
// This range is [0, 10), meaning it can be as low as 0 but will never reach 10 (the highest possible value is close to 9.999999...).
// 3. Using Math.floor()
// Math.floor(x) rounds down the number x to the nearest integer.
// So, Math.floor(Math.random() * 10) will convert the range [0, 10) to an integer range from 0 to 9.
// You can get 0, 1, 2, ..., up to 9, but never 10.
// 4. Including 10 in the Range
// If you want to include 10 in the range, you need to change the multiplication factor:
// Math.floor(Math.random() * 11) will give you a range of integers from 0 to 10.
// This is because you're now generating numbers in the range [0, 11), and Math.floor() will convert it to [0, 10].
// 5. Shifting the Range (Adding 1)
// If you want the range to start from 1 instead of 0, you simply add 1 to the result:
// Math.floor(Math.random() * 10) + 1 will give you a range from 1 to 10.
// This works because now the range [0, 9] gets shifted to [1, 10].
// 6. Extending to Max-Min Concept
// To generate a random integer between any min and max values, you use this formula:
// Math.floor(Math.random() * (max - min + 1)) + min.
// Example: To get a number between 5 and 15 (both inclusive):
// Math.floor(Math.random() * (15 - 5 + 1)) + 5
// This simplifies to Math.floor(Math.random() * 11) + 5, giving you a random integer from 5 to 15.  hope this helps.