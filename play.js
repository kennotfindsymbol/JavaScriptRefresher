// run "node play.js" in terminal

// var is outdated, use let or const, use const to state a variable does not change
const myName = "Ken";
let myAge = 21;
const likesCoding = true;

// myName = "Kenneth" // This gives error
myAge = 30;

function summarizeUser(userName, userAge, userLikesCoding) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and they likes coding: " +
    userLikesCoding
  );
}

// store an anonymous function in a named const
const summarizeUserAnonymous = function (userName, userAge, userLikesCoding) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and they likes coding: " +
    userLikesCoding
  );
};

// arrow function, "this" keyword depends on function scope
const summarizeUserArrow = (userName, userAge, userLikesCoding) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and they likes coding: " +
    userLikesCoding
  );
};

const addWithReturn = (a, b) => {
  return a + b;
};

const addWithoutReturn = (a, b) => a + b;

const addNoArgument = () => 3 + 4;

console.log(summarizeUser(myName, myAge, likesCoding));
console.log(summarizeUserAnonymous(myName, myAge, likesCoding));
console.log(summarizeUserArrow(myName, myAge, likesCoding));

console.log(addWithReturn(1, 2));
console.log(addWithoutReturn(1, 2));
console.log(addNoArgument());

// an object
const person = {
  name: "Ken",
  age: 21,
  greetNormal() {
    console.log("Hi, I am " + this.name + ". I am " + this.age + " years old.");
  },
  // gives "Hi I am underfined" because "this" refers to global scope
  greetArrow: () => {
    console.log("Hi, I am " + this.name + ". I am " + this.age + " years old.");
  },
};

person.greetNormal();
person.greetArrow();

const hobbies = ["Sports", "Coding", "Cooking"];
// for...in outputs key
for (let hobby in hobbies) {
  console.log(hobby);
}
// for...of outputs value
for (let hobby of hobbies) {
  console.log(hobby);
}
console.log(hobbies);
console.log(hobbies.map((hobby) => "Hobby: " + hobby));
