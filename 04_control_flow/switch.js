// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
// agar case 3 mein break statement nahi hoga to woo condition joo kuch bhi likha hai woo execute kar dega except default value.
    default:
        console.log("default case match");
        
        break;
}