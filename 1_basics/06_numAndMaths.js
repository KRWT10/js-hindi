
const num = 499;
// console.log(num);


const num2 = new Number(533);
// console.log(num2);

// console.log(num2.toString());
// console.log(num.toString().length);

// console.log(num2.toFixed(2)); // DECIMAL POINTS

const num3 = 78.79830
// console.log(num3.toPrecision(4));


const num4 = 300000000
// console.log(num4.toLocaleString('en-IN')); // INDIAN NUMBERING SYSTEM
// console.log(num4.toLocaleString('de-DE')); // GERMAN NUMBERING SYSTEM
// console.log(num4.toLocaleString('ja-JP')); // JAPANESE NUMBERING SYSTEM


// ********************************************MATHS********************************************
// console.log(Math);
// console.log(Math.abs(-4)) // ABSOLUTE VALUE -4 = 4 but 4 = 4 
// console.log(Math.ceil(4.2)); // ROUNDING
// console.log(Math.floor(4.9)); // ROUNDING DOWN
// console.log(Math.round(4.3)); // NORMAL ROUNDING
// console.log(Math.max(4,5,6,7,8,9,0,-1,-5)); // MAXIMUM
// console.log(Math.min(4,5,6,7,8,9,0,-1,-5)); // MINIMUM


console.log(Math.ceil(Math.random()*10) + 1);


const min = 10
const max = 20
console.log(Math.floor(Math.random() * ( max-min +1)) + min)