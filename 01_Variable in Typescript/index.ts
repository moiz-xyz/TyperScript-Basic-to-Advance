// Install node.js npm and typescript comiler before using typescript 

// variable in typescript 
// Why we declare Varaiable ?

// In order to store any data in ram we use variable

let hello : string = "hello world"
//  here let is the keyword which is used to declare variable except let "const" is also used when you are ustoring something that will not changed
// string : is the type of data which is being stord it can be number ,boleean too 
// "hello world" is the data it can be anything

// TO See at your console in npm
// Type tsc file name 
// node typescript file name

console.log(hello); // Output "hello world"

const age : number = 19;
const eligible : boolean = false 
console.log(age); // Output "19"
console.log(eligible); // Output "false"


let num1 : number = 10;
let num2 : number = 5;

const add   :number = num1 + num2 ;
const sub   :number=  num1 - num2 ;
const multi :number = num1 * num2 ;
const divide :number= num1 / num2 ;

// Exercise

// Mutliplaying 10 variables 
let a = 5;
let b = 3;
let thirdvar : number = a * b;
console.log(thirdvar); // 15

let fourthvar =  thirdvar * 3;
console.log(fourthvar); // 75

let fifthvar = fourthvar * 8;
console.log(fifthvar); // 390

let sixthvar = fifthvar * 6;
console.log(sixthvar); // 2340

let seventhvar = sixthvar * 4;
console.log(seventhvar); // 9360

let eightvar = seventhvar * 9;
console.log(eightvar); // 84240

let ninthvar = eightvar * 12;
console.log(ninthvar); //1010880

let tenthvar = ninthvar *5;
console.log(tenthvar); //5054400

// ==== Primitive Data types  ====

// 1 string = text value 
// 2 number = numerica value
// 3 Boolean =  either true or false depends on condion
// 4 Undefined = whether it is not defined or not been assigned by a value 
// 5 null  = empty value

//  Some rules for variable declaring 

// 1- It can start with number, special character E.g 123myName it can be letters , numbers, $ sign and underscores
// 2- There should be no space between two words E.g ny Name
// 3- Varible can only cantain letters , numbers, $ sign and underscores

// ==== TYPE ANNOTATIONS ON VARIABLE  ====
//  same as varible declaaring 

let hello2: string = "Moiz" // if we write a number here E.g 2 error ocurs we cannot type the number if we declare the type of string same goals for number too


