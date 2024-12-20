//Declaring and Assigning Variables Using "Var".

var myName;
myName = 10; //here a "var" named "myName" is declared and then is assigned value of 10.
var myVar;
myVar = myName; //here a "var" named "myVar" is declared and then is assigned value of myName which is 10.
console.log(myName);
console.log(myVar);

//XXX---XXX---XXX

//Initialization.
var myInitialization = 10; //here a "var" named "myInitialization" is declared and then is assigned in the same line with value of 10.
console.log(myInitialization);

//XXX---XXX---XXX

//Declaring String Variables.
var Character = "Hello";

//XXX---XXX---XXX

//Uninitialized Variables.
var a = 5;
var b;
a = b + 1;
console.log(a);

//XXX---XXX---XXX

//Case Sensitivity = "camelCase".
var camelCase = "Hello"; //Camel Case : First word's every letter will be small , second word's first letter will be capital.
console.log(camelCase);
var myHouse = "big";
console.log(myHouse);

//XXX---XXX---XXX

//Declaring Variables Using "Let".
let myLet = 15; //it throws an error when reassigned.
let yourLet = 20;
console.log(myLet);
console.log(yourLet);
//let myLet = 25 //Throws an Error in "Let" , Doesn't Throw Error in "Var".

//XXX---XXX---XXX

///Declaring Variables Using "Const".
const myConst = 5; //Const Can't Be Reassigned
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
let Woman = "Hello, World!";
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
let fifthChild = "World !";
fourthChild += fifthChild;
console.log(fourthChild);

//XXX---XXX---XXX

//Finding the Length of String in "JS".
let sixthChild = "Hello, World!";
console.log(sixthChild.length); //here the string "hello world"'s length will be 10 characters.

//XXX---XXX---XXX

//Bracket Notation in "JS".
let seventhChild = "Charles";
let firstLetter = seventhChild[0];
console.log(seventhChild); //In JS counting starts from 0 so 0 targets the first character of the string.

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
let thirteenthChild = ["Hello", "World!", "JS", "is", "fun"];
console.log(thirteenthChild[0]);

//XXX---XXX---XXX

//Modify Array with Index in "JS".
let fourteenthChild = ["Hello", "World!", "JS", "is", "fun"];
fourteenthChild[0] = "Python";
console.log(fourteenthChild);

//XXX---XXX---XXX

//Push Method in "JS".
let u = ["Hello", "World!", "JS", "is", "fun"];
u.push("Python");
console.log(u); //Push Method : It allows you to push a value at the end of an array & gives you a new length.

//XXX---XXX---XXX

//Pop method in "JS".
let v = ["Hello", "World!", "JS", "is", "fun"];
let Popped = v.pop(); //Pop method : it removes the last element of an array and returns it to a new variable.

//XXX---XXX---XXX

//Shift method in "JS".
let w = ["Hello", "World!", "JS", "is", "fun"];
let Shifted = w.shift();
console.log(w); //Shift method : it removes the first element of an array and returns it to a new variable.

//XXX---XXX---XXX

//Unshift method in "JS".
let x = ["Hello", "World!", "JS", "is", "fun"];
x.unshift("Python");
console.log(x); //Unshift method : It allows you to push a value at the start of an array & gives you a new length.

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
const answer = multiplyFive(5);
console.log(answer);

//XXX---XXX---XXX

//Global Scope in "JS".
var globalVar = 10;
var oopsGlobal;
function myFunction() {
  oopsGlobal = globalVar / 2;
}
myFunction();
console.log(oopsGlobal);

//XXX---XXX---XXX

//Local Scope in "JS".
var localVar;
function myFunction() {
  var localVar = 10;
  console.log(localVar);
}
myFunction();
console.log(localVar);

//XXX---XXX---XXX

// Global vs Local Scope.
function myFunction() {
  var localVar2 = 10;
  console.log(localVar2);
}

//XXX---XXX---XXX

//Function with returned value.
function add(param1, param2) {
  return param1 + param2;
}
add("Car", 10);
console.log(add);

//XXX---XXX---XXX

//Boolean Values in "JS".
function boolean() {
  return true;
}

console.log(boolean());

//XXX---XXX---XXX

//Boolean Conditional Logic.
function booleanLogic(logic) {
  if (logic) {
    return true;
  }
  return false;
}

console.log(booleanLogic(true));

//XXX---XXX---XXX

//Equality Operator.
function equalityOperator(equal) {
  if (equal == 10) {
    return equal;
  }
  return "not equal";
}

console.log(equalityOperator(10));

//XXX---XXX---XXX

//Strict Equality Operator.

function strictEquality(strictequal) {
  if (strictequal === 10) {
    return equal;
  }
  return "not equal";
}

console.log(strictEquality(10));

//XXX---XXX---XXX
//Strict inequality operator .
function strictInequality(strictequal) {
  if (strictequal !== 10) {
    return "not equal";
  }
  return "equal";
}

console.log(strictInequality(10));

//XXX---XXX---XXX
//Greater & Lesser than operator.
function greaterLesser(num1, num2) {
  if (num1 > num2) {
    return "num1 is greater than num2";
  }
  return "num2 is greater than num1";
}

console.log(greaterLesser(10, 20));

//XXX---XXX---XXX
//Logical & Logical or operator.
function logicalOperator(logic1, logic2) {
  if (logic1 && logic2) {
    return "both logic1 and logic2 are true";
  }
  return "either logic1 or logic2 is false";
}

//XXX---XXX---XXX
//Else Statement.
function elseStatement(num) {
  if (num > 10) {
    return "num is greater than 10";
  }
  return "num is less than or equal to 10";
}

//XXX---XXX---XXX
//Else If statement.
function elseIfStatement(num) {
  if (num > 10) {
    return "num is greater than 10";
  } else if (num === 10) {
    return "num is equal to 10";
  }
}

//XXX---XXX---XXX

//Switch Statement in "JS".
function switchStatement(num) {
  switch (num) {
    case 1:
      return "num is equal to 1";
    case 2:
      return "num is equal to 2";
    case 3:
      return "num is equal to 3";
    default:
      return "num is not equal to 1, 2 or 3";
  }
}

let ans = switchStatement(7);
console.log(ans);

//XXX---XXX---XXX
//Boolean Value in Functions in "JS".
function booleanValue(num) {
  if (num > 10) {
    return true;
  }
  return false;
}
let res = booleanValue(9);
console.log(res);

//XXX---XXX---XXX

//Nested Objects in JS.

let user = {
  object: {
    name: "asad",
    age: 23,
    moreComplex: {
      more: "more",
    },
    arr: [1, 2, 3, { name: "asad" }],
  },
};

let property = "age";

console.log(user.object.moreComplex.more);
console.log(user.object.moreComplex["more"]);
console.log(user.object[property]);

let afkham = {
  object: {
    name: "Afkham",
    age: 13,
    hobbies: ["Football"],
  },
};

//XXX---XXX---XXX

//Conditional Logic in JS.
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue == true) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

trueOrFalse(true);

//XXX---XXX---XXX

//Equality Operator in JS.
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

//XXX---XXX---XXX

//Strict Equality Oprator in JS.
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

//XXX---XXX---XXX

//Not Equals in JS.
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

//XXX---XXX---XXX

//Not Strict Equals in JS.
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

//XXX---XXX---XXX

//Greater than Operator in JS.
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

//XXX---XXX---XXX

//Greater than or Equals to in JS.
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }

  if (val >= 10) {
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

//XXX---XXX---XXX

//Lesser than Operator in JS.
function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }

  if (val < 55) {
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

//XXX---XXX---XXX

//Lesser than or Equals to in JS.
function testLessorEqual(val) {
  if (val <= 20) {
    return "20 or Less";
  }

  if (val <= 10) {
    return "10 or Less";
  }

  return "10 or Over";
}

testLessorEqual(10);

//XXX---XXX---XXX

//Comparision with Logical AND Operator in JS.
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  return "No";
}

testLogicalAnd(10);

//XXX---XXX---XXX

//Comparision with Logical OR Operator in JS.
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }

  return "Inside";
}

testLogicalOr(15);

//XXX---XXX---XXX

//Else Statement in JS.
function testElse(val) {
  let result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}

testElse(4);

//XXX---XXX---XXX

//Else If Statement in JS.
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7);

//XXX---XXX---XXX

//Logical Order in If Else Statements.
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

//XXX---XXX---XXX

//Chaining If Else Statements in JS.
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

testSize(7);

//XXX---XXX---XXX

//Selecting from Many Options with Switch Statements.
function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }
  return answer;
}
caseInSwitch(1);

//XXX---XXX---XXX

//Adding a Default Option in Switch Statements.
function switchOfStuff(val) {
  let answer = "";

  switch (val) {
    case "a":
      return "apple";
      break;
    case "b":
      return "bird";
      break;
    case "c":
      return "cat";
      break;
    default:
      return "stuff";
      break;
  }

  return answer;
}

switchOfStuff(1);

//XXX---XXX---XXX

//Muliple Cases in Switch Statements.
function sequentialSizes(val) {
  let answer = "";

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  return answer;
}

sequentialSizes(1);

//XXX---XXX---XXX

//Replacing If Else Chains with Switch.
function chainToSwitch(val) {
  let answer = "";

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  return answer;
}

chainToSwitch(7);

//XXX---XXX---XXX

//Returning Boolean Values from Functions.
function isLess(a, b) {
  return a < b;
}

isLess(10, 15);

//XXX---XXX---XXX

//Return Early Pattern for Functions in JS.

function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

//XXX---XXX---XXX

//Build JavaScript Objects.
const myDog = {
  name: "Tommy",
  legs: 4,
  tails: 1,
  friends: ["Jmaes", "Jhon"],
};

//XXX---XXX---XXX

//Accessing Object Properties with Dot Notation.
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

//XXX---XXX---XXX

//Accessing Object Properties with Bracket Notation.
const testObj2 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

const entreeValue = testObj2["an entree"];
const drinkValue = testObj2["the drink"];

//XXX---XXX---XXX

//Accessing Object Properties with Variables.
const testObj3 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

const playerNumber = 16;
const player = testObj3[playerNumber];

//XXX---XXX---XXX

//Updating Object Properties in JS.
const myDog2 = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog2["name"] = "Happy Coder";

//XXX---XXX---XXX

//Add New Properties to a JavaScript Object.
const myDog3 = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog3["bark"] = "woof";

//XXX---XXX---XXX

//Delete Properties from a JavaScript Object.
const myDog4 = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};

delete myDog4.tails;

//XXX---XXX---XXX

//Using objects for lookups in JS.
function phoneticLookup(val) {
  var result = "";
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  result = lookup[val];
  return result;
}

//XXX---XXX---XXX

//Testing Objects for Properties in JS.
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

//XXX---XXX---XXX

//Manipulating Complex Objects in JS.
const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Usaid",
    title: "Paperworks",
    release_year: 2011,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
];

//XXX---XXX---XXX

//Accessing Nested Objects in JS.
const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

const gloveBoxContents = myStorage.car.inside["glove box"];

//XXX---XXX---XXX

//Accessing Nested Arrays in JS.
const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const secondTree = myPlants[1].list[1];

//XXX---XXX---XXX

//Iterate with JavaScript While Loops.
const myArray = [];

let i2 = 5;
while (i2 >= 0) {
  myArray.push(i2);
  i2--;
}

//XXX---XXX---XXX

//Iterate with JavaScript For Loops.
const myArray2 = [];

for (let i = 1; i < 6; i++) {
  myArray2.push(i);
}

//XXX---XXX---XXX

//Iterate Odd Numbers With a For Loop
const myArray3 = [];

for (let i = 1; i < 10; i += 2) {
  myArray3.push(i);
}

//XXX---XXX---XXX

//Count Backwards With a For Loop

const myArray4 = [];

for (let i = 9; i > 0; i -= 2) {
  myArray4.push(i);
}

//XXX---XXX---XXX

//Iterate Through an Array with a For Loop.
const myArr = [2, 4, 5, 6, 3];

let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

//XXX---XXX---XXX