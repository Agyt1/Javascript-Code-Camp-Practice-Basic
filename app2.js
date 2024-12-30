//
let func = (name, age) => ({
  name: name,//It will not mix keys with params.
  age: age,
});

console.log(func("Usaid", 13));

//

let func2 = (name, age) => ({
  name, //It will use params as key.
  age,
});

console.log(func2("Usaid", 13)); 