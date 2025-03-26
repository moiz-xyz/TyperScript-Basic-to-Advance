// Ooop class conecept
class Car {
    model : string
    price :number 
    constructor ( modelOfcar:string , priceOfCar : number  ){
        this.model = modelOfcar   
        this.price = priceOfCar;
     }
}
let carA =  new Car ("KIA", 20000);
let carB =  new Car ("Hundai", 2090000);
let carC =  new Car ("AUDI", 2002100);
let carD =  new Car ("TOYOTA", 2210000);
let carE =  new Car ("SUZUKI", 2010000);


class StudenData {
    name : string ;
    rollNo : number ;
    isPresnetToday : boolean ;
    constructor (name : string , rollNo : number , isPresent : boolean){
        this.name = name;
        this.rollNo = rollNo;
        this.isPresnetToday = isPresent
    }
}

let std1 = new StudenData ("moiz",123, true)
let std2 = new StudenData ("Ali",233, false)
let std3 = new StudenData ("Naik",234, true)
let std4 = new StudenData ("rayyan",239, false)


// Promises 

function promiseFunction (resolve : any, reject : any){
    if (true){
       resolve("Successfully find the data from spi") 
    }
    else {
      reject("Somthing went wrong")  
    }
}
const promsieResult  = new Promise(promiseFunction);
promsieResult.then((success)=>{
    console.log("success", success);
})
.catch ((error)=>{
    console.log("error", error);
})