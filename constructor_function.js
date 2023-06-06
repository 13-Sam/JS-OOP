'use strict';
const Person = function (firstName, birthYear) {
  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
//Instance
const jonas = new Person('Jonas', 1999);
console.log(jonas);
//instanceof
console.log(jonas instanceof Person);
