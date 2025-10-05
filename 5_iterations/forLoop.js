// FOR 
for (let k = 0; k <=20; k++) {
    const noob = k ;
    if (noob ==  5) {
     //   console.log("5 is the best number ever");     
    }
    //console.log(noob);
}

for (let i = 0; i <= 10; i++) {
   // console.log(`outer loop value : ${i}`);
        for (let j = 0; j < 10; j++) {
           // console.log(`inner loop value : ${j} , inner loop : ${i}`);
          //  console.log(i + '*' + j + '=' + i*j);
            
    }
    
}

let superhero = (["batman", "superman", "ironman", "spiderman", "aquaman"])
//console.log(superhero.length);


for (let index = 0; index < superhero.length; index++) {
    const element = superhero[index];
   // console.log(element);
    
    
}
// let number = 10
    
// for (let index = 1; index <=  10; index++){
//     if (index == 5) {
//         console.log("Detected the number : 5 ");
//         break;
//     }
//      console.log(`the value is : ${index}`);
// }
let number = 10
    
for (let index = 1; index <=  10; index++){
    if (index == 5) {
        console.log("Detected the number : 5 ");
        continue;
    }
     console.log(`the value is : ${index}`);
}
