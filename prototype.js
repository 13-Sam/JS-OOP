'use strict';
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const jonas = new Person('Jonas', 1999);
console.log(jonas);
console.log(jonas instanceof Person);

//Prototype
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};
jonas.calcAge();

//Checking prototype
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));

//Create new object prototype
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species);

//Chekcing own property
//->species is not jonas's own propperty
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
