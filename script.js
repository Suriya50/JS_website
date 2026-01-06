 // ========== COMPREHENSIVE LEARNING DATA ==========
    const learningData = {
      topics: [
        {
          id: 'js-intro',
          title: '1. JavaScript Introduction',
          icon: 'fa-info-circle',
          content: {
            title: 'JavaScript Introduction',
            description: 'JavaScript is a programming language used to make web pages interactive. It runs in web browsers and can also run on servers.',
            definition: 'JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is characterized as dynamic, weakly typed, prototype-based and multi-paradigm.',
            types: [],
            keyPoints: [
              'JavaScript was created in 1995 by Brendan Eich',
              'It was originally called Mocha, then LiveScript, finally JavaScript',
              'JavaScript is NOT the same as Java (they are different languages)',
              'It is the programming language of the Web'
            ],
            code: `// Your first JavaScript program
console.log("Hello, JavaScript World!");

// JavaScript can change HTML content
document.getElementById("demo").innerHTML = "Hello JavaScript!";

// JavaScript can change CSS styles
document.getElementById("demo").style.color = "red";`
          }
        },
        {
          id: 'variables',
          title: '2. Variables & Phases',
          icon: 'fa-code',
          content: {
            title: 'Variables in JavaScript',
            description: 'Variables are containers for storing data values. Understanding declaration, initialization, and printing is fundamental.',
            definition: 'A variable is a named storage location in memory that holds a value which can be changed during program execution. Variables go through declaration and initialization phases.',
            types: [
              {
                title: 'Declaration Phase',
                definition: 'Declaration is the process of telling JavaScript about the existence of a variable. The variable is created but has no value yet.',
                keyPoints: [
                  'Variable is announced to exist',
                  'Memory is allocated for the variable',
                  'Default value is "undefined"',
                  'Hoisting moves declarations to top'
                ]
              },
              {
                title: 'Initialization Phase',
                definition: 'Initialization is when a variable is assigned its first value. This can happen separately or together with declaration.',
                keyPoints: [
                  'Variable gets its first value',
                  'Can happen during or after declaration',
                  'const variables must be initialized immediately',
                  'Uninitialized variables have "undefined" value'
                ]
              },
              {
                title: 'Printing/Output Statements',
                definition: 'Printing statements display variable values or messages. They are essential for debugging and showing results.',
                keyPoints: [
                  'console.log() - Outputs to browser console',
                  'alert() - Shows popup message box',
                  'document.write() - Writes to HTML document',
                  'innerHTML - Modifies HTML element content'
                ]
              },
              {
                title: 'Variable Types (var, let, const)',
                definition: 'JavaScript has three ways to declare variables, each with different scoping and reassignment rules.',
                keyPoints: [
                  'var - Function-scoped, can be redeclared',
                  'let - Block-scoped, cannot be redeclared',
                  'const - Block-scoped, cannot be reassigned',
                  'Always use const unless reassignment needed'
                ]
              }
            ],
            keyPoints: [
              'Variables store data that can be used and changed',
              'Declaration and initialization can be separate steps',
              'Use meaningful names (camelCase is standard)',
              'Printing helps debug and understand program flow'
            ],
            code: `// ===== DECLARATION PHASE =====
// Variable declaration (telling JavaScript it exists)
var studentName;      // Declaration with var
let studentAge;       // Declaration with let
const SCHOOL = "ABC"; // Declaration + initialization for const
// Note: const MUST be initialized during declaration

console.log("After declaration:");
console.log("studentName:", studentName); // undefined
console.log("studentAge:", studentAge);   // undefined
console.log("SCHOOL:", SCHOOL);           // "ABC"

// ===== INITIALIZATION PHASE =====
// Giving variables their first values
studentName = "John Doe";   // Initialization
studentAge = 20;            // Initialization
let studentGrade = "A";     // Declaration + initialization together

console.log("\\nAfter initialization:");
console.log("studentName:", studentName); // "John Doe"
console.log("studentAge:", studentAge);   // 20
console.log("studentGrade:", studentGrade); // "A"

// ===== PRINTING/OUTPUT EXAMPLES =====
console.log("\\n=== Printing Examples ===");

// 1. console.log() - Most common for debugging
console.log("Student Information:");
console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("Grade:", studentGrade);

// 2. Multiple values in one log
console.log("All details:", studentName, studentAge, studentGrade, SCHOOL);

// 3. Template literals for formatted output
console.log(\`\${studentName} is \${studentAge} years old and studies at \${SCHOOL} school.\`);

// 4. Alert popup (uncomment to try)
// alert("Student: " + studentName);

// 5. Writing to HTML (if you have an element with id="output")
// document.getElementById("output").innerHTML = "Welcome " + studentName;

// ===== VARIABLE TYPES DEMO =====
console.log("\\n=== Variable Types Demo ===");

// var - can be redeclared and updated
var score = 100;
var score = 200; // Allowed - redeclaration
score = 300;     // Allowed - reassignment
console.log("var score:", score);

// let - cannot be redeclared, but can be reassigned
let points = 50;
// let points = 60; // Error: cannot redeclare
points = 70;       // Allowed - reassignment
console.log("let points:", points);

// const - cannot be redeclared or reassigned
const PI = 3.14159;
// PI = 3.14;      // Error: cannot reassign
// const PI = 3.14; // Error: cannot redeclare
console.log("const PI:", PI);

// const with objects/arrays - content can be modified
const student = {name: "Alice"};
student.age = 20;    // Allowed: modifying object
student.name = "Bob"; // Allowed: modifying property
// student = {name: "Charlie"}; // Error: cannot reassign
console.log("const student:", student);`
          }
        },
        {
          id: 'datatypes',
          title: '3. Data Types',
          icon: 'fa-database',
          content: {
            title: 'JavaScript Data Types',
            description: 'Data types specify what kind of data can be stored and manipulated in JavaScript.',
            definition: 'A data type is a classification that specifies which type of value a variable can hold and what operations can be performed on it.',
            types: [
              {
                title: 'Primitive Data Types',
                definition: 'Primitive data types are basic data types that are immutable (cannot be changed).',
                keyPoints: [
                  'String: Text data (e.g., "Hello")',
                  'Number: Integer or floating-point numbers',
                  'Boolean: true or false values',
                  'Undefined: Variable declared but not assigned',
                  'Null: Intentional absence of value',
                  'Symbol: Unique and immutable value',
                  'BigInt: Large integers beyond Number limit'
                ]
              },
              {
                title: 'Non-Primitive (Reference) Data Types',
                definition: 'Non-primitive data types are mutable and store references to memory locations.',
                keyPoints: [
                  'Object: Collection of key-value pairs',
                  'Array: Ordered list of values',
                  'Function: Reusable block of code',
                  'Date: Date and time information',
                  'RegExp: Regular expressions'
                ]
              }
            ],
            keyPoints: [
              'JavaScript has dynamic typing (type determined at runtime)',
              'Use typeof operator to check data type',
              'Primitive types are compared by value',
              'Non-primitive types are compared by reference'
            ],
            code: `// Primitive Data Types
let name = "John";           // String
let age = 25;               // Number
let isStudent = true;       // Boolean
let nothing = null;         // Null
let notDefined;             // Undefined
let sym = Symbol("id");     // Symbol
let bigNum = 12345678901234567890n; // BigInt

// Non-Primitive Data Types
let person = {              // Object
  name: "Alice",
  age: 30
};
let colors = ["red", "green", "blue"]; // Array
function greet() {          // Function
  return "Hello!";
}
let today = new Date();     // Date
let pattern = /javascript/i; // RegExp

// Checking types
console.log(typeof name);     // "string"
console.log(typeof age);      // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof nothing);   // "object" (special case)
console.log(typeof notDefined); // "undefined"`
          }
        },
        {
          id: 'functions',
          title: '4. Functions',
          icon: 'fa-cogs',
          content: {
            title: 'Functions in JavaScript',
            description: 'Functions are reusable blocks of code that perform specific tasks.',
            definition: 'A function is a set of statements that performs a task or calculates a value. Functions can take parameters and return values.',
            types: [
              {
                title: 'Function Declaration',
                definition: 'A function declared with the function keyword. It is hoisted and can be called before declaration.',
                keyPoints: [
                  'Uses function keyword',
                  'Can be called before declaration',
                  'Has its own this context',
                  'Can be named or anonymous'
                ]
              },
              {
                title: 'Function Expression',
                definition: 'A function stored in a variable. It is not hoisted and cannot be called before declaration.',
                keyPoints: [
                  'Assigned to a variable',
                  'Not hoisted',
                  'Can be anonymous or named',
                  'Useful for callbacks'
                ]
              },
              {
                title: 'Arrow Function',
                definition: 'A shorter syntax for writing functions introduced in ES6. It does not have its own this context.',
                keyPoints: [
                  'Uses => syntax',
                  'No this binding (uses parent this)',
                  'Cannot be used as constructors',
                  'Implicit return for single expressions'
                ]
              }
            ],
            keyPoints: [
              'Functions help avoid code repetition',
              'Parameters are inputs, return value is output',
              'Functions can call other functions',
              'Use return statement to send back result'
            ],
            code: `// 1. Function Declaration
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8

// 2. Function Expression
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(5, 3)); // 15

// 3. Arrow Function (ES6+)
const divide = (a, b) => a / b;
console.log(divide(10, 2)); // 5

// Arrow function with multiple lines
const greet = (name) => {
  const message = "Hello, " + name;
  return message;
};
console.log(greet("John")); // "Hello, John"

// Anonymous function (no name)
setTimeout(function() {
  console.log("This runs after 1 second");
}, 1000);`
          }
        },
        {
          id: 'operators',
          title: '5. Operators',
          icon: 'fa-calculator',
          content: {
            title: 'JavaScript Operators',
            description: 'Operators are symbols that perform operations on variables and values.',
            definition: 'An operator is a special symbol that performs operations on operands (values and variables) and returns a result.',
            types: [
              {
                title: 'Arithmetic Operators',
                definition: 'Perform mathematical operations on numbers.',
                keyPoints: [
                  '+ Addition: 5 + 3 = 8',
                  '- Subtraction: 5 - 3 = 2',
                  '* Multiplication: 5 * 3 = 15',
                  '/ Division: 6 / 2 = 3',
                  '% Modulus: 5 % 2 = 1',
                  '** Exponentiation: 2 ** 3 = 8'
                ]
              },
              {
                title: 'Assignment Operators',
                definition: 'Assign values to variables.',
                keyPoints: [
                  '= Assign: x = 5',
                  '+= Add and assign: x += 3 (x = x + 3)',
                  '-= Subtract and assign: x -= 2',
                  '*= Multiply and assign: x *= 4',
                  '/= Divide and assign: x /= 2'
                ]
              },
              {
                title: 'Comparison Operators',
                definition: 'Compare two values and return true or false.',
                keyPoints: [
                  '== Equal to (loose): 5 == "5" is true',
                  '=== Equal to (strict): 5 === "5" is false',
                  '!= Not equal to (loose)',
                  '!== Not equal to (strict)',
                  '> Greater than',
                  '< Less than',
                  '>= Greater than or equal',
                  '<= Less than or equal'
                ]
              },
              {
                title: 'Logical Operators',
                definition: 'Combine boolean values and return true or false.',
                keyPoints: [
                  '&& AND: true && false = false',
                  '|| OR: true || false = true',
                  '! NOT: !true = false'
                ]
              }
            ],
            keyPoints: [
              'Operators follow precedence rules (PEMDAS)',
              'Use parentheses to control order of operations',
              '=== is safer than == (strict equality)',
              'Ternary operator is shorthand for if-else'
            ],
            code: `// Arithmetic Operators
let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.33
console.log(a % b);  // 1
console.log(a ** b); // 1000

// Assignment Operators
let x = 5;
x += 3;  // x = 8
x -= 2;  // x = 6
x *= 2;  // x = 12
x /= 4;  // x = 3

// Comparison Operators
console.log(5 == "5");   // true (loose)
console.log(5 === "5");  // false (strict)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
console.log(10 > 5);     // true

// Logical Operators
let age = 25;
let hasLicense = true;
console.log(age >= 18 && hasLicense); // true
console.log(age < 18 || hasLicense);  // true
console.log(!hasLicense);              // false

// Ternary Operator
let isAdult = (age >= 18) ? "Yes" : "No";
console.log(isAdult); // "Yes"`
          }
        },
        {
          id: 'conditionals',
          title: '6. Conditional Statements',
          icon: 'fa-random',
          content: {
            title: 'Conditional Statements',
            description: 'Conditional statements control the flow of execution based on different conditions.',
            definition: 'Conditional statements are used to perform different actions based on different conditions. They allow your code to make decisions.',
            types: [
              {
                title: 'if Statement',
                definition: 'Executes a block of code if a specified condition is true.',
                keyPoints: [
                  'Checks condition in parentheses',
                  'Executes code block if condition is true',
                  'Skips block if condition is false',
                  'Can be used alone'
                ]
              },
              {
                title: 'if-else Statement',
                definition: 'Executes one block if condition is true, another block if false.',
                keyPoints: [
                  'if block runs when condition is true',
                  'else block runs when condition is false',
                  'Only one block executes',
                  'Mutually exclusive paths'
                ]
              },
              {
                title: 'else-if Statement',
                definition: 'Tests multiple conditions in sequence.',
                keyPoints: [
                  'Tests conditions one by one',
                  'Stops at first true condition',
                  'Executes corresponding block',
                  'Can have multiple else-if'
                ]
              },
              {
                title: 'switch Statement',
                definition: 'Selects one of many code blocks to execute based on a value.',
                keyPoints: [
                  'Tests expression against multiple cases',
                  'break statement prevents fall-through',
                  'default case runs if no match',
                  'Good for multiple fixed values'
                ]
              }
            ],
            keyPoints: [
              'Conditions must evaluate to true or false',
              'Use curly braces {} for code blocks',
              'Conditions can be combined with logical operators',
              'Indent code inside blocks for readability'
            ],
            code: `// 1. if statement
let temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside!");
}

// 2. if-else statement
let hour = 14;
if (hour < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}

// 3. else-if statement
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// 4. switch statement
let day = 3;
let dayName;
switch(day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend";
}
console.log("Today is " + dayName);`
          }
        },
        {
          id: 'loops',
          title: '7. Looping Statements',
          icon: 'fa-redo',
          content: {
            title: 'Looping Statements',
            description: 'Loops execute a block of code repeatedly until a condition is met.',
            definition: 'A loop is a programming construct that repeats a block of code while a specified condition is true.',
            types: [
              {
                title: 'for Loop',
                definition: 'Repeats a block of code a specific number of times.',
                keyPoints: [
                  'Initialization: Set starting value',
                  'Condition: Test before each iteration',
                  'Increment: Update after each iteration',
                  'Good for known number of iterations'
                ]
              },
              {
                title: 'while Loop',
                definition: 'Repeats while a condition is true. Checks condition before execution.',
                keyPoints: [
                  'Checks condition first',
                  'May not execute if condition is false',
                  'Use when iterations unknown',
                  'Must update condition inside loop'
                ]
              },
              {
                title: 'do-while Loop',
                definition: 'Executes once, then repeats while condition is true.',
                keyPoints: [
                  'Executes at least once',
                  'Checks condition after execution',
                  'Good for menus/user input',
                  'Semicolon after while()'
                ]
              }
            ],
            keyPoints: [
              'Loops prevent code duplication',
              'Infinite loops occur if condition never becomes false',
              'break statement exits loop immediately',
              'continue statement skips to next iteration'
            ],
            code: `// 1. for loop
console.log("Counting 1 to 5:");
for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}

// 2. while loop
console.log("\\nCounting down 5 to 1:");
let count = 5;
while (count > 0) {
  console.log("Count: " + count);
  count--; // Decrease count by 1
}

// 3. do-while loop
console.log("\\nDo-while example:");
let num = 1;
do {
  console.log("Number: " + num);
  num++;
} while (num <= 3);

// Loop control: break and continue
console.log("\\nBreak and continue:");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // Exit loop at 5
  }
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log("Odd: " + i);
}`
          }
        },
        {
          id: 'arrays',
          title: '8. Arrays',
          icon: 'fa-layer-group',
          content: {
            title: 'Arrays in JavaScript',
            description: 'Arrays are used to store multiple values in a single variable.',
            definition: 'An array is a special variable that can hold more than one value at a time. It is an ordered collection of elements.',
            types: [
              {
                title: 'Creating Arrays',
                definition: 'Different ways to create arrays in JavaScript.',
                keyPoints: [
                  'Array literal: []',
                  'Array constructor: new Array()',
                  'Array.of(): Creates array from arguments',
                  'Array.from(): Creates from array-like object'
                ]
              },
              {
                title: 'Array Methods',
                definition: 'Built-in functions that operate on arrays.',
                keyPoints: [
                  'push/pop: Add/remove from end',
                  'shift/unshift: Add/remove from start',
                  'slice: Extract portion without modifying',
                  'splice: Add/remove at position',
                  'concat: Join arrays'
                ]
              },
              {
                title: 'Array Iteration',
                definition: 'Methods to loop through array elements.',
                keyPoints: [
                  'forEach: Execute function for each',
                  'map: Transform each element',
                  'filter: Select elements',
                  'reduce: Accumulate values',
                  'find: Find first match'
                ]
              }
            ],
            keyPoints: [
              'Arrays are zero-indexed (first element at index 0)',
              'Arrays can hold mixed data types',
              'Arrays are objects (typeof returns "object")',
              'Use length property to get size'
            ],
            code: `// Creating arrays
let fruits = ["Apple", "Banana", "Orange"]; // Literal
let numbers = new Array(1, 2, 3);           // Constructor

// Array methods - Adding/Removing
fruits.push("Mango");       // Add to end
fruits.pop();              // Remove from end
fruits.unshift("Grape");    // Add to beginning
fruits.shift();            // Remove from beginning

// Array methods - Manipulation
let citrus = fruits.slice(1, 3); // Extract ["Banana", "Orange"]
fruits.splice(1, 0, "Kiwi");    // Insert at position 1

// Array iteration
console.log("All fruits:");
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// Transforming arrays
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Uppercase: ", upperFruits);

// Filtering arrays
let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log("Long fruits: ", longFruits);

// Array properties
console.log("Total fruits: ", fruits.length);
console.log("First fruit: ", fruits[0]);`
          }
        },
        {
          id: 'objects',
          title: '9. Objects',
          icon: 'fa-cube',
          content: {
            title: 'Objects in JavaScript',
            description: 'Objects are collections of key-value pairs used to store related data.',
            definition: 'An object is an unordered collection of properties, where each property has a name (key) and value.',
            types: [
              {
                title: 'Object Creation',
                definition: 'Different ways to create objects in JavaScript.',
                keyPoints: [
                  'Object literal: {}',
                  'Object constructor: new Object()',
                  'Constructor function',
                  'Class (ES6)'
                ]
              },
              {
                title: 'Object Properties',
                definition: 'Characteristics of object properties.',
                keyPoints: [
                  'Key-value pairs',
                  'Keys are strings or symbols',
                  'Values can be any data type',
                  'Access with dot or bracket notation'
                ]
              },
              {
                title: 'Object Methods',
                definition: 'Functions that are properties of objects.',
                keyPoints: [
                  'Functions inside objects',
                  'Use this to access object properties',
                  'Can be defined in various ways',
                  'Called using object.method()'
                ]
              }
            ],
            keyPoints: [
              'Objects group related data and functions',
              'Property names are also called keys',
              'Objects are mutable (can be changed)',
              'Use JSON.stringify() to convert to string'
            ],
            code: `// Creating objects
// 1. Object literal (most common)
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

// 2. Using constructor
let car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2020;

// Accessing properties
console.log(person.name);        // Dot notation
console.log(person["age"]);      // Bracket notation

// Adding properties
person.email = "john@email.com";
person["country"] = "USA";

// Object methods
let calculator = {
  add: function(a, b) {
    return a + b;
  },
  multiply(a, b) {  // ES6 shorthand
    return a * b;
  },
  subtract: (a, b) => a - b  // Arrow function
};

console.log(calculator.add(5, 3));       // 8
console.log(calculator.multiply(5, 3));  // 15

// Nested objects
let student = {
  name: "Alice",
  marks: {
    math: 95,
    science: 88,
    english: 92
  },
  getAverage: function() {
    let total = this.marks.math + this.marks.science + this.marks.english;
    return total / 3;
  }
};

console.log(student.marks.math);       // 95
console.log(student.getAverage());     // 91.67

// Looping through object
console.log("\\nStudent details:");
for (let key in student) {
  if (typeof student[key] !== 'function') {
    console.log(key + ": " + student[key]);
  }
}`
          }
        },
        {
          id: 'es6-features',
          title: '10. ES6+ Features',
          icon: 'fa-bolt',
          content: {
            title: 'Modern JavaScript Features',
            description: 'ES6 (ECMAScript 2015) introduced major improvements to JavaScript.',
            definition: 'ES6+ refers to JavaScript versions from ES6 (2015) onward, introducing modern syntax and features.',
            types: [
              {
                title: 'Template Literals',
                definition: 'String literals allowing embedded expressions using backticks (`).',
                keyPoints: [
                  'Use backticks instead of quotes',
                  'Embed variables with ${}',
                  'Support multi-line strings',
                  'Can include expressions'
                ]
              },
              {
                title: 'Destructuring',
                definition: 'Extract values from arrays or properties from objects into variables.',
                keyPoints: [
                  'Array destructuring: [a, b] = [1, 2]',
                  'Object destructuring: {x, y} = {x: 1, y: 2}',
                  'Default values',
                  'Nested destructuring'
                ]
              },
              {
                title: 'Spread Operator',
                definition: 'Expands an array or object into individual elements.',
                keyPoints: [
                  '... syntax',
                  'Copy arrays/objects',
                  'Merge arrays/objects',
                  'Pass array elements as arguments'
                ]
              },
              {
                title: 'Rest Parameters',
                definition: 'Collects multiple elements into an array.',
                keyPoints: [
                  'Also uses ... syntax',
                  'Collects remaining arguments',
                  'Must be last parameter',
                  'Converts arguments to array'
                ]
              }
            ],
            keyPoints: [
              'ES6 makes code cleaner and more readable',
              'Most modern browsers support ES6',
              'Use Babel to transpile for older browsers',
              'Arrow functions have no this binding'
            ],
            code: `// 1. Template Literals
let name = "John";
let age = 30;
console.log(\`\${name} is \${age} years old\`);
console.log(\`Next year he will be \${age + 1}\`);

// Multi-line string
let message = \`Hello,
This is a multi-line
string in JavaScript!\`;
console.log(message);

// 2. Destructuring
// Array destructuring
let colors = ["red", "green", "blue"];
let [firstColor, secondColor] = colors;
console.log(firstColor, secondColor); // "red green"

// Object destructuring
let user = {username: "alice", email: "alice@email.com"};
let {username, email} = user;
console.log(username, email); // "alice alice@email.com"

// Default values
let [a = 1, b = 2] = [10];
console.log(a, b); // 10 2

// 3. Spread Operator
// Copy array
let arr1 = [1, 2, 3];
let arr2 = [...arr1]; // Copy
arr2.push(4);
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3, 4]

// Merge arrays
let fruits = ["apple", "banana"];
let vegetables = ["carrot", "potato"];
let food = [...fruits, ...vegetables];
console.log(food); // ["apple", "banana", "carrot", "potato"]

// 4. Rest Parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// With regular parameters
function display(first, second, ...others) {
  console.log("First:", first);
  console.log("Second:", second);
  console.log("Others:", others);
}
display("A", "B", "C", "D", "E");`
          }
        },
        {
          id: 'async',
          title: '11. Async JavaScript',
          icon: 'fa-clock',
          content: {
            title: 'Asynchronous JavaScript',
            description: 'Asynchronous programming allows JavaScript to handle time-consuming operations without blocking. Fetch API is used for making HTTP requests.',
            definition: 'Asynchronous programming enables code to run in the background while other code executes. Fetch API provides an interface for fetching resources across the network.',
            types: [
              {
                title: 'Callbacks',
                definition: 'Functions passed as arguments to other functions, executed later when an operation completes.',
                keyPoints: [
                  'Traditional async programming pattern',
                  'Function passed as parameter',
                  'Executed after operation completes',
                  'Can lead to callback hell with nested callbacks'
                ]
              },
              {
                title: 'Promises',
                definition: 'Objects representing the eventual completion or failure of an async operation.',
                keyPoints: [
                  'Three states: pending, fulfilled, rejected',
                  '.then() handles success, .catch() handles errors',
                  '.finally() always executes',
                  'Better than callbacks for handling async operations'
                ]
              },
              {
                title: 'Async/Await',
                definition: 'Syntactic sugar built on Promises, makes async code look synchronous.',
                keyPoints: [
                  'async keyword before function',
                  'await pauses execution until promise settles',
                  'try-catch for error handling',
                  'Cleaner, more readable than promise chains'
                ]
              },
              {
                title: 'Fetch API',
                definition: 'Modern interface for making HTTP requests in JavaScript. Returns a Promise.',
                keyPoints: [
                  'Built into modern browsers',
                  'Simpler than XMLHttpRequest',
                  'Returns a Promise that resolves to Response',
                  'Supports GET, POST, PUT, DELETE methods'
                ]
              },
              {
                title: 'HTTP Methods in Fetch',
                definition: 'Different HTTP methods used with Fetch API for various operations.',
                keyPoints: [
                  'GET: Retrieve data from server',
                  'POST: Send data to server',
                  'PUT: Update existing data',
                  'DELETE: Remove data',
                  'PATCH: Partial update'
                ]
              },
              {
                title: 'Response Methods',
                definition: 'Methods available on the Response object returned by fetch.',
                keyPoints: [
                  '.json(): Parse response as JSON',
                  '.text(): Get response as text',
                  '.blob(): Get response as binary data',
                  '.formData(): Get as FormData object',
                  '.arrayBuffer(): Get as ArrayBuffer'
                ]
              }
            ],
            keyPoints: [
              'JavaScript is single-threaded but supports async operations',
              'Fetch API simplifies making HTTP requests',
              'Always use try-catch with async/await',
              'JSON is the most common data format for APIs'
            ],
            code: `console.log("=== ASYNC JAVASCRIPT & FETCH API ===\\n");

// ===== 1. CALLBACKS (Traditional approach) =====
console.log("1. CALLBACKS Example:");
function fetchData(callback) {
  setTimeout(() => {
    const data = {name: "John", age: 30};
    callback(null, data); // null for error, data for success
  }, 1000);
}

fetchData((error, data) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Callback Data:", data);
  }
});

// ===== 2. PROMISES (Modern approach) =====
console.log("\\n2. PROMISES Example:");
function getNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random > 0.3) {
        resolve({value: random, message: "Success!"});
      } else {
        reject("Error: Number too small");
      }
    }, 1000);
  });
}

getNumber()
  .then(result => {
    console.log("Promise Result:", result);
    return result.value * 100;
  })
  .then(multiplied => {
    console.log("Multipled value:", multiplied);
  })
  .catch(error => {
    console.log("Promise Error:", error);
  })
  .finally(() => {
    console.log("Promise completed (finally block)");
  });

// ===== 3. ASYNC/AWAIT (Cleanest approach) =====
console.log("\\n3. ASYNC/AWAIT Example:");
async function processUser() {
  try {
    console.log("Starting async process...");
    
    // Simulate API call
    let user = await new Promise(resolve => {
      setTimeout(() => resolve({name: "Alice", id: 1}), 1000);
    });
    
    console.log("User received:", user);
    
    // Process user data
    let processedUser = {
      ...user,
      processedAt: new Date().toISOString(),
      status: "active"
    };
    
    return processedUser;
  } catch (error) {
    console.error("Process error:", error);
    return {error: true, message: "Failed to process user"};
  }
}

processUser().then(result => {
  console.log("Final result:", result);
});

// ===== 4. FETCH API EXAMPLES =====
console.log("\\n4. FETCH API EXAMPLES:");

// Basic GET request
async function fetchUserData() {
  try {
    console.log("Fetching user data from API...");
    
    // Using a public API for demonstration
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    
    // Check if response is OK
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    // Parse JSON response
    const user = await response.json();
    
    console.log("Fetched User:", {
      id: user.id,
      name: user.name,
      email: user.email,
      website: user.website
    });
    
    return user;
  } catch (error) {
    console.log("API Error:", error.message);
    console.log("Using mock data instead...");
    // Return mock data if API fails
    return {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      website: "https://example.com"
    };
  }
}

// POST request example
async function createPost() {
  try {
    console.log("\\nCreating a new post...");
    
    const newPost = {
      title: "JavaScript Master",
      body: "Learning async JavaScript and Fetch API",
      userId: 1
    };
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    });
    
    if (!response.ok) {
      throw new Error(\`Failed to create post: \${response.status}\`);
    }
    
    const createdPost = await response.json();
    console.log("Post created successfully!");
    console.log("Post ID:", createdPost.id);
    console.log("Title:", createdPost.title);
    
    return createdPost;
  } catch (error) {
    console.log("Create post error:", error.message);
    return null;
  }
}

// Fetch with different HTTP methods
async function demonstrateHttpMethods() {
  console.log("\\n=== HTTP METHODS DEMONSTRATION ===");
  
  // GET - Read data
  console.log("GET - Reading data");
  const getResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const post = await getResponse.json();
  console.log("Fetched post title:", post.title);
  
  // PUT - Update data
  console.log("\\nPUT - Updating data");
  const updatedData = {
    id: 1,
    title: "Updated Title",
    body: "Updated body content",
    userId: 1
  };
  
  const putResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(updatedData)
  });
  console.log("Update status:", putResponse.status);
  
  // DELETE - Remove data
  console.log("\\nDELETE - Removing data");
  const deleteResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
  });
  console.log("Delete status:", deleteResponse.status);
}

// ===== 5. PRACTICAL FETCH EXAMPLES =====
console.log("\\n5. PRACTICAL FETCH USE CASES:");

// Example 1: Fetching multiple resources
async function fetchMultipleResources() {
  console.log("Fetching multiple resources...");
  
  try {
    // Fetch multiple endpoints in parallel
    const [usersResponse, postsResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    ]);
    
    const users = await usersResponse.json();
    const posts = await postsResponse.json();
    
    console.log(\`Fetched \${users.length} users and \${posts.length} posts\`);
    console.log("First user:", users[0].name);
    console.log("First post:", posts[0].title);
    
  } catch (error) {
    console.log("Multiple fetch error:", error.message);
  }
}

// Example 2: Error handling with fetch
async function fetchWithErrorHandling() {
  console.log("\\nFetch with comprehensive error handling...");
  
  try {
    // Intentional error - wrong URL
    const response = await fetch('https://jsonplaceholder.typicode.com/wrong-url');
    
    if (!response.ok) {
      // Handle HTTP errors (404, 500, etc.)
      throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
    }
    
    const data = await response.json();
    console.log("Data:", data);
    
  } catch (error) {
    // Handle network errors and HTTP errors
    if (error.name === 'TypeError') {
      console.log("Network error - check your connection");
    } else {
      console.log("HTTP error:", error.message);
    }
  }
}

// Example 3: Fetch with timeout
function fetchWithTimeout(url, timeout = 3000) {
  return new Promise(async (resolve, reject) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
      reject(new Error("Request timeout"));
    }, timeout);
    
    try {
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        reject(new Error(\`HTTP \${response.status}\`));
        return;
      }
      
      const data = await response.json();
      resolve(data);
    } catch (error) {
      if (error.name === 'AbortError') {
        reject(new Error("Request aborted due to timeout"));
      } else {
        reject(error);
      }
    }
  });
}

// ===== 6. EXECUTING EXAMPLES =====
// Execute fetch examples with a delay to avoid overwhelming
setTimeout(async () => {
  await fetchUserData();
  await createPost();
  await demonstrateHttpMethods();
  await fetchMultipleResources();
  await fetchWithErrorHandling();
  
  // Try fetch with timeout
  console.log("\\nTrying fetch with timeout...");
  fetchWithTimeout('https://jsonplaceholder.typicode.com/users/1', 2000)
    .then(data => console.log("Timeout fetch success:", data.name))
    .catch(error => console.log("Timeout fetch error:", error.message));
}, 2000);

// ===== 7. TIMERS (setTimeout & setInterval) =====
console.log("\\n7. TIMERS - setTimeout & setInterval:");

// setTimeout - executes once after delay
setTimeout(() => {
  console.log("This message appears after 2 seconds");
}, 2000);

// setInterval - executes repeatedly
let counter = 1;
const intervalId = setInterval(() => {
  console.log(\`Interval execution #\${counter}\`);
  counter++;
  
  if (counter > 3) {
    clearInterval(intervalId);
    console.log("Interval stopped after 3 executions");
  }
}, 1000);

console.log("\\n=== All examples loaded ===");
console.log("Check the console for async output!");`
          }
        }
      ],
      completedTopics: new Set()
    };

    // ========== APPLICATION LOGIC ==========
    document.addEventListener('DOMContentLoaded', function() {
      // DOM Elements
      const navbar = document.getElementById('navbar');
      const menuToggle = document.getElementById('menuToggle');
      const navLinks = document.getElementById('navLinks');
      const startLearningBtn = document.getElementById('startLearningBtn');
      const learningInterface = document.getElementById('learningInterface');
      const closeLearningBtn = document.getElementById('closeLearning');
      const topicsSidebar = document.querySelector('.topics-sidebar');
      const progressFill = document.getElementById('progressFill');
      const progressText = document.getElementById('progressText');

      // Initialize the platform
      initLearningPlatform();

      // Navbar scroll effect
      window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });

      // Mobile menu toggle
      menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') 
          ? '<i class="fas fa-times"></i>' 
          : '<i class="fas fa-bars"></i>';
      });

      // Close mobile menu when clicking a link
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('active');
          menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
      });

      // Open learning interface
      startLearningBtn.addEventListener('click', function(e) {
        e.preventDefault();
        learningInterface.style.display = 'block';
        document.body.style.overflow = 'hidden';
        updateProgress();
      });

      // Close learning interface
      closeLearningBtn.addEventListener('click', function() {
        learningInterface.style.display = 'none';
        document.body.style.overflow = 'auto';
      });

      // ========== INITIALIZATION FUNCTIONS ==========
      function initLearningPlatform() {
        populateTopics();
        loadTopic('js-intro');
      }

      function populateTopics() {
        const topicsContainer = topicsSidebar.querySelector('.topic-category') || 
                               document.createElement('div');
        
        if (!topicsContainer.classList.contains('topic-category')) {
          topicsContainer.className = 'topic-category';
          topicsSidebar.appendChild(topicsContainer);
        }

        // Clear existing content
        topicsContainer.innerHTML = '<div class="category-title"><i class="fas fa-graduation-cap"></i> Complete Curriculum</div>';

        // Add all topics
        learningData.topics.forEach(topic => {
          const topicItem = document.createElement('div');
          topicItem.className = 'topic-item';
          topicItem.id = `topic-${topic.id}`;
          topicItem.innerHTML = `
            <i class="fas ${topic.icon}"></i> ${topic.title}
          `;
          
          topicItem.addEventListener('click', () => {
            loadTopic(topic.id);
            setActiveTopic(topic.id);
            markTopicCompleted(topic.id);
          });
          
          topicsContainer.appendChild(topicItem);
        });
      }

      function loadTopic(topicId) {
        const topic = learningData.topics.find(t => t.id === topicId);
        if (!topic) return;

        const content = topic.content;
        const contentArea = document.querySelector('.content-area');
        
        // Build types HTML
        let typesHTML = '';
        if (content.types && content.types.length > 0) {
          typesHTML = `
            <div class="types-container">
              <div class="types-header">
                <i class="fas fa-list-ul"></i>
                <span>Types of ${content.title.split(' ')[0]}</span>
              </div>
              <div class="types-grid">
                ${content.types.map(type => `
                  <div class="type-item">
                    <div class="type-title">
                      <i class="fas fa-chevron-right"></i>
                      ${type.title}
                    </div>
                    <div class="type-definition">${type.definition}</div>
                    <div class="key-points">
                      <ul>
                        ${type.keyPoints.map(point => `<li>${point}</li>`).join('')}
                      </ul>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }

        // Build content HTML
        contentArea.innerHTML = `
          <div class="content-header">
            <div class="content-title">
              <div class="content-icon">
                <i class="fas ${topic.icon}"></i>
              </div>
              <span>${content.title}</span>
            </div>
            <div class="content-description">${content.description}</div>
          </div>

          <div class="definition-box">
            <h3><i class="fas fa-book"></i> Definition</h3>
            <div class="definition-content">${content.definition}</div>
          </div>

          ${typesHTML}

          <div class="key-points">
            <h3 style="color: var(--primary); margin-bottom: 15px; font-size: 20px;">
              <i class="fas fa-star"></i> Key Learning Points
            </h3>
            <ul>
              ${content.keyPoints.map(point => `<li>${point}</li>`).join('')}
            </ul>
          </div>

          <div class="code-example">
            <div class="example-header">
              <div class="example-title">
                <i class="fas fa-code"></i>
                Practice Example
              </div>
              <button class="copy-code">
                <i class="fas fa-copy"></i> Copy Code
              </button>
            </div>
            <pre class="code-block">${content.code}</pre>
          </div>

          <div class="practice-area">
            <div class="practice-header">
              <div class="practice-icon">
                <i class="fas fa-play"></i>
              </div>
              <div class="practice-title">Try It Yourself</div>
            </div>
            <div class="code-block" id="practiceEditor" contenteditable="true">${content.code}</div>
            <div class="practice-buttons">
              <button class="run-btn" id="runCode">
                <i class="fas fa-play"></i> Run Code
              </button>
              <button class="reset-btn" id="resetCode">
                <i class="fas fa-redo"></i> Reset
              </button>
            </div>
          </div>
        `;

        // Reattach event listeners
        setupEventListeners();
        animateContent();
      }

      function setupEventListeners() {
        // Run code button
        const runCodeBtn = document.getElementById('runCode');
        if (runCodeBtn) {
          runCodeBtn.addEventListener('click', function() {
            try {
              const code = document.getElementById('practiceEditor').textContent;
              console.log('Running user code...');
              console.log('='.repeat(50));
              eval(code);
              console.log('='.repeat(50));
            } catch (error) {
              console.error('Error running code:', error);
              alert('Error in code: ' + error.message);
            }
          });
        }

        // Reset code button
        const resetCodeBtn = document.getElementById('resetCode');
        if (resetCodeBtn) {
          const topicId = getActiveTopicId();
          const topic = learningData.topics.find(t => t.id === topicId);
          if (topic) {
            resetCodeBtn.addEventListener('click', function() {
              document.getElementById('practiceEditor').textContent = topic.content.code;
            });
          }
        }

        // Copy code functionality
        document.addEventListener('click', function(e) {
          if (e.target.classList.contains('copy-code') || 
              e.target.parentElement.classList.contains('copy-code')) {
            const copyBtn = e.target.classList.contains('copy-code') ? 
                           e.target : e.target.parentElement;
            const codeBlock = copyBtn.closest('.code-example').querySelector('.code-block');
            
            navigator.clipboard.writeText(codeBlock.textContent)
              .then(() => {
                const originalText = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                  copyBtn.innerHTML = originalText;
                }, 2000);
              })
              .catch(err => {
                console.error('Failed to copy: ', err);
              });
          }
        });
      }

      function setActiveTopic(topicId) {
        // Remove active class from all topics
        document.querySelectorAll('.topic-item').forEach(item => {
          item.classList.remove('active');
        });
        
        // Add active class to clicked topic
        const activeTopic = document.getElementById(`topic-${topicId}`);
        if (activeTopic) {
          activeTopic.classList.add('active');
        }
      }

      function getActiveTopicId() {
        const activeTopic = document.querySelector('.topic-item.active');
        if (activeTopic) {
          return activeTopic.id.replace('topic-', '');
        }
        return 'js-intro';
      }

      function markTopicCompleted(topicId) {
        learningData.completedTopics.add(topicId);
        updateProgress();
      }

      function updateProgress() {
        const total = learningData.topics.length;
        const completed = learningData.completedTopics.size;
        const percentage = Math.round((completed / total) * 100);
        
        progressFill.style.width = `${percentage}%`;
        progressText.textContent = `${percentage}% Complete (${completed}/${total} topics)`;
      }

      function animateContent() {
        const elements = document.querySelectorAll('.definition-box, .types-container, .key-points, .code-example');
        elements.forEach((el, index) => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(20px)';
          setTimeout(() => {
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, 100 * index);
        });
      }

      // Add ripple effect to buttons
      document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', function(e) {
          const x = e.pageX - this.offsetLeft;
          const y = e.pageY - this.offsetTop;
          
          const ripples = document.createElement('span');
          ripples.style.left = x + 'px';
          ripples.style.top = y + 'px';
          ripples.classList.add('ripple');
          
          this.appendChild(ripples);
          
          setTimeout(() => {
            ripples.remove();
          }, 1000);
        });
      });
    });

    // Add ripple effect styles
    const style = document.createElement('style');
    style.textContent = `
      .btn {
        position: relative;
        overflow: hidden;
      }
      
      .ripple {
        position: absolute;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-animation 1s linear;
        pointer-events: none;
      }
      
      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);