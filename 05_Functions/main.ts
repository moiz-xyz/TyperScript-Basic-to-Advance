//  FUCTIONS IN TS ARE USED TO INCREASE THE REUSEIBILITY OF CODE

//  syntax 
function nameOfFunction() { // you can keep any name of function
    
}
nameOfFunction()  // calling of fucntion without this code writen in function will not execute 
function greet() {
    return "hello " 
}
greet(); // hello 
// to use it again 
greet () // hello 

// PARAMETERS AND ARGUMNETS IN TYPESCRIPT

// Parameters are the named variables listed in a function’s definition that specify the type and number of inputs the function expects.

// Arguments are the actual values passed to the function when it is called, which correspond to the defined parameters.

function hellouser (name : string){
    return (`Hello ${name}`)
}
console.log( hellouser ("Moiz")  ); // Hello Moiz 
console.log( hellouser ("Irzam") ); // Hello Irzam
console.log( hellouser ("Rayyan") ); // Hello Rayyan


// ==== Solutions of Problems ===

// 1
function sum (num1 :number , num2 : number){
    let result: number = num1 + num2
    console.log(`The sum of ${num1}, ${num2} is ${result}`);
}
sum(1,2) // The sum of 1, 2 is 3

sum(12012, 31831) // The sum of 12012, 31831 is 43843

// 2 
function tempConverter (temp : number) {
    let tempConvert = temp * 9/5 +32
    console.log(`${temp} in °F = ${tempConvert}` );
}
tempConverter(12) // 12 in °F = 53.6
tempConverter(25) // 23 in °F = 77

// 3 
function percentageCalculator(obtainedMarks : number , totalMarks : number){
    let percentageCalculate = obtainedMarks /totalMarks * 100
    console.log(`The percenatage of ${obtainedMarks} & ${totalMarks} is ${percentageCalculate} %`);
    
}
percentageCalculator(495,550) // The percenatage of 495 & 550 is 90%

