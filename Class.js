/*.charAt
.toUppercase
.toLowerCase*/
















//In JavaScript, data types categorize values that a variable can hold.
//They are essential for defining the kind of operations that can be
//performed on data and how it is stored.
//  JavaScript has two main categories of data types:
//  primitive and non-primitive

//A variable in JavaScript is a container that stores a data value.
//It acts as a named storage location in the computer's memory,
//allowing you to refer to and manipulate data within your code.
//Variables are essential for managing information and creating dynamic
//and interactive programs.

//string methods
let king = " Ezekiel is the best";
//converts the entire strings to uppercase letters
let myname = king.toUpperCase();
console.log(myname.length);

//Strings methods
//converts the entire strings to lowercase letters
console.log(myname.toLowerCase());
//removes whitespaces from the begining and the end of a string
console.log(myname.trim());
//checks if a string contains a certain value
console.log(myname.includes("THE"));
//replace the first match of oldvalue with new value
//we also have replace all
console.log(myname.replace("BEST", "worst"));
//returns the position of the first occurence of a specified value
//returns -1 if not found
console.log(myname.indexOf("BEST"));
//extracts a part of the start index to the end index
console.log(myname.slice(0, 20));
//joins two or more strings together
console.log(myname.concat(" king in africa"));
//
console.log(king.split(" "));
//
console.log(myname.charAt(10));

let Seniordev = "chinedu";
let Hacker = Seniordev;
console.log(Hacker);

let alphabet = ("I AM A COMPUTER NERD");
let TechFreak = alphabet.toLowerCase();
console.log(TechFreak);
console.log(TechFreak.indexOf("nerd"));
console.log(TechFreak.includes("am"));
console.log(TechFreak.slice(0, 20));

let mutable = [1, 2, 3];
mutable.push(4);
console.log(mutable);
//modify the elements of an array by addinG new elements to the end
//returns the new length of the array

let immutable = "hello";
console.log(immutable);
console.log(immutable.concat(" world"));
console.log(mutable);
//immutable means unchangable. in programming an immutable objects or
// value cannot be changed after its created

//In JavaScript, undefined is a primitive data type that represents a variable that has been declared but has not been assigned a value.
// underfined let x=;
//null
//The null data type in JavaScript is a primitive value that represents the
//intentional absence of any object value

//array
const Phones = ["Iphone", "Samsung", "Infinix"];
const Iphone = [["iphone5"], ["iphone6xplus"], ["iphonexr"]];

//objects
let userprofile = {
  username: "vincent",
  password: "BigBOY",
};

//null
