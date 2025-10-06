const Num = [1,2,3]
const Newnum = Num.reduce ( (acc , curval ) => { 
    console.log(`acc is ${acc} and curval is ${curval} `);
    
    return acc + curval }, 0 )
console.log(Newnum);



const shoppingkart = [
    {item : "laptop" , price : 30000},
    {item : "mobile" , price : 20000},
    {item : "tv" , price : 25000},
] 

const Mykart =shoppingkart.reduce(( acc , item) => acc + item.price , 0)
console.log(Mykart);
