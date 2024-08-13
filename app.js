//Comments in "JS".
// This is a single line comment.

/* This is a
multi-line comment. */

//XXX---XXX---XXX

//Declaring and Assigning Variables Using "Var".

var myName ;
myName = 10 ;//here a "var" named "myName" is declared and then is assigned value of 10.
var myVar;
myVar = myName;//here a "var" named "myVar" is declared and then is assigned value of myName which is 10.
console.log(myName);
console.log(myVar);

//XXX---XXX---XXX

//Initialization.
var myInitialization = 10;//here a "var" named "myInitialization" is declared and then is assigned in the same line with value of 10.
console.log(myInitialization);

//XXX---XXX---XXX

//Declaring String Variables.
var Character = "Hello";

//XXX---XXX---XXX

//Uninitialized Variables.
var a = 5;
a = b + 1;
console.log(a);

//XXX---XXX---XXX

//Case Sensitivity = "camelCase".
var camelCase = "Hello";//Camel Case : First word's every letter will be small , second word's first letter will be capital.
console.log(camelCase);
var myHouse = "big";
console.log(myHouse);

//XXX---XXX---XXX

//Declaring Variables Using "Let".
let myLet = 15 ;//it throws an error when reassigned.
let yourLet = 20;
console.log(myLet);
console.log(yourLet);
//let myLet = 25 //Throws an Error in "Let" , Doesn't Throw Error in "Var".

//XXX---XXX---XXX

///Declaring Variables Using "Const".
const myConst = 5 ; //Const Can't Be Reassigned
console.log(myConst);
//myConst = 10; //Throws an Error in "Const".

//XXX---XXX---XXX

//Addition in "JS".
let d = 30;
let c = 5;
d = d + c;
console.log(d);

//XXX---XXX---XXX

//Subtraction in "JS".
let e = 30;
let f = 5;
e = e - f;
console.log(e);

//XXX---XXX---XXX

//Multiplication in "JS".
let g = 8;
let h = 5;
g = g * h;
console.log(g);

//XXX---XXX---XXX

//Division in "JS".
let i = 10;
let j = 2;
i = i / j;
console.log(i);

//XXX---XXX---XXX

//Remainder in "JS".
let k = 10;
let l = 3;
k = k % l;
console.log(k);

//XXX---XXX---XXX

//Augmented Addition in "JS".
let m = 10;
let n = 5;
m += n;
console.log(m);

//XXX---XXX---XXX

//Augmented Subtraction in "JS".
let o = 10;
let p = 5;
o -= p;
console.log(o);

//XXX---XXX---XXX

//Augmented Multiplication in "JS".
let q = 10;
let r = 5;
q *= r;
console.log(q);

//XXX---XXX---XXX

//Augmented Division in "JS".
let s = 10;
let t = 2;
s /= t;
console.log(s);

//XXX---XXX---XXX

//Literal Quote in "JS".
let Man = "Hello, World!";
console.log(Man);

//XXX---XXX---XXX

//Single Quotes in "JS".
let Woman = 'Hello, World!';
console.log(Woman);

//XXX---XXX---XXX

//Escape Sequence of String in "JS".
let youngChild = "Hello, \\World!";
console.log(youngChild);

//XXX---XXX---XXX

//Concatenating Strings with "+=" Operator in "JS".
let middleChild = "Hello, ";
let oldChild = "World!";
middleChild += oldChild;
console.log(middleChild);

//XXX---XXX---XXX

//Constructing Strings with Variables in "JS".
let firstChild = "Hello, ";
let secondChild = "World!";
let thirdChild = firstChild + secondChild;
console.log(thirdChild);

//XXX---XXX---XXX

//Appending Variables to Strings in "JS".
let fourthChild = "Hello, ";
let fifthChild = "World !"
fourthChild += fifthChild;
console.log(fourthChild);

//XXX---XXX---XXX

//Finding the Length of String in "JS".
let sixthChild = "Hello, World!";
console.log(sixthChild.length);//here the string "hello world"'s length will be 10 characters.

//XXX---XXX---XXX

//Bracket Notation in "JS".
let firstName = "Charles";
let firstLetter = firstName[0];
console.log(seventhChild);//In JS counting starts from 0 so 0 targets the first character of the string.

//XXX---XXX---XXX

//String Immutability in "JS".
let eighthChild = "Hello, World!";
// eighthChild[0] = 'J'; // This Will Throw an Error.

//XXX---XXX---XXX

//Bracket Notation to find last Character in String in "JS".
let ninthChild = "Hello, World!";
let lastCharacter = ninthChild[ninthChild.length - 1];
console.log(lastCharacter);

//XXX---XXX---XXX

//Word Blanks in "JS".
let tenthChild = "Hello, World!";
let firstWord = tenthChild.substring(0, 5);
let secondWord = tenthChild.substring(7, 12);
console.log(firstWord);

//XXX---XXX---XXX

//Storing Multiple Values in One Variable in "JS".
let eleventhChild = ["Hello", "World!", "JS", "is", "fun"];
console.log(eleventhChild[0]);

//XXX---XXX---XXX

//Nesting Arrays in "JS".
let twelfthChild = [["Hello"], ["World!"], ["JS"], ["is"], ["fun"]];
console.log(twelfthChild);

//XXX---XXX---XXX

//Array & Index in "JS".
let thirteenthChild = ["Hello", "World!", "JS", "is", "fun"]
console.log(thirteenthChild[0]);

//XXX---XXX---XXX

//Modify Array with Index in "JS".
let fourteenthChild = ["Hello", "World!", "JS", "is", "fun"]
fourteenthChild[0] = "Python";
console.log(fourteenthChild);

//XXX---XXX---XXX

//Push Method in "JS".
let u = ["Hello", "World!", "JS", "is", "fun"]
u.push("Python");
console.log(u);//Push Method : It allows you to push a value at the end of an array & gives you a new length.

//XXX---XXX---XXX

//Pop method in "JS".
let v = ["Hello", "World!", "JS", "is", "fun"]
let Popped  = v.pop();//Pop method : it removes the last element of an array and returns it to a new variable.

//XXX---XXX---XXX

//Shift method in "JS".
let w = ["Hello", "World!", "JS", "is", "fun"]
let Shifted = w.shift();
console.log(w);//Shift method : it removes the first element of an array and returns it to a new variable.

//XXX---XXX---XXX

//Unshift method in "JS".
let x = ["Hello", "World!", "JS", "is", "fun"]
x.unshift("Python");
console.log(x);//Unshift method : It allows you to push a value at the start of an array & gives you a new length.

//XXX---XXX---XXX

//Function in "JS".
function y() {
    console.log("Hello World");
}

//XXX---XXX---XXX

//Passing Values to function with Arguments in "JS".
function z(a, b) {
    console.log(a + b);
}

//XXX---XXX---XXX

//Return Values to function with Returns in "JS".
function multiplyFive(num) {
    return num * 5;
}
const answer = multiplyFive(5)
console.log(answer);

//XXX---XXX---XXX

//Global Scope in "JS".
var globalVar = 10;
function myFunction() {
    oopsGlobal = globalVar/2;
}
myFunction();
console.log(oopsGlobal);

//XXX---XXX---XXX

//Local Scope in "JS".
function myFunction() {
    var localVar = 10;
    console.log(localVar);
}
myFunction();
console.log(LocalVar)

//XXX---XXX---XXX