//  Objects in typescript  are used to store multipe data of singlle entity 

let carDeatils : {model : number , company : string, name : string} =  {
    model : 2023,
    company :"Honda",
    name : "Civic",
}
console.log(carDeatils); //  model : 2023, company :"Honda",name : "Civic",
console.log(carDeatils.model); // 2023
console.log(carDeatils.company); // Honda
console.log(carDeatils.name); // Civic

// combining array and onject together for multiple things

let studentsDetails : {name : string , rollNo : number} []= [
    {
        name : "Moiz",
        rollNo : 1
    },
    {
        name : "Ali",
        rollNo : 2
    },
    {
        name : "Ahemd",
        rollNo : 3,
    },
    {
        name : "Rayyan",
        rollNo : 4
    },
]

console.log(studentsDetails); // {name : "Moiz",rollNo : 1},{name : "Ali",   rollNo : 2},{name : "Ahemd", rollNo : 3,},{   name : "Rayyan",rollNo : 4},]

console.log(studentsDetails[0]); // {name : "Moiz",rollNo : 1}
console.log(studentsDetails[1]); // {name : "Ali",rollNo : 2}
console.log(studentsDetails[2]); // {name : "Ahmed",rollNo : 3}

console.log(studentsDetails[3].rollNo); //  4

//  A short form to defne the  types of oject in order to work in confusion free items

type User = {
    name : string,
    phone : number,
    isActive : boolean
}
let user :User = {
    name : "Moiz",
    phone : 312112121,
    isActive : true
} 


// Looping on objects

let userDeatails : User[] = [
{
    name: "Ali",
    phone : 21212112,
    isActive : false
},
{
    name: "Moiz",
    phone : 21212112,
    isActive : true
},{
    name: "Irzam",
    phone : 21212112,
    isActive : false
},{
    name: "Rayyan",
    phone : 21212112,
    isActive : false
},{
    name: "Hamza",
    phone : 21212112,
    isActive : true
},{
    name: "Fahad",
    phone : 21212112,
    isActive : false
},{
    name: "Ubaid",
    phone : 21212112,
    isActive : true
},{
    name: "Shifa",
    phone : 21212112,
    isActive : true
},{
    name: "Zohaib",
    phone : 21212112,
    isActive : false
},{
    name: "Ashar",
    phone : 21212112,
    isActive : false
},{
    name: "Mavia",
    phone : 21212112,
    isActive : true
},{
    name: "Maira",
    phone : 21212112,
    isActive : true
},{
    name: "Sahar",
    phone : 21212112,
    isActive : false
},
]
userDeatails.forEach( (object) => {
    console.log(`name of user ${object.name}`); 
    console.log(`name of user ${object.isActive}`);
});
