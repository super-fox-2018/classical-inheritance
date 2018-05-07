"use strict"

class SuperPower {
  // constructor() {
  //
  //
  // }
  use_laser_vision() {
    return 'The"re Killed'
  }
  be_invisible() {
    return ' has been hidden'
  }


}


class Animals {
  constructor(name, leg) {
    this.name = name
    this.leg = leg
    this.SuperPower = new SuperPower();
  }



}


class Frog extends Animals {
  constructor(name, leg, habitat) {
    super(name, leg);
    this.habit = habitat

  }


}

class Chicken extends Animals {
  constructor(name, leg, habitat) {
    super(name, leg)
    this.habit = habitat

  }


}

class Dog extends Animals {
  constructor(name, leg, habitat) {
    super(name, leg)
    this.habit = habitat

  }


}

class Cat extends Animals {
  constructor(name, leg, habitat) {
    super(name, leg)
    this.habit = habitat
  }


}


var kucing = new Cat('Katkit', 4, 'Darat');
console.log(kucing)
console.log(kucing.SuperPower.use_laser_vision())
