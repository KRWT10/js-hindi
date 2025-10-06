// const lang = ["js", "c++", "node", "ruby", "c" ] 
// lang.forEach(function(no){
//     console.log(no);
// })

// lang.forEach((yoo)=>{
//     console.log(yoo);
    
// })

//  lang.forEach((none, index , array )=>{
//     // console.log(none, index , array);
    
//  })

const lang = [
    {
        name : "js",
        file : "app.js"
    },
    {
        name : "c++",
        file : "app.cpp"
    },
    {
        name : "node",
        file : "app.node"
    },
    {
        name : "ruby",
        file : "app.rb"
    }
]
lang.forEach ((item) => {
    console.log(item.name);
}
) 