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
console.log( sayhello ('Moiz') ); // 
