const name = "kartik"
const greeting = "how-are-you";


// console.log( name + greeting); 

console.log(`hello my name is ${name} and ${greeting}`);


// console.log(name[0]);
// console.log(name.toUpperCase());
// console.log(name.__proto__);
// console.log(name.length);
// console.log(name.charAt(3));
// console.log(name.indexOf('t'));


const newGreeting = greeting.substring(0,5)
console.log(newGreeting);

const newGreeting2 = greeting.slice(-3)
console.log(newGreeting2);

const newGreeting3 = "      Kartik rawat       "
console.log(newGreeting3);
console.log(newGreeting3.trim());

const newUrl = "https://www.instagramqwerty.com"
console.log(newUrl.replace("qwerty","__"))

console.log(newUrl.includes("instagram")); // TO ASK IF A STRING IS PRESENT OR NOT

const newName ="usha-rawat"
console.log(newName.split('-')); // SPLIT INTO AN ARRAY BASED ON THE PARAMETER

