
// Immediately Invoked Function Expressions (IIFE)

//isme hum gloabl function ke pollution ki vajah se isey function ko khud ek brackets me bind krte haii 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //yaha semiolon laga dena chahiye kyuki invoke function ko pta ni hota kahan end krna hai 
//to kaafi baar error AJATA HAI

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
