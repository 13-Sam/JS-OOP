
//class expression
// const PersonCl = class {};

//Class Declearation
class PersonCl {
  constructor(fname, byear) {
    this.fname = fname;
    this.byear = byear;
  }
  calcAge() {
    console.log(2023 - this.byear);
  }

  greet() {
    console.log(`Hello ${this.fname}`);
  }
}

const sam = new PersonCl('sayed', 1999);
console.log(sam);
sam.calcAge();
sam.greet();
