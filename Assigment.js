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
































