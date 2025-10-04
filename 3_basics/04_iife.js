// immidiately invoked functions expressions (IIFE)

// named iife 

(function mummy() {

    console.log(`DB CONNECTED`);
    
})();


// unnamed iife

((name) => {
    console.log(`DB CONNECTED AGAIN ${name}`);
    
})  (`kartik rawat `)