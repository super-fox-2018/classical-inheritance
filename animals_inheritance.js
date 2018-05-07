"use strict"

class Animal {
  constructor(name, numOfLegs, isWarmBlooded) {
    this.name = name;
    this.numOfLegs = numOfLegs;
    this.isWarmBlooded = isWarmBlooded;
    this.superpower = new SuperPower();
  }
}

class cat extends Animal {
  constructor(name) {
    super(name, 4, true);
  }
}
class dog extends Animal {
  constructor(name) {
    super(name, 4, true);
  }
}
class Chimpanzee extends Animal {
  constructor(name) {
    super(name, 4, true);
  }
}
class Fox extends Animal {
  constructor(name) {
    super(name, 4, true);
  }
}
class Fish extends Animal {
  constructor(name) {
    super(name, 0, true);
  }

}

class SuperPower {
  constructor() {}

  use_laser_vision() {
    console.log('mata laser jeng jeng jeng.....');
  }
  become_invisible() {
    console.log('tangkap kalau bisa !!!!');
  }
}

const IkanCupangGombres = new Fish('IkanCupangGombres');


IkanCupangGombres.superpower.become_invisible();
