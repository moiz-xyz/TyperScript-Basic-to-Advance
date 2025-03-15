//  01 Template literls ( ` `) ;
// A new and fast way to deal with strings
let userName : string = "John doe" ; 
console.log(userName + "emailId"); // normal way to cocat but it fails when you are solving large problems

console.log(`${userName} emailid`);// using backticks 

// 02 Data  types 
// data types can be checked using a reserved keyword type of

let data  : string = "my name"
console.log(typeof data); // output is string

let numbData : number = 123;
console.log(typeof numbData); // number

let boleeanData : boolean = false
console.log(typeof boleeanData);  // boolena

// 03 Operators 

// a) Arithmetic Operators
let firstNumber : number = 10;
let secondNumber : number = 5;

// I Additon  (+)
let addition : number = firstNumber + secondNumber ; 
console.log(addition); // 15

// II Subtraction  (-)
let subtraction : number = firstNumber - secondNumber ; 
console.log(subtraction); // 5

// III Multiplication (*)
let multiplication : number = firstNumber * secondNumber ; 
console.log(multiplication); //50

// IV Divison (/)
let divison : number = firstNumber / secondNumber ; 
console.log(divison); // 2

// IV Modulus (%)
let remainder : number = firstNumber % secondNumber ; 
console.log(remainder); // 0

// V Exponention  (**)
let powerOfNumber  : number = firstNumber ** secondNumber ; 
console.log(powerOfNumber); // 100000cls

// b) Assignmnet operator = are used to assign the values 

// I)  = 
let n1 :number = 10 // = assign the vlaue of 10 to n1 

// II Assignment Arithematic operators (+=), (-=) ,(*=)(/=) (%=)
n1 += 5 ;  // += add 5 value to n1 now n1 is 15
console.log(n1); // 15
// you can do the same with other arithmeatic operators

// c) Comparison operator 
let firstCompare :number= 30;
let secondCompare :number = 10;

// I  Equal to ===
let equal :boolean = firstCompare === secondCompare
console.log(equal); // false why 30 is not equal to 10

// II  Not-Equal to !=
let notEqual :boolean = firstCompare != secondCompare
console.log(notEqual); // True why 30 is not equal to 10

// III  Greater then >
let graeter :boolean = firstCompare > secondCompare
console.log(graeter); // True why 30 is greater then  10

// IV Lower then  <
let lower :boolean = firstCompare < secondCompare
console.log(lower); // False why 30 is not lower than  10

// V Greater than equal to >=
let graeter_Or_equal :boolean = firstCompare === secondCompare
console.log(graeter_Or_equal); // true why 30 is graeter  to 10

// VI Lower then equal to  <=
let lower_Or_Equal :boolean = firstCompare < secondCompare
console.log(lower_Or_Equal); // False why 30 is not lower than 10

