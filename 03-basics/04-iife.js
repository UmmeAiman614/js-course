// Immediately invoked function expressions (IIFE)

//dont miss semicolan to write 2 iife
//1st method, brackets at end
const chai = function(){
    console.log(`DB connected`);
    
}();


// 2nd method, (excution code)()

 (function aurCode(){ //named IIFE
    console.log(`DB connected Two`);
    
})();

// 3rd method
 (() =>{
    console.log(`DB connected Three`);

 })();

//OR
 ((name) =>{
    console.log(`DB connected Three ${name}`);

 })("Aiman")