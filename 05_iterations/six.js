// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// if you want to hold the foreach loop in a variable you got undefined in output because foreach can not return anything.
// const values = coding.forEach( (item) => {
//     console.log(item);
        // retun item
// })

// console.log(values);

// filer operation 
// filter value return karta hai for each nahi karta.

const myNums = [1, 2, 3, 4, 5, 6 , 7 ,8, 9, 10]
// isme conditon dena hota hai.
// const newNums = myNums.filter( (num) => num>4 )

// console.log(newNums);

// agar hum implicit return karte hai likhe => ke baad hi kuch koi condition likhte hai toh value return hogi lekin agar hum scpor laga dete hai {} toh value return ke return keyword use karna hoga condition ke saath.
// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// console.log(newNums); // output: [] empty array but with return keyword you got the result.

// for each ke saath hum ye kaise kar sakte hai.

// const newNums = []

// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

// some example

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// let userbooks = books.filter( (bk) => bk.genre === 'History')

userbooks = books.filter( (bk) => { 
    return bk.publish >= 1955 && bk.genre === "History"
})

console.log(userbooks);
