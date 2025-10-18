 // generate a random color

 let intervalid;
 const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i=0 ; i<6 ; i++ ){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
 } 

const startchnagingcolor = function(){
    if (!intervalid) {
        intervalid =  setInterval(changecolor , 1000)
    } 
      function changecolor(){
         document.body.style.backgroundColor = randomColor()
    } 
 
}
const stopchnagingcolor = function(){
       clearInterval(intervalid)
       intervalid = null 
}

 document.querySelector("#start").addEventListener('click' , startchnagingcolor)
 
 
 document.querySelector("#stop").addEventListener('click' , stopchnagingcolor)