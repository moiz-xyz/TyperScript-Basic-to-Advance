# TypeScript Learning Repository

Welcome to the **TypeScript Learning Repository**! 🚀 This repository contains all the essential concepts and tutorials to help you master TypeScript step by step. Below is a comprehensive list of topics covered in this series, along with explanations and examples.

---

## Topics Covered

### 1. Variables in TypeScript
- Introduction to variables
- `var`, `let`, and `const` keywords
- Scope and hoisting in TypeScript

```typescript
let name: string = "John";
const age: number = 25;
var isStudent: boolean = true;
```

---

### 2. TypeScript Operators and If Statement
- Arithmetic, logical, and comparison operators
- Conditional statements with `if`

```typescript
let x = 10;
if (x > 5) {
    console.log("X is greater than 5");
}
```

---

### 3. If Statement & Nested If Statement
- Using nested `if` statements for complex conditions

```typescript
let num = 20;
if (num > 10) {
    if (num < 30) {
        console.log("Number is between 10 and 30");
    }
}
```

---

### 4. If-Else If Statements & Switch Statements
- Multiple condition handling
- Using `switch` for cleaner conditional logic

```typescript
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("Weekend is coming!");
        break;
    default:
        console.log("A normal day");
}
```

---

### 5. TypeScript Functions | Var, Let & Const in TypeScript
- Function declaration and types

```typescript
function greet(name: string): string {
    return "Hello, " + name;
}
console.log(greet("Alice"));
```

---

### 6. TypeScript Arrays & Array Types
- Declaring arrays and type annotations

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);
```

---

### 7. TypeScript Built-in Functions & Array Functions
- Common array methods: `map`, `filter`, `reduce`

```typescript
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);
```

---

### 8. TypeScript Loops | While Loops
- Iteration with `for`, `while`, and `do-while`

```typescript
let count = 0;
while (count < 5) {
    console.log("Count: ", count);
    count++;
}
```

---

### 9. TypeScript Arrays Explained with Practical Examples
- Working with arrays in real-world scenarios

```typescript
let names: string[] = ["Alice", "Bob", "Charlie"];
names.forEach(name => console.log(name));
```

---

### 10. Git and GitHub | Pushing Code to GitHub
- Basic Git commands and repository setup

```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

---

### 11. TypeScript Do-While Loop | Increment & Decrement Operators
- `do-while` loop execution flow

```typescript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```

---

### 12. TypeScript Leetcode Problems | forEach, map, filter
- Solving problems using built-in methods

---

### 13. TypeScript Objects & Object Types
- Defining objects with type annotations

```typescript
let person: { name: string; age: number } = { name: "John", age: 30 };
```

---

### 14. TypeScript Objects in Arrays & Exercises
- Handling an array of objects

```typescript
let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 }
];
```

---

### 15. What is NPM | TypeScript Imports and Exports
- Managing dependencies with npm
- Using `import` and `export`

---

### 16. TypeScript Asynchronous Code | SetTimeout & SetInterval
- Handling async operations

```typescript
setTimeout(() => console.log("Hello after 2 seconds"), 2000);
```

---

### 17. TypeScript Promise Handling | OOP Class Concept
- Working with promises and classes

```typescript
class Animal {
    constructor(public name: string) {}
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}
```

---

### 18. Taking Input From User Using Node.js CLI
- Handling user input in a Node.js environment

---

### 19. TypeScript Async and Await
- Understanding `async/await` for handling promises

```typescript
async function fetchData() {
    let data = await fetch("https://api.example.com");
    console.log(await data.json());
}
```

---

### 20. TypeScript Try Catch Finally | Error Handling
- Managing exceptions in TypeScript

```typescript
try {
    let num = parseInt("abc");
} catch (error) {
    console.log("An error occurred");
}
```

---

### 21. JSON File Handling | Chalk Colorful CLI
- Understanding JSON format and using `chalk` for CLI styling

---

### 22. All In One TypeScript Types For JS Developers (Part 1)
- Covering essential TypeScript types

---

### 23. TypeScript Generics | TS For JS Developers (Part 2)
- Using generics for flexible typing

```typescript
function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<number>(5));
```

---

### 24. Object-Oriented Programming (OOP) in TypeScript
- Understanding OOP pillars: encapsulation, abstraction, inheritance, polymorphism

---

### 25. OOP: Class and Object Concept | Constructors
- Defining and using classes with constructors

```typescript
class Car {
    constructor(public brand: string) {}
    drive() {
        console.log(`${this.brand} is moving`);
    }
}
```

---

### 26. TypeScript OOP Inheritance
- Extending classes with inheritance

```typescript
class ElectricCar extends Car {
    batteryLife: number;
    constructor(brand: string, batteryLife: number) {
        super(brand);
        this.batteryLife = batteryLife;
    }
}
```

---

### 27. OOP Multilevel and Encapsulation
- Understanding data protection in OOP

---

### 28. Abstract Classes in TypeScript
- Using abstract classes for structured OOP design

---

## 🎯 Why Learn TypeScript? 🤔
✅ **Strongly Typed Language** – Catches errors early & improves reliability.  
✅ **Enhanced JavaScript** – Adds powerful features while staying compatible.  
✅ **Great for Large Projects** – Boosts maintainability & scalability.  
✅ **Industry Standard** – Used widely in **React, Angular, and Node.js**.

📌 **Start your TypeScript journey today! Happy coding!** 🎉
