// Variables - named containers for data
// Declaring variables
//1. var - function scoped, can be redeclared and updated
var courseName = "Javascript"; // string
// 2. block scoped, can be updated but not redeclared
let courseDuration = 8; // number
//3. const - block scoped, cannot be updated or redeclared
const coursePrice = 199.99; // number

// 4. Data types 
// - Primitive 
//      string,     donald, "Donald", 'Donald'
//      number,     1,2,3,4,5,6,7,8,9,10
//      boolean,   True/False 
//      null,
            var studentName = null;
            var studentName = '';
            var studentName = 0;

//      undefined, 
//      object, 
            let person = {
                name: "Donald",
                age: 30,
                isStudent: false,
            }

            let car = {
                make: "Toyota",
                model: "Corolla",
                year: 2020,
            }
//      symbol
//array,
            let students = ["Donald", "Emily", "Akuya", "Purity"];
            let countries = ["Kenya", "Uganda", "Tanzania", "Rwanda"];
// 5. Operators -
        //  arithmetic, 
                let sum = 5 + 10; // addition
                let difference = 10 - 5; // subtraction
                let product = 5 * 10; // multiplication
                let quotient = 10 / 5; // division
                let remainder = 10 % 3; // modulus
                let exponent = 2 ** 3; // exponentiation
                let increment = 5; // increment
                    increment++; // increment by 1
                let decrement = 10; // decrement
                    decrement--; // decrement by 1
        // assignment, 
                let x = 5; // assignment
                x += 10; // addition assignment
                x -= 5; // subtraction assignment
                x *= 2; // multiplication assignment
                x /= 2; // division assignment
                x %= 3; // modulus assignment
                x **= 2; // exponentiation assignment
        // comparison, 
                let isEqual = (5 == 5); // equality
                let isNotEqual = (5 != 4); // inequality
                let isStrictEqual = (5 === 5); // strict equality
                let isStrictNotEqual = (5 !== 4); // strict inequality
                let isGreaterThan = (5 > 4); // greater than
                let isLessThan = (5 < 6); // less than
                let isGreaterThanOrEqual = (5 >= 5); // greater than or equal to
                let isLessThanOrEqual = (5 <= 6); // less than or equal to
        // logical, 
                let andCondition = (true && false); // logical AND
                let orCondition = (true || false); // logical OR
                let notCondition = !true; // logical NOT
        // bitwise, 
        // ternary

        // Functions - reusable blocks of code
        // 1. function declaration
            function greet(name) {
                return "Hello " + name;
            }
        // 2. function expression
            const greet = function(name) {
                return "Hello " + name;
            }
        // 3. arrow function
            const greet = (name) => {
                return "Hello " + name;
            }
        // 4. IIFE (Immediately Invoked Function Expression)
            (function() {
                console.log("Hello World");
            })();
        // 5. callback function
            function greet(name, callback) {
                console.log("Hello " + name);
                callback();
            }
            function sayGoodbye() {
                console.log("Goodbye");
            }
            greet("Donald", sayGoodbye);
        // 6. higher-order function
            function greet(name) {
                return function() {
                    console.log("Hello " + name);
                }
            }
            const greetDonald = greet("Donald");
            greetDonald(); // Hello Donald
        // 7. recursive function
            function factorial(n) {
                if (n === 0) {
                    return 1;
                } else {
                    return n * factorial(n - 1);
                }
            }
            console.log(factorial(5)); // 120
        // 8. generator function
            function* generator() {
                yield 1;
                yield 2;
                yield 3;
            }
            const gen = generator();
            console.log(gen.next().value); // 1
            console.log(gen.next().value); // 2
            console.log(gen.next().value); // 3
        // 9. async function
            async function fetchData() {
                const response = await fetch("https://api.example.com/data");
                const data = await response.json();
                console.log(data);
            }
            fetchData();
        // 10. promise
            const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("Data fetched");
                }, 1000);
            });
            promise.then((data) => {
                console.log(data);
            });
        // 11. async/await
            async function fetchData() {
                try {
                    const response = await fetch("https://api.example.com/data");
                    const data = await response.json();
                    console.log(data);
                } catch (error) {
                    console.error(error);
                }
            }
            fetchData();
        // 12. closure
            function outerFunction() {
                let outerVariable = "I am outside!";
                function innerFunction() {
                    console.log(outerVariable);
                }
                return innerFunction;
            }
            const innerFunc = outerFunction();
            innerFunc(); // I am outside!
        // 13. scope
            let globalVariable = "I am global!";
            function scopeExample() {
                let localVariable = "I am local!";
                console.log(globalVariable); // I am global!
                console.log(localVariable); // I am local!
            }
            scopeExample();
        // 14. hoisting

    //loops
        // 1. for loop
            for (let i = 0; i < 5; i++) {
                console.log(i);
            }
        // 2. while loop
            let i = 0;
            while (i < 5) {
                console.log(i);
                i++;
            }
        // 3. do while loop
            let j = 0;
            do {
                console.log(j);
                j++;
            } while (j < 5);
        // 4. forEach loop
            students.forEach((student) => {
                console.log(student);
            });
        // 5. for...of loop
            for (const student of students) {
                console.log(student);
            }
        // 6. for...in loop
            for (const key in person) {
                console.log(key + ": " + person[key]);
            }
        // 7. map loop
            const mappedStudents = students.map((student) => {
                return student.toUpperCase();
            });
            console.log(mappedStudents);
        // 8. filter loop
            const filteredStudents = students.filter((student) => {
                return student.startsWith("D");
            });
            console.log(filteredStudents);
        // 9. reduce loop
            const total = students.reduce((accumulator, student) => {
                return accumulator + student.length;
            }, 0);
            console.log(total);
        // 10. every loop
            const allStudents = students.every((student) => {
                return student.length > 0;
            });
            console.log(allStudents);
        // 11. some loop
            const someStudents = students.some((student) => {
                return student.length > 5;
            });
            console.log(someStudents);
        // 12. find loop
            const foundStudent = students.find((student) => {
                return student.startsWith("E");
            });
            console.log(foundStudent);
        // 13. findIndex loop
            const foundIndex = students.findIndex((student) => {
                return student.startsWith("E");
            });
            console.log(foundIndex);
        // 14. includes loop
            const includesStudent = students.includes("Donald");
            console.log(includesStudent);
        // 15. indexOf loop
            const indexOfStudent = students.indexOf("Donald");
            console.log(indexOfStudent);
        // 16. lastIndexOf loop
            const lastIndexOfStudent = students.lastIndexOf("Donald");
            console.log(lastIndexOfStudent);
            

console.log(person); // Accessing object property
console.log(courseDuration); // Accessing object property
console.log(coursePrice); // Accessing object property
console.log(courseName); // Accessing object property
console.log(students); // Accessing object property
console.log(countries); // Accessing object property
console.log(car); // Accessing object property
console.log(countries[2]); // Accessing object property






