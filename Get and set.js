//Get and set
const account = {
  owner: 'sayed',
  movements: [10, 15, 20, 30, 40],

  //Get
  get latest() {
    return this.movements.slice(-1).pop();
  },
  //Set
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
console.log((account.latest = 50));