// for each in typerscript

// Used to iterate over an array and execute a function for each element.
// Does not return a new array.
// Typically used when you want to perform an action (e.g., logging) rather than transforming data.

const number : number []= [1,2,3,4,5]
number.forEach((num) => {
    console.log(num *2); // Prints 2, 4, 6, 8, 10
}); 

let string : string []= ["Moiz", "irzam", "Ali", "Hamza"];
string.forEach( (elem) =>{
console.log(elem); 
})

// 2. map()
// Used to transform each element of an array.
// Returns a new array with modified values.
// Commonly used for modifying data while keeping the original array unchanged.

const mapednumbers : number []= [2,4,6,8,10];
// console.log(mapednumbers.map ((ele) => ele *2));
let double2 : number[] = mapednumbers.map((elem) => elem * 2); // return a  new array 
console.log(double2);  //[ 4, 8, 12, 16, 20 ]

// 3. filter()
// Used to filter out elements from an array based on a condition.
// Returns a new array with elements that match the condition.

let filterArray : number [] = [];
for (let index = 0; index <=100; index++) {
    filterArray.push(index)
} 
// console.log(filterArray); 
let filtering : number[] = filterArray.filter ((filter) => filter % 2 === 0);
console.log(filtering); //[ 0,  2,  4,  6,  8, 10,  12, 14, 16, 18, 20,22, 24, 26, 28, 30, 32,  34, 36, 38, 40, 42,  44, 46, 48, 50, 52, 54,  56, 58, 60, 62, 64,66, 68, 70, 72, 74, 76,  78, 80, 82, 84, 86,88, 90, 92, 94, 96, 98, 100 ]

// let filteringFromserach = (searchTerm : string) =>{
//     let products : string[] = ["Pants", "Shirts", "Watches" , "Fooditmes", "Vegetable"];
//     let filterdProduct : string[] = products.filter( (product) => product.includes(searchTerm.toLowerCase()) )
//     return filterdProduct
// }

// console.log(filteringFromserach ("Pants"));
let filteringFromSearch = (searchTerm: string) => {
    let products: string[] = ["Pants", "Shirts", "Watches", "Fooditems", "Vegetable"];

    let filteredProduct: string[] = products.filter((product: string) =>
        product.toLowerCase().includes(searchTerm.toLowerCase()) 
    );

    return filteredProduct;
};

console.log(filteringFromSearch("pants"));  // Output: ["Pants"]


