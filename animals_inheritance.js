"use strict"

class SuperPower {
  use_laser_vision() {
   console.log('Biiippppppppppp'); 
  }

  be_invisible() {
    console.log('zzzzzzzzzzz');
  }  
}

class Animal {
  constructor(name, numOfLegs, isWarmBlooded) {
    this.name = name;
    this.numOfLegs =  numOfLegs;
    this.isWarmBlooded = isWarmBlooded;
    this.superpower = new SuperPower();
  }
}

class Eagle extends Animal {
  constructor(name) {
    super(name, 2, true);
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name, 2, true);
  }
}

class Elephant extends Animal {
  constructor(name) {
    super(name, 4, true);
  }
}

class Crocodile extends Animal {
  constructor(name) {
    super(name, 5, false);
  }
}

const aslan = new Lion('Aslan');
const croboBoy = new Crocodile('Croco Boy');

aslan.superpower.use_laser_vision(); 