//TypeScript Asynchronous Code | SetTimeout & SetInterval Method

// Synchronous code that we normally code that executes in sequence 

let myNum : number = 10;
for (let i = 0 ; i < 10 ;i++ ){
    console.log(i);
}
 if (condition) {
    
 } else {
    
 }
 function greet(params:string) {
    console.log("Hello world");
 }
//   All of that code is Synchronous that code exexutes sequnce 

// On the other hand 
// Asynchronous code is that code that don't execute sequnce and doesn't stop the other synchronou code 

let sayhello = async (sayhello:string) => {
    return (`Hello, ${sayhello }`)
}
console.log( sayhello ('Moiz') );

// Set timout is bulit in Asynchronous FUNCION IN TS 

console.log("Hello before set time out");

let helllo = ()=>{
    console.log(`Hello World`);
}
setTimeout(helllo, 3000) // Hello worls after 3 sec

console.log("Hello after set time out");

// setInterval is another which repects the code for particular times

setInterval(() => {
    console.log("Hello interavl");
    
}, 1000);