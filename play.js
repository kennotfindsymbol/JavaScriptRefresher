// run "node play.js" in terminal

var myName = "Ken";
var myAge = 21;
var likesCoding = true;

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
