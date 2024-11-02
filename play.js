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

console.log(summarizeUser(myName, myAge, likesCoding));
