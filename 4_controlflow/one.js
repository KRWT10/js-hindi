// const temp = 50 

// if (temp >=30  ) {
//     console.log("yes temp is greater than 30");
//     }   
//     else {
//         console.log("no temp is not greater than 30");   
//     }
// console.log("well done ");


// const balance = 1000;

// if (balance <500) {
//     console.log("yes balance is less than 500");  
//     } else if (balance < 700)  {
//     console.log("yes balance is less than 700");  
//         } else if (balance < 900)  {
//         console.log("yes balance is less than 900");
//             } else {
//             console.log("no balance is greater than 900");   
//                     }



const money  = true 
const debitcard = true

const email = false
const facebook = true
// const shopping = (money && debitcard) ? console.log("you can buy the item") : console.log("you cannot buy the item");

if (money && debitcard) {
    console.log("you can buy the item");
}

if (email || facebook) {
    console.log("you can login");
} else {
    console.log("you cannot login");
}