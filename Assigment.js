//All the Assigments :

//Assignment on Routine
function myRoutine(
  name,
  time1,
  work,
  time2,
  meal1,
  time3,
  sport,
  time4,
  meal2,
  time5
) {
  return (
    "My Name is " +
    name +
    " I wake up at " +
    time1 +
    " and get ready for " +
    work +
    " I get home at " +
    time2 +
    " and eat my " +
    meal1 +
    " after that i take a nap and wake up at" +
    time3 +
    " Later on, I play " +
    sport +
    " and return at " +
    time4 +
    " ,I eat " +
    meal2 +
    " and sleep at " +
    time5
  );
}
const routine = myRoutine(
  "Afkham",
  "6:30",
  "School",
  "2:00",
  "Lunch",
  "5:00",
  "Football",
  "7:30",
  "Dinner",
  "10:00"
);
console.log(routine);
//XXX---XXX---XXX

//palindrome in JS.

function palindromeChecker(word) {
  for (let i = word.length - 1; i >= 0; i--) {
    if (word[i] == word[word.length - 1 - i]) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(palindromeChecker("dad"));

//XXX---XXX---XXX

//Array Checker in JS
function arrayChecker(arr) {
  if (Array.isArray(arr)) {
    console.log("Yes, This is an array");
  } else {
    console.log("No, This is not an array");
  }
}

arrayChecker([1, 2, 3]);

//XXX---XXX---XXX

//Email & Password Assignment.

let email = "umair@gmail.com";
let password = 127;
let userEmail = prompt("Enter your email.", "umair@gmail.com");
let userpassword = +prompt("Enter your password", 127);

if (email === userEmail) {
  if (password === userpassword) alert("Welcome to my website.");
  else alert("Pls enter your correct password.");
} else {
  alert("Pls enter your correct email.");
}
//XXX---XXX---XXX

/* Write a JavaScript function to get n first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2],3));
Output :
[7, 9, 0]*/

function first(arr, n) {
  return arr.splice(0, n);
}

console.log(first([7, 9, 0, -2], 3));

//XXX---XXX---XXX

//Most Frequent Item in JS.

function mostFrequent(arr) {
  let frequency = {};
  let maxCount = 0;
  let mostFrequentItem = null;

  // Count the frequency of each item
  for (let item of arr) {
    if (frequency[item] === undefined) {
      frequency[item] = 1; // Initialize count
      console.log(frequency);
    } else {
      frequency[item]++; // Increment count
    }

    // Update the most frequent item
    if (frequency[item] > maxCount) {
      maxCount = frequency[item];
      mostFrequentItem = item;
    }
  }
  return `${mostFrequentItem} (${maxCount} times)`; //Returning
}

let arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
console.log(mostFrequent(arr1));

function Swapper(string) {
  let emptyArray = [];
  let splitArray = string.split("");

  for (let i = 0; i < splitArray.length; i++) {
    if (splitArray[i] == splitArray[i].toUpperCase()) {
      emptyArray.push(splitArray[i].toLowerCase());
    } else {
      emptyArray.push(splitArray[i].toUpperCase());
    }
  }
  // return emptyArray.join("")
  console.log(emptyArray.toString());
}

//XXX---XXX---XXX

//Case Checker in JS.

function caseChecker(val) {
  let isUpperCase = false;
  let array = val.split("");

  for (let item of array) {
    item == item.toUpperCase() ? (isUpperCase = true) : "";
  }
  isUpperCase
    ? console.log("Yes the provided condition is true")
    : console.log("Provided condition is false");
}

console.log(caseChecker(""));

//XXX---XXX---XXX

//Eligible for driving checker in JS.

function ageChecker(func) {
  func("afkham", 20);
}

function passToChecker(name, age) {
  age >= 18
    ? `Yes , ${name} are eligeble for driving`
    : `No ${name} Go watch Cartoon`;
}

ageChecker(passToChecker);

//XXX---XXX---XXX

/* Question 1: Array Destructuring with Rest Given the array below, write code to:
Assign the first two elements to a and b.Collect the remaining elements into a variable rest.
const numbers = [1, 2, 3, 4, 5]; Expected output: a = 1 b = 2 rest = [3, 4, 5] */

const numbers = [1, 2, 3, 4, 5];
const [a, b, ...rest] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

//XXX---XXX---XXX

/*Question 2: Object Destructuring with Default Values Given the object, write code to: 
Extract name and age properties. Provide a default value of "Unknown" for city.
const person = { name: "Ali", age: 25 }; Expected output: name = "Ali" age = 25 city = "Unknown" */
const person = { name: "Ali", age: 25 };
const { name, age, city = "Unknown" } = person;
console.log(name); // "Ali"
console.log(age); // 25
console.log(city); // "Unknown"

//XXX---XXX---XXX

/* Question 3: Nested Destructuring Extract the values street and zip from the nested object:
const address = {
  city: "Karachi",
  details: {
    street: "Main Road",
    zip: "74000",
  },
}; 
Expected output: street = "Main Road" zip = "74000" */

const address = {
  city: "Karachi",
  details: {
    street: "Main Road",
    zip: "74000",
  },
};

const {
  city: {
    details: { street, zip },
  },
} = info;
console.log(street); // "Main Road"
console.log(zip); // "74000"

//XXX---XXX---XXX

/* Question 4: Function Parameters with Destructuring and Rest 
Write a function introduce that takes an object as an argument. The object has the properties name, age, and hobbies.
Use destructuring to: Extract name and age. Collect all remaining properties into a rest variable.
const person = { name: "Sara", age: 22, hobbies: ["reading", "cycling"], city: "Lahore" };
introduce(person);
Expected output (inside the function): name = "Sara" age = 22 rest = { hobbies: ["reading", "cycling"], city: "Lahore" } */

const person2 = {
  name: "Sara",
  age: 22,
  hobbies: ["reading", "cycling"],
  city: "Lahore",
};

function introduce({ name, age, ...rest }) {
  console.log(name); // "Sara"
  console.log(age); // 22
  console.log(rest); // { hobbies: ["reading", "cycling"], city: "Lahore"}
}

introduce(person2);

//XXX---XXX---XXX

/* Question 5: Destructuring with Default and Rest in Arrays Write code to:
Extract the first two elements from the array into variables x and y. 
Use a default value of 0 if the third element is missing. Collect any remaining elements into a rest variable.
const arr = [10, 20];
Expected output: x = 10 y = 20 z = 0 rest = [] */
const arr = [10, 20];
const [x, y, z = 0, ...rest2] = arr;
console.log(x); // 10
console.log(y); // 20
console.log(z); // 0
console.log(rest2); //[]

//XXX---XXX---XXX

//White Spacees remover from string in JS.

const obj = {
    name: "    Usaid   ",
    formatter () {
      if (this.name.includes(" ")) {
        this.name = this.name.trim();
        console.log(this.name);
      }
    },
  };
  obj.formatter();
