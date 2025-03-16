//  Else if statements
//  for multiple condions we use else if
let givenNo: number = 0;
if (givenNo > 0) {
  console.log("Number is greater than 0");
} else if (givenNo < 0) {
  console.log("Number is less than 0");
} else {
  console.log("Number is 0");
}

// Grade manging system
let studentMarks: number = 495;
let totalMarks: number = 550;
let percentage: number = (studentMarks / totalMarks) * 100;
// console.log(percentage); 90

if (percentage > 90) {
  console.log("The Grade of the student is A++");
} else if (percentage > 80) {
  console.log("The Grade of the student is A");
} else if (percentage > 70) {
  console.log("The Grade of the student is B++");
} else if (percentage > 60) {
  console.log("The Grade of the student is B");
} else if (percentage > 50) {
  console.log("The Grade of the student is C");
} else if (percentage > 40) {
  console.log("The Grade of the student is D");
} else {
  console.log("The student is  fail");
}

//  Switch statemnents == same as if else satemnets used to check condtion using cases

switch (expression) {
  case 1:
    // Code to execute if expression === value1
    break;
  case 2:
    // Code to execute if expression === value2
    break;
  default:
  // Code to execute if no cases match
}

let day: number = 3;
let nameDays: string;
switch (day) {
  case 1:
    nameDays = "Monday";
    break;
  case 2:
    nameDays = "Tuesday";
    break;
  case 3:
    nameDays = "Wednesday";
    break;
  case 4:
    nameDays = "Thursday";
    break;
  case 5:
    nameDays = "Friday";
    break;
  case 6:
    nameDays = "Saturday";
    break;
  case 7:
    nameDays = "Sunday";
    break;

  default:
    nameDays = "Invalid day";
    break;
}
let section: string = "A";
switch (section) {
  case "A":
    console.log("Your timing is Friday & Sunday 2-5");
    break;
  case "B":
    console.log("Your timing is Friday & Sunday 9-12");
    break;
  case "C":
    console.log("Your timing is Monday , Wednesday 6-8");
    break;
  case "D":
    console.log("Your timing is Tuesday , Thursday , Saturday 6-8");
    break;
  default:
    console.log("Innvalid section");
    break;
}
