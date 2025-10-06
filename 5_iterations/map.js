const Num = [1,2,3,4,5,6,7,8,9,10]

// const NewNum = Num.map( (num)=>{ return num * 2} )


const NewNum = Num.map (( num ) => num *2 )
                .map((num )=> num +4)
                .filter((num)=> num  <= 66)
console.log(NewNum);