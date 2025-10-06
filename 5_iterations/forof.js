// For of loop 

const k= [1,  2 , 3 , 4 , 5]
for (const num of k) {
    // console.log(num);
    
}

// const p = ["superman", "batman", "ironman", "wonderwoman"]
// for (const superhero of p) {
//     console.log("Each character is superhero : ",superhero);
    
// }

const p = "superman"
for (const superhero of p) {
    // console.log("Each character is superhero : ",superhero);
    
}

// Maps
const kar = new Map()
kar.set('IN', "INDIA") 
kar.set('JP', "JAPAN") 
kar.set('FR', "FRANCE") 
// console.log(kar);

for (const [key, value] of kar) {
    console.log(key," :- ",value );
    
}


