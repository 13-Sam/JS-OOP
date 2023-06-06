//Coding Challange
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
console.log(bmw);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed}km/h`);
};
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed}km/h`);
};
bmw.accelerate();
bmw.break();
bmw.accelerate();
bmw.accelerate();
bmw.break();
bmw.accelerate();
