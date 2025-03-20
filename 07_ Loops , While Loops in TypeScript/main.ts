// ==== Loops | While Loops in TypeScript ====

// Looops are used to execute the statements multiple times
// for e.g if you want to say sorry to someone you will have to write sorry 100 times here loops come to party

// 1 for loop
for (
  let i : number= 0 /*Intialiation */;
  i <= 100 /* Condition checking */;
  i++ /*Increment*/
) {
  console.log("I am sorry"); // 100 times I am sorry
}



// Write a ts programe to print the table of 2 using for loop;

for (let i = 1; i <=10 ;i++){
    let tablevalue : number = 2 * i
    console.log(` 2 * ${i} = ${tablevalue} `);
}
// Write a ts programe to print the table of 5 using for loop;

for (let table: number = 1; table  <= 10; table++) {
  let tablevalue : number = 5 * table;
  console.log(` 5 * ${table} = ${tablevalue} `);
}



// Nested for loops practise
for (let i = 0; i < 3; i++) {
  console.log("I am parent");
  for (let i = 0; i < 2; i++) {
    console.log("Iam from child");
    for (let i = 0; i < 1; i++) {
      console.log("I am from semi child");
    }
  }
}
// Output of nested
// I am parent
// Iam from child
// I am from semi child
// Iam from child
// I am from semi child
// I am parent
// Iam from child
// I am from semi child
// Iam from child
// I am from semi child
// I am parent
// Iam from child
// I am from semi child
// Iam from child
// I am from semi child


// 2 While loop

// variable declare outisde 
// while (condition) {
    
// }


let start :number = 0
while (start < 100){
    console.log("Hello while loop");
    // Incremnet other wise it will be while loop
    start++
}

// Write a program that prints table of 9 using while loop
let tableOfNine :number = 1;
while (tableOfNine <= 10) {
    console.log( `9 * ${tableOfNine} = ${9 * tableOfNine} `);
    tableOfNine ++
}