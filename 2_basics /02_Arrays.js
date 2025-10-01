const marvel_heros = ["ironman", "thor", "hulk"];
const dc_heros = ["superman", "batman", "joker", "flash"];

// allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

 all_new_heros = [...marvel_heros, ...dc_heros]   // spread operator
    console.log(all_new_heros);

const mewArray = [1,2,[3,4,5],6,7,[8,9]]
console.log(mewArray.flat());


console.log(Array.isArray("kartik"))
console.log(Array.from("kartik"))
console.log(Array.from({name: "kartik"})) // interesting case 

let score1= 300 
let score2= 200
let score3= 100 
console.log(Array.of(score1,score2,score3));

