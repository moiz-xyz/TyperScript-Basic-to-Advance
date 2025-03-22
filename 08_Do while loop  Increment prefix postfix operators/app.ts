//  Prefix postfix operators

// Post fix increment operator ( variable ++)
let index : number = 1
// index ++ 
console.log(index); //2 

let result : number = index ++
console.log( "index",index); // 2 
console.log("reuslt", result); //1

// Pre Fix operator (++variable)
let index2 : number = 1
let result2 : number = ++index2 
console.log( "index2",index2); // 2
console.log("reuslt2", result2); //2

// Do while loop 

let ab:number= 1
while (ab <=1) {
    console.log( "while", ab);
    ab++
}

let d0 = 1
do {
console.log("do while ");
d0++
} while (d0 <=10);


// Key Difference:
// for is used when iterations are predefined.
// while is used when iterations depend on a condition.
// do...while ensures execution at least once, even if the condition is false.

// Write a programe that sums even numbers
let sumOfEven :number = 0
for (let i = 0; i <= 100; i++) {
     if (i % 2 === 0){
        sumOfEven = sumOfEven + i        
     }
}
console.log("sum",sumOfEven); // sum 2550

// Write a programe that calculates the same of odd numbers 
let sumOfOdd  : number = 0
for (let i = 0; i <=100; i++) {
    if (i % 3 ===0) {
        sumOfOdd = sumOfOdd + i
    }
}
console.log("sum of odd numbers",sumOfOdd); //sum of odd numbers 1683

// Write a program that sum  even and make a list of numbers that are added 
let sumOf :number = 0
let lists : number[] = []
for (let i = 0; i <= 100; i++) {
     if (i % 2 === 0){
        sumOf = sumOf + i 
        lists.push(i)       
     }
}
console.log("lists of even no is", lists); //  [22, 24, 26, 28, 30, 32,  34, 36, 38, 40, 42,44, 46, 48, 50, 52, 54,  56, 58, 60, 62, 64,66, 68, 70, 72, 74, 76,  78, 80, 82, 84, 86,88, 90, 92, 94, 96, 98, 100]
console.log("sum is", sumOf);
