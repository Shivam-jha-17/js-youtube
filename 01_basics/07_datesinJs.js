// Dates

let myDate = new Date()
// console.log(myDate.toString()); // Tue Jan 20 2026 23:49:51 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // ue Jan 20 2026
// console.log(myDate.toISOString()); //2026-01-20T23:52:18.195Z
// console.log(myDate.toJSON()); // 2026-01-20T23:54:39.279Z
// console.log(myDate.toLocaleDateString()); // 1/20/2026
// console.log(myDate.toLocaleString()); //1/20/2026, 11:57:15 PM
// console.log(myDate.toLocaleTimeString()); // 11:58:28 PM

// let myCreatedDate = new Date(2025, 0, 21,)
// let myCreatedDate = new Date(2025, 0, 21, 5, 3)
// let myCreatedDate = new Date("2025-01-21") // yyyy/mm/dd
let myCreatedDate = new Date("01-21-2026") // indian defining
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// using string interpolation

`${newDate.getDay()} and the time is `   

newDate.toLocaleString('default', {
    weekday: "long",
})

// end 
