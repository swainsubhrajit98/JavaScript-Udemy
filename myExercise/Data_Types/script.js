// Data Types:
// In JavaScript there is two types of data type

// 1. Primitive datatypes :
// Primitive datatypes represent single values and are immutable.
// Primitive datatypes are those datatypes whose size is fixed at compile time.
// There are primarily five primitive datatypes :

// Numbers
// Strings
// Boolean
// Undefined
// Null

// Numbers
// Numbers are used to represent numeric values, which can be integers or floating-point numbers.
// Represents numeric values (integers and decimals).
let n = 42;
let pi = 3.14;
let integerNumber = 3;
console.log(typeof integerNumber); // number
let floatNumber = 3.14;
console.log(typeof floatNumber); //number
let output = integerNumber + floatNumber;
console.log(output); // 6.14

// In JavaScript, we can perform arithmetic operations on numbers, including addition, subtraction, multiplication, and division.

let number1 = 13;
let number2 = 10;

let sum = number1 + number2;
console.log(sum); // 23

let product = number1 * number2;
console.log(product); // 103

let quotient = number1 / number2;
console.log(quotient); //1.3

// Moreover, JavaScript also provides several built-in methods for working with numbers, such as 'parseInt()' and 'parseFloat()' for converting strings to numbers.

let strNum = "25";
console.log(typeof strNum); // string

let strFloat = "35.63";
console.log(typeof strFloat); // string

let parsedInteger = parseInt(strNum);0
let parsedFloat = parseInt(strFloat);

console.log(typeof parsedInteger); // number
console.log(typeof parsedFloat); // number

// Strings
// In JavaScript, the "Strings" primitive data type represents sequences of characters. Strings are used to store and manipulate textual data, such as words, sentences, or any other sequence of characters.
// Represents text enclosed in single or double quotes.
// let s = "Hello, World!";
// let string1 = "Namaste";
// console.log(typeof string1); // string

// let string2 = "Namaste";
// console.log(typeof string2); // string

// let string3 = `Namaste`;
// console.log(typeof string3); // string

// Concatenating strings
// We can concatenate multiple strings in JavaScript using two different ways:

// Using the '+' operator
// String interpolation with template literals (``)

// Concatenation using '+' operator:
// let str1 = "Mobile";
// let str2 = "Charger";
// let finalSentence = str1 + " and " + str2 + "!";
// console.log(finalSentence); //Output : Mobile and Charger!

// Concatenation using string interpolation using template literals(``):
// let str3 = "Mobile";
// let str4 = "Charger";
// let finalSentence2 = `${str3} and ${str4}!`;
// console.log(finalSentence2); //Output : Mobile and Charger!

// JavaScript provides numerous built-in methods for working with strings, such as length, toUpperCase(), toLowerCase(), substring(), charAt(), indexOf(), split(), replace(), and many more, which allows us to perform various operations on strings, such as manipulation, searching, and formatting.

//  String Methods
// JavaScript strings are the sequence of characters. They are treated as Primitive data types. In JavaScript, strings are automatically converted to string objects when using string methods on them. This process is called auto-boxing. The following are methods that we can call on strings.

// slice() extracts a part of the string based on the given stating-index and ending-index and returns a new string.
// substring() returns the part of the given string from the start index to the end index.
// substr() This method returns the specified number of characters from the specified index from the given string. It extracts a part of the original string.
// replace() replaces a part of the given string with another string or a regular expression. The original string will remain unchanged.
// replaceAll() returns a new string after replacing all the matches of a string with a specified string or a regular expression. The original string is left unchanged after this operation.
// toUpperCase() converts all the characters present in the String to upper case and returns a new String with all characters in upper case. This method accepts single parameter stringVariable string that you want to convert in upper case.
// toLowerCase() converts all the characters present in the so lowercase and returns a new string with all the characters in lowercase.
// trim() is used to remove either white spaces from the given string. This method returns a new string with removed white spaces. This method is called on a String object. This method doesn’t accept any parameter.
// trimStart() removes whitespace from the beginning of a string. The value of the string is not modified in any manner, including any whitespace present after the string.
// trimEnd() removes white space from the end of a string. The value of the string is not modified in any manner, including any white-space present before the string.
// padStart() pad a string with another string until it reaches the given length. The padding is applied from the left end of the string.
// padEnd() pad a string with another string until it reaches the given length. The padding is applied from the right end of the string.
// charAt() returns the character at the specified index.
// charCodeAt() returns a number that represents the Unicode value of the character at the specified index. This method accepts one argument.
// split() splits the string into an array of sub-strings. This method returns an array. This method accepts a single parameter character on which you want to split the string.

// 1.slice()
// slice() extracts a part of the string based on the given stating-index and ending-index and returns a new string.

// let A = 'Geeks for Geeks';
// console.log(A.slice(0, 5));
// console.log(A.slice(6, 9));
// console.log(A.slice(10)); // this will count index 10 to length of the string

// 2.substring()
// substring() returns the part of the given string from the start index to the end index. Indexing starts from zero (0).
// here we have to provide start and end index
// let str = "Mind, Power, Soul";
// let part = str.substring(6, 11);
// console.log(part);

// 3.substr()
// substr() This method returns the specified number of characters from the specified index from the given string. It extracts a part of the original string.
// here we have to provide starting index and how many char to take
// let str5 = "Mind, Power, Soul";
// let part2 = str5.substr(6, 5);
// console.log(part2);

//4. replace()
// replace() replaces a part of the given string with another string or a regular expression. The original string will remain unchanged.
// let str = "Mind, Power, Soul";
// let part = str.replace("Power", "Space");
// console.log(part);
// console.log(str);

// 5.replaceAll()
// replaceAll() returns a new string after replacing all the matches of a string with a specified string or a regular expression. The original string is left unchanged after this operation.
// let str = "Mind, Power, Power, Soul";
// let part = str.replaceAll("Power", "Space");
// console.log(part);
// console.log(str);

// 6.toUpperCase()
// toUpperCase()  converts all the characters present in the String to upper case and returns a new String with all characters in upper case. This method accepts single parameter stringVariable string that you want to convert in upper case.
// let geeks = 'stands-for-GeeksforGeeks';
// console.log(geeks.toUpperCase());

// 7.toLowerCase()
// toLowerCase() converts all the characters present in the so lowercase and returns a new string with all the characters in lowercase.
// let geeks = 'stands-for-GeeksforGeeks';
// console.log(geeks.toLowerCase());

// 8.concat()
// concat() combines the text of two strings and returns a new combined or joined string. To concatenate two strings, we use the concat() method on one object of string and send another object of string as a parameter. This method accepts one argument. The variable contains text in double quotes or single quotes.
// let gfg = 'GFG ';
// let geeks = 'stands for GeeksforGeeks';
// console.log(gfg.concat(geeks));

// 9.trim()
// trim() is used to remove either white spaces from the given string. This method returns a new string with removed white spaces. This method is called on a String object. This method doesn’t accept any parameter.
// let gfg = "GFG    ";
// let newGfg = gfg.trim();
// console.log(gfg.length);
// console.log(newGfg);
// console.log(newGfg.length);

// 10.trimStart()
// trimStart() removes whitespace from the beginning of a string. The value of the string is not modified in any manner, including any whitespace present after the string.

// let str = "  Soul   ";
// console.log(str);
// let part = str.trimStart();
// console.log(part);

// 11.trimEnd()
// trimEnd() removes white space from the end of a string. The value of the string is not modified in any manner, including any white-space present before the string.
// let str = "  Soul  ";
// console.log(str);
// let part = str.trimEnd();
// console.log(part);

// 12.padStart()
// padStart() pad a string with another string until it reaches the given length. The padding is applied from the left end of the string.

// let stone = "Soul";
// stone = stone.padStart(15, "Mind ");
// console.log(stone);

// 13.padEnd()
// padEnd() pad a string with another string until it reaches the given length. The padding is applied from the right end of the string.

let stone = "Soul";
stone = stone.padEnd(10, " Power");
console.log(stone);

// 14.charAt()
// charAt() returns the character at the specified index. String in JavaScript has zero-based indexing.

// let gfg = 'GeeksforGeeks';
// let geeks = 'GfG is the best platform to learn and\n'+
// 'experience Computer Science.';
// console.log(gfg);
// console.log(geeks);
// console.log(gfg.charAt(0));
// console.log(geeks.charAt(5));
// console.log(geeks.charAt(0));

// 15.charCodeAt()
// charCodeAt() returns a number that represents the Unicode value of the character at the specified index. This method accepts one argument.
// let gfg = "GeeksforGeeks";
// let geeks =
//   "GfG is the best platform\n\
// to learn and experience\n\
// Computer Science.";
// console.log(gfg.charCodeAt(0));
// console.log(geeks.charCodeAt(5));
// console.log(geeks.charCodeAt());

// 16.split()
// split() splits the string into an array of sub-strings. This method returns an array. This method accepts a single parameter character on which you want to split the string.

let gfg = 'GFG '
let geeks = 'stands-for-GeeksforGeeks'
console.log(geeks.split('-'))

// match(regex)	Returns matches for a regex.	"abc123".match(/\d+/) → ["123"]
// search(regex)	Returns the index of the first match.	"abc123".search(/\d/) → 3

// 🔹 1. Extracting Parts of a String
// Method	Description	Example
// slice(start, end)	Extracts a portion of the string.	"Hello".slice(1, 4) → "ell"
// substring(start, end)	Similar to slice(), but doesn't accept negative indexes.	"Hello".substring(1, 4) → "ell"
// substr(start, length) (Deprecated)	Extracts a substring from a given start index with a specified length.	"Hello".substr(1, 3) → "ell"
// 🔹 2. Changing Case
// Method	Description	Example
// toUpperCase()	Converts to uppercase.	"hello".toUpperCase() → "HELLO"
// toLowerCase()	Converts to lowercase.	"HELLO".toLowerCase() → "hello"
// 🔹 3. Searching in Strings
// Method	Description	Example
// indexOf(substring)	Returns the first index of substring.	"hello".indexOf("l") → 2
// lastIndexOf(substring)	Returns the last index of substring.	"hello".lastIndexOf("l") → 3
// includes(substring)	Checks if substring exists in the string.	"hello".includes("he") → true
// startsWith(substring)	Checks if the string starts with substring.	"hello".startsWith("he") → true
// endsWith(substring)	Checks if the string ends with substring.	"hello".endsWith("lo") → true
// 🔹 4. Replacing & Modifying Strings
// Method	Description	Example
// replace(old, new)	Replaces only the first occurrence of old.	"hello world".replace("world", "JS") → "hello JS"
// replaceAll(old, new)	Replaces all occurrences of old.	"abc abc".replaceAll("abc", "JS") → "JS JS"
// trim()	Removes spaces from both ends.	" hello ".trim() → "hello"
// trimStart()	Removes spaces from the start.	" hello ".trimStart() → "hello "
// trimEnd()	Removes spaces from the end.	" hello ".trimEnd() → " hello"
// repeat(count)	Repeats the string count times.	"hi".repeat(3) → "hihihi"
// 🔹 5. Padding Strings
// Method	Description	Example
// padStart(targetLength, padString)	Pads from start to make it targetLength.	"42".padStart(5, "0") → "00042"
// padEnd(targetLength, padString)	Pads from end to make it targetLength.	"42".padEnd(5, "0") → "42000"
// 🔹 6. Splitting & Joining Strings
// Method	Description	Example
// split(separator)	Splits a string into an array.	"a,b,c".split(",") → ["a", "b", "c"]
// concat(str1, str2, …)	Joins multiple strings.	"Hello".concat(" ", "World") → "Hello World"
// join(separator)	Joins an array into a string.	["a", "b", "c"].join("-") → "a-b-c"
// 🔹 7. Getting Characters
// Method	Description	Example
// charAt(index)	Returns the character at index.	"hello".charAt(1) → "e"
// charCodeAt(index)	Returns Unicode at index.	"hello".charCodeAt(1) → 101
// at(index)	Similar to charAt(), but supports negative indexing.	"hello".at(-1) → "o"
// 🔹 8. Checking String Content
// Method	Description	Example
// match(regex)	Returns matches for a regex.	"abc123".match(/\d+/) → ["123"]
// search(regex)	Returns the index of the first match.	"abc123".search(/\d/) → 3
// 🔹 9. Template Literals (Modern Way)
// Feature	Description	Example
// Backticks (``)	Allows multi-line strings and embedded expressions.	`Hello ${name}`
// Interpolation (${})	Inserts variables inside strings.	`2 + 3 = ${2 + 3}` → "2 + 3 = 5"




// 3. Boolean: Represents a logical value (true or false)
// In JavaScript, Boolean values are often used in conditional statements (such as if statements, while loops, etc.) to control the flow of execution based on whether certain conditions are true or false.
let bool= true;
let isSleeping = true;
let isRunning = false;

if(isSleeping){
    console.log("He is sleeping");
}else{
    console.log("He is Running");
}

let x = 10;
let y = 16;

let isGreater = x > y;
console.log(isGreater);    // False

// 4. Undefined: A variable that has been declared but not assigned a value. 
// In JavaScript, undefined is a primitive value that represents a variable that has been declared but has not been assigned a value. It also serves as the default value of variables that have not been initialized.
let notAssigned;
console.log(notAssigned);

// let range;
// console.log(range);     // undefined

// 5. Null: Represents an intentional absence of any value. 
// Unlike undefined, which typically means a variable has been declared but not initialized, null is explicitly assigned to indicate that there is no value present.
let empty = null;
let range = null;
console.log(range);         // null
console.log(typeof(range));    //object

// 6. Symbol: Represents unique and immutable values, often used as object keys. 
let sym = Symbol('unique');

// 7. BigInt: Represents integers larger than Number.MAX_SAFE_INTEGER.
let bigNumber = 123456789012345678901234567890n;


// \n: new line
// \t: Tab, means 8 spaces
// \\: Back slash
// \': Single quote (')
// \": Double quote (")

// Reference datatypes in JavaScript 

























// JavaScript Object 

// Objects in Javascript
// An object in JavaScript is a data structure used to store related data collections. It stores data as key-value pairs, where each key is a unique identifier for the associated value. Objects are dynamic, which means the properties can be added, modified, or deleted at runtime.

// There are two primary ways to create an object in JavaScript: Object Literal and Object Constructor.

// 1. Creation sing Object Literal
// The object literal syntax allows you to define and initialize an object with curly braces {}, setting properties as key-value pairs.

let object1 = {
    name: "Sourav",
    age: 23,
    job: "Developer"
};
console.log(object1);

// 2. Creation Using new Object() Constructor
let obj = new Object();
obj.name= "Sourav",
obj.age= 23,
obj.job= "Developer"
console.log(obj);

// Basic Operations on JavaScript Objects
// 1. Accessing Object Properties
// You can access an object’s properties using either dot notation or bracket notation


let obj = { name: "Sourav", age: 23 };

// Using Dot Notation
console.log(obj.name);

// Using Bracket Notation
console.log(obj["age"]);
// Output
// Sourav
// 23
// 2. Modifying Object Properties
// Properties in an object can be modified by reassigning their values.

let obj = { name: "Sourav", age: 22 };
console.log(obj);
obj.age = 23;
console.log(obj);

// Output
// { name: 'Sourav', age: 22 }
// { name: 'Sourav', age: 23 }

// 3. Adding Properties to an Object
// You can dynamically add new properties to an object using dot or bracket notation.

let obj = { model: "Tesla" };
obj.color = "Red";
console.log(obj);
// Output
// { model: 'Tesla', color: 'Red' }

// 4. Removing Properties from an Object
// The delete operator removes properties from an object.

let obj = { model: "Tesla", color: "Red" };
delete obj.color;
console.log(obj);

// Output
// { model: 'Tesla' }

// 5. Checking if a Property Exists
// You can check if an object has a property using the in operator or hasOwnProperty() method.

let obj = { model: "Tesla" };
console.log("color" in obj);
console.log(obj.hasOwnProperty("model"));
// Output
// false
// true

// 6. Iterating Through Object Properties
// Use for…in loop to iterate through the properties of an object.

let obj = { name: "Sourav", age: 23 };
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}
// Output
// name: Sourav
// age: 23
// 7. Merging Objects
// Objects can be merged using Object.assign() or the spread syntax { …obj1, …obj2 }.

let obj1 = { name: "Sourav" };
let obj2 = { age: 23};

let obj3 = { ...obj1, ...obj2 };
console.log(obj3);
// Output
// { name: 'Sourav', age: 23 }

// 8. Object Length
// You can find the number of properties in an object using Object.keys().

let obj = { name: "Sourav", age: 23 };
console.log(Object.keys(obj).length);
// Output
// 2

// Shallow Copy → Copies only the reference of nested objects, not the actual values.
// Deep Copy → Creates an independent copy of the entire object, including nested objects.

// 🔹 What is a Shallow Copy?
// A shallow copy creates a new object but maintains references to the same nested objects as the original. If you modify a nested object, the change affects both copies!

let obje3 = {
    name: "Alice",
    details: {
        age: 25,
        city: "New York"
    }
};

// Shallow copy using Object.assign()
let obj4 = Object.assign({}, obje3);

obj4.details.age = 30; // Modify the nested object

console.log(obje3.details.age); // 30 ❌ (Original object also changes!)
console.log(obj4.details.age); // 30 ✅

// ✅ Problem: obj2.details still points to the same memory location as obj1.details, so modifying obj2.details affects obj1 too!

// 🔹 What is a Deep Copy?
// A deep copy creates a completely independent copy of an object, including all nested objects. Changes to the copied object do not affect the original.
let obj4 = {
    name: "Alice",
    details: {
        age: 25,
        city: "New York"
    }
};

// Deep copy using JSON.stringify() & JSON.parse()
let obj5 = JSON.parse(JSON.stringify(obj4));

obj5.details.age = 30; // Modify the deep-copied object

console.log(obj4.details.age); // 25 ✅ (Original object remains unchanged)
console.log(obj5.details.age); // 30 ✅

// ✅ Now, obj1 and obj2 are completely separate copies!
































// Array 

// In JavaScript, an array is an ordered list of values. Each value is called an element, and each element has a numeric position in the array, known as its index. Arrays in JavaScript are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.

// 1. Create Array using Literal
// Creating an array using array literal involves using square brackets [] to define and initialize the array.
// Creating an Empty Array
let a = [];
console.log(a);

// Creating an Array and Initializing with Values
// let b = [10, 20, 30];
// console.log(b);

// 2. Create using new Keyword (Constructor)
// The “Array Constructor” refers to a method of creating arrays by invoking the Array constructor function.
// Creating and Initializing an array with values
let c = new Array(10, 20, 30);

console.log(c);

// Basic Operations on JavaScript Arrays 
// 1. Accessing Elements of an Array
// Any element in the array can be accessed using the index number. The index in the arrays starts with 0.
// Creating an Array and Initializing with Values
let d = ["HTML", "CSS", "JS"];

// Accessing Array Elements
console.log(d[0]);
console.log(d[1]);

// 2. Accessing the First Element of an Array
// The array indexing starts from 0, so we can access first element of array using the index number.
let fst = a[0];
console.log("First Item: ", fst);

// 4. Modifying the Array Elements
// Elements in an array can be modified by assigning a new value to their corresponding index.
a[1]= "Bootstrap";
console.log(a);

// 5. Adding Elements to the Array
// Elements can be added to the array using methods like push() and unshift().

// The push() method add the element to the end of the array.
// The unshift() method add the element to the starting of the array.
// Add Element to the end of Array
a.push("Node.js");
// Add Element to the beginning
a.unshift("Web Development");
console.log(a);

// 6. Removing Elements from an Array
// To remove the elements from an array we have different methods like pop(), shift(), or splice().
// The pop() method removes an element from the last index of the array.
// The shift() method removes the element from the first index of the array.
// The splice() method removes or replaces the element from the array.

let lst = a.pop();
console.log("After Removing the last: " + a);

// Removes and returns the first element
let fst1 = a.shift();
console.log("After Removing the First: " + a);

// Removes 2 elements starting from index 1
a.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + a);

// 7. Array Length
// We can get the length of the array using the array length property.
let len = a.length;
console.log("Array Length: " + len);

// 8. Increase and Decrease the Array Length
// We can increase and decrease the array length using the JavaScript length property.
console.log("After Increasing Length: ", a);
a.length = 2;
console.log("After Decreasing Length: ", a)

// 9. Iterating Through Array Elements
// We can iterate array and access array elements using for loop and forEach loop.

// Example: It is an example of for loop.
for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}

a.forEach(function myfunc(x) {
    console.log(x);
});

// 10. Array Concatenation
// Combine two or more arrays using the concat() method. It returns new array containing joined arrays elements

let a = ["HTML", "CSS", "JS", "React"];
let b = ["Node.js", "Expess.js"];

let concateArray = a.concat(b);
console.log("Concatenated Array: ", concateArray);

// 11. Conversion of an Array to String
// We have a builtin method toString() to converts an array to a string.
console.log(a.toString());

// 12. Check the Type of an Arrays
// The JavaScript typeof operator is used ot check the type of an array. It returns “object” for arrays.

console.log(typeof a);
// 1. JavaScript Array length 
// The length property of an array returns the number of elements in the array. It automatically updates as elements are added or removed.

let a = ["HTML", "CSS", "JS", "React"];
console.log(a.length);
// Output
// 4
// In this example
// The code defines an array ‘a’ containing the elements “HTML”, “CSS”, “JS”, and “React”.
// a.length returns the number of elements in the array.

// 2. JavaScript Array toString() Method
// The toString() method converts the given value into the string with each element separated by commas.

let a  = ["HTML", "CSS", "JS", "React"];
let s = a.toString();
console.log(s);

// Output
// HTML,CSS,JS,React
// In this example
// The code defines an array “a” containing the elements “HTML”, “CSS”, “JS”, and “React”.
// The toString() method converts the array ‘a’ into a string.

// 3. JavaScript Array join() Method
// This join() method creates and returns a new string by concatenating all elements of an array. It uses a specified separator between each element in the resulting string.

// let a = ["HTML", "CSS", "JS", "React"];
// console.log(a.join('|'));

// Output
// HTML|CSS|JS|React
// In this example

// The code defines an array ‘a’ with the elements “HTML”, “CSS”, “JS”, and “React”.
// The join(‘|’) method combines the array elements into a single string, with each element separated by a pipe (|) character.


// 4. JavaScript Array delete Operator
// The delete operator is used to delete the given value which can be an object, array, or anything.

let emp = { 
    firstName: "Riya", 
    lastName: "Kaur", 
    salary: 40000
} 

console.log(delete emp.salary); 
console.log(emp);

// Output
// true
// { firstName: 'Riya', lastName: 'Kaur' }
// In this example
// The delete emp.salary statement removes the salary property from the emp object and returns true if successful.
// After deletion, console.log(emp) prints the updated object without the salary property.

// 5. JavaScript Array concat() Method
// The concat() method is used to concatenate two or more arrays and it gives the merged array.
// let a1 = [11, 12, 13];
// let a2 = [14, 15, 16];
// let a3 = [17, 18, 19];

// let newArr = a1.concat(a2, a3);
// console.log(newArr);

// Output
// [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19
// ]
// In this example
// The code defines three arrays, a1, a2, and a3, and uses the concat() method to merge them into a single array newArr.
// The resulting array [11, 12, 13, 14, 15, 16, 17, 18, 19] is logged to the console, preserving the order of elements from the original arrays.

// 6. JavaScript Array flat() Method
// The flat() method is used to flatten the array i.e. it merges all the given array and reduces all the nesting present in it.

// const a1 = [['1', '2'], ['3', '4', '5',['6'], '7']];
// const a2 = a1.flat(Infinity);
// console.log(a2);

// Output
// [
//   '1', '2', '3',
//   '4', '5', '6',
//   '7'
// ]
// In this example
// The code defines a multilevel (nested) array ‘a1’ and uses the flat(Infinity) method to flatten it completely into a single-level array.

// 7. JavaScript Array.push() Method
// The push() method is used to add an element at the end of an Array. As arrays in JavaScript are mutable objects, we can easily add or remove elements from the Array.

let a = [10, 20, 30, 40, 50];
a.push(60);
a.push(70, 80, 90);
console.log(a);

// Output
// [
//   10, 20, 30, 40, 50,
//   60, 70, 80, 90
// ]
// 8. JavaScript Array.unshift() Method
// The unshift() method is used to add elements to the front of an Array.
// let a = [20, 30, 40];
// a.unshift(10, 20);
// console.log(a);

// Output
// [ 10, 20, 20, 30, 40 ]


// 9. JavaScript Array.pop() Method
// The pop() method is used to remove elements from the end of an array. 

let a = [20, 30, 40, 50];
a.pop();
console.log(a);

// Output
// [ 20, 30, 40 ]

// 10. JavaScript Array.shift() Method
// The shift() method is used to remove elements from the beginning of an array 

let a = [20, 30, 40, 50];
a.shift();
console.log(a);

// Output
// [ 30, 40, 50 ]

// 11. JavaScript Array.splice() Method
// The splice() method is used to Insert and Remove elements in between the Array.
let a = [20, 30, 40, 50];
a.splice(1, 3);
a.splice(1, 0, 3, 4, 5);
console.log(a);

// Output
// [ 20, 3, 4, 5 ]
// The first a.splice(1, 3) removes 3 elements (30, 40, 50) starting at index 1. The array becomes [20].
// The second a.splice(1, 0, 3, 4, 5) inserts 3, 4, and 5 at index 1 without removing anything. The array becomes [20, 3, 4, 5].


// 12. JavaScript Array.slice() Method
// The slice() method returns a new array containing a portion of the original array, based on the start and end index provided as arguments

const a = [1, 2, 3, 4, 5];
const res1 = a.slice(1, 4);
console.log(res1); 
console.log(a)

// Output
// [ 2, 3, 4 ]
// [ 1, 2, 3, 4, 5 ]
// In this example
// The slice() method creates a new array by extracting elements from index 1 to 3 (exclusive of 4) from the original array.
// The original array remains unchanged, and the result is [2, 3, 4].

// 13. JavaScript Array some() Method
// The some() method checks whether at least one of the elements of the array satisfies the condition checked by the argument function.
const a = [1, 2, 3, 4, 5];
let res2 = a.some((val) => val > 4);
console.log(res2); 

// Output
// true
// In this example
// The some() method checks if at least one element in the array satisfies the provided condition.
// (val) => val > 4: The condition checks if any element in the array is greater than 4.
// The method stops as soon as it finds the first matching element, making it efficient for large arrays.


// 14. JavaScript Array map() Method
// The map() method creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method.

let a = [4, 9, 16, 25];
let sub2 = a.map(geeks);
function geeks() {
    return a.map(Math.sqrt);
}
console.log(sub2);

// Output
// [ [ 2, 3, 4, 5 ], [ 2, 3, 4, 5 ], [ 2, 3, 4, 5 ], [ 2, 3, 4, 5 ] ]
// In this example

// The code defines a geeks function, but instead of operating on the individual array ‘a’ elements, it applies Math.sqrt() to the entire a array, resulting in a nested array of square roots.
// The output will be an array of the same length as a, but each element will be the result of applying arr.map(Math.sqrt).

// 15. JavaScript Array filter() method
// The filter() method in JavaScript creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.
let a1 = [1, 2, 3, 4, 5]
let a2 = a1.filter((num) => num > 1)
console.log(a2)

// Output
// [ 2, 3, 4, 5 ]
// In this example
// The filter() method is used to create a new array (a2) that contains all elements of the original array that satisfy the condition (num > 1).
// The filter() method does not modify the original array. It returns a new array, leaving the original one unchanged.

// 16. JavaScript Array reduce() Method
// The reduce() method is used to reduce the array to a single value and executes a provided function for each value of the array (from left to right) and the return value of the function is stored in an accumulator.

let a = [88, 50, 25, 10];
let sub = a.reduce(geeks);

function geeks(tot, num) {
    return tot - num;
}
console.log(sub);

// Output
// 3
// In this example
// The reduce() method iterates over the array ‘a’ and applies the geeks function, which subtracts each element (num) from the running total (tot).
// For the array [88, 50, 25, 10], the calculation proceeds as: 88 – 50 – 25 – 10.

// 17. JavaScript Array reverse() method
// The reverse() method is used to reverse the order of elements in an array. It modifies the array in place and returns a reference to the same array with the reversed order.

let a = [1, 2, 3, 4, 5];
a.reverse();
console.log(a);

// Output
// [ 5, 4, 3, 2, 1 ]
// In this example
// The reverse() method reverses the order of elements in the array arr in place, modifying the original array.
// After applying reverse(), the array.

// 18. JavaScript Array values() method
// The values() method returns a new Array Iterator object that contains the values for each index in the array.

const a = ["Apple", "Banana", "Cherry"];
const res = a.values();
for (const value of res) {
    console.log(value);
}

// Output
// Apple
// Banana
// Cherry
// In this example
// The values() method returns an iterator object that allows iterating over the values of the ‘a’ array.
// The for…of loop is used to iterate over the iterator and log each fruit (“Apple”, “Banana”, “Cherry”) to the console.
























