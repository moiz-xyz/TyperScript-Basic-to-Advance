//  CONDITIONLS STATEMETS IN TYPESCRIPT

//  Syntax
if (true) {

} 
// if is a reserved keyword
//  () condtion is to be writtn in this bracket 
//  {} code that is to exected is to be wriiten in here 
//  These statemenst are used to check which particulkar code you want to execute i your program 

// For e.g 
let condition : boolean = 2 > 1 && 3 < 4 

if (condition === true){
    console.log("condition is true");
}
if (condition === false) {
    console.log("condtion is false");
} // here if the condtion is true then first if will be exectuted if its is false then second if statement will be executed 

// In this way you can mange which particular block of code will be exccuted

// Nested if  == If inside if
if ( 2 > 1){
    console.log("Parent");
    if ( 10 > 5){
     console.log("Child");
     if ( 3 > 4){
        console.log("Nested child");
     }
    }
}


// if - else statement 
// if  the condtion is true the if block will be exected other wise the else block will be executed

let agecheck :number = 10;
if (agecheck >= 18){
    console.log("You are alloweed to vote");
} else {
    console.log("You are not allowed to vote");
}


// ==== Solution of the Problems in txt file ====

// Number one 
let base : number = 10;
let height : number = 20;
let areaOfTriangle : number = 1 / 2 * (base * height) ;
console.log(`Area of triangle which has a base of ${base} and heigth of ${height} is ${areaOfTriangle}`); // 100

// Number two 
let lenghtOfCube : number = 30;
let breathOfCube :number = 10;
let heightOfCube :number = 5;

let volumeOf_Cube : number = lenghtOfCube * breathOfCube * heightOfCube;
console.log(`The volume of the cube which has a length of ${lenghtOfCube} breath of ${breathOfCube} and height of ${heightOfCube} is ${volumeOf_Cube}`);

// Number 3
let check_Numnber : number = -1;
if (check_Numnber >=1){
    console.log(`The given ${check_Numnber} numbers  is positive`);
}
if (check_Numnber < 0 ){
    console.log(`The given ${check_Numnber} numbers  is negative`);
}
if (check_Numnber = 0 ){
    console.log( `The given ${check_Numnber} numbers  is zero `);
}

// Number 4
let even_odd : number = 9;
if (even_odd % 2 === 0 ){
    console.log(`The number ${even_odd} is even`)
} 
if (even_odd % 3 === 0){
    console.log(`The number ${even_odd} is odd`)
}

// Number 5
let age_of_person : number = 17;
if (age_of_person >=18){
    console.log(`You are eligible for the casting of vote`);
}
if (age_of_person < 18){
    console.log(`You are not eligible for the casting of vote`);
}


// Number 6 
let expression : number = ( (10+5) * 3-2 / (4 % 3) -7 );
console.log(expression); // 36