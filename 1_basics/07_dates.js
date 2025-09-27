let todayDate = new Date()
// console.log(todayDate);

// console.log(todayDate.getDate());
// console.log(todayDate.getFullYear());
// console.log(todayDate.toDateString());
// console.log(todayDate.toISOString());
// console.log(todayDate.toJSON());
// console.log(todayDate.toLocaleString());
// console.log(todayDate.toLocaleDateString());
// console.log(todayDate.toTimeString());
// console.log(todayDate.toUTCString ());

let newDate1 = new Date("1-11-2025 ")
// console.log(newDate1.toDateString())

let newDate2 = new Date(2023,0,21,5,30,15)
// console.log(newDate2.toString())
// console.log(newDate2.toLocaleString())


let myTimeStamp = Date.now()
// console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1)

console.log(
newDate.toLocaleString('default' , {
    calendar : 'gregory',
    day : 'numeric',
    month : 'long',
    year : 'numeric',
    weekday : 'long',
    hour : 'numeric',
    minute : 'numeric',
    second : 'numeric',
    timeZoneName : 'short'
})
);
