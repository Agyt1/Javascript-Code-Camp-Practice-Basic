//Call Back Function (Simple).
function callBack (funct) {
    funct("Umair","Noman","Asad","Usaid");
}

function passToCallBack (name1, name2, name3, name4) {
    let any = console.log(`My team includes ${name1} , ${name2} , ${name3} & I excluded ${name4}`);
}
callBack(passToCallBack);

//XXX---XXX---XXX

//Call Back Function (Arrow).
let Arrow = (funct) => funct("Asad","Usaid");
Arrow((name1,name2) => console.log(`I have ${name1} in my time and ${name2} have been kicked out`)); 

//XXX---XXX---XXX

//Syntatic Sugar = A Syntax which makes a line of code lesser & more readable