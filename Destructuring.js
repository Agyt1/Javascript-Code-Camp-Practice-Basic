//Destructuring in Nested Objects.
const nestedObject = {
  level1: {
    property1: "Level 1 Property",
    level2: {
      property2: "Level 2 Property",
      level3: { property3: " Property" },
    },
  },
};

let {
  level1: {
    level2: {
      level3: { property3: Afkham },
    },
  },
} = nestedObject;
console.log(Afkham);

//XXX---XXX---XXX

//Destructuring in Nested Array.

const nestedArray = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];
let [, [, [, , c]]] = nestedArray; //Each comma represents an element.
console.log(c);

//XXX---XXX---XXX

//Destructuring in Arrow function.(Method 1)

let func = (object) => {
  let { name, age, email } = object;
  console.log(name, age, email);
};

func({ name: "Afkham", age: 13, email: "a@gmail.com" });

//XXX---XXX---XXX

//Destructuring in Arrow function.(Method 2)

let func2 = ({ name, age, email }) => {
  console.log(name, age, email);
};

let obj = {
  name: "Afkham",
  age: 13,
  email: "captain",
};

func2(obj);

//XXX---XXX---XXX

//Example for appplication of destructuring.

let func3 = ({ id, pass, email }) => {
  console.log(`Hello! ${email} , Your ID is ${id}`);
};

let obj2 = {
  id: 123,
  pass: 123,
  email: "b@gmail.com",
};

func3(obj2);

//XXX---XXX---XXX
