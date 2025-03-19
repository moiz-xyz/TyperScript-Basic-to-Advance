let moiz : string = "name";
// conider you have have multipe name like this E.g you have 1000 names you have to create 1000 varibles to solve this problem arrays comes to party
// Arrays in TS are used to store multipe data in a single name  E.G

// syntax 
// name of array : type[] = [ data to be written here  ]

let studentsArray : string[] = ["Moiz", "ALI", "Ahmed"] // so on 
// TO Access this just write index number of aaray make sure it starts from 0
console.log(studentsArray); // [ 'Moiz', 'ALI', 'Ahmed' ]

console.log(studentsArray[0]); // ['Moiz']
console.log(studentsArray[1]); // ['ALI',]
console.log(studentsArray[2]); // ['Ahmed']

let arraycalculation :number[] = [23343, 23232]
console.log(arraycalculation[0] + arraycalculation [1]);  // 46575

// TO check the length of array 
let arrayLength = ["cat" , "dog" , "parrot", "chicken"]
arrayLength.length // 4        length starts from 1 not 0

// TypeScript Built-in Functions for arrays
let defaulArrayForfunction = ["Apple", "Banana", "Grapes"]

// 1 Push === Add anything at the end of array
defaulArrayForfunction.push("Mango") // ["Apple", "Banana", "Grapes", "Mango"]

// 2 Pop === Remove the last item from the array 
defaulArrayForfunction.pop() // ["Apple", "Banana", "Grapes"]

// 3 Shift === Remove the first item of the array
defaulArrayForfunction.shift()  // ["Banana", "Grapes"]

// 4 unshift === Adds the element in the start
defaulArrayForfunction.unshift("Apple")  // ["Apple", "Banana", "Grapes"]

// 5 splice === Can add/remove anywhere start,end ,beginning needs three argumnets from where to start , what to remove , what to add
defaulArrayForfunction.splice(1,0,"Mango")  // ["Apple", "Banana", "Mango", "Grapes"]
defaulArrayForfunction.splice(2,1) // ["Apple", "Banana", "Grapes"]
defaulArrayForfunction.splice(1,2,"Strwaberry") // ["Apple", "Strwaberry"]