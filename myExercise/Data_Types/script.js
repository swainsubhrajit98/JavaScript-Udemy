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
let s = "Hello, World!";
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