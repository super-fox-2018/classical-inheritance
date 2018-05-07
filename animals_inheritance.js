'use strict'

class Animal {
  constructor(name, numLegs, isWarmBlooded, methodOfMoving) {
    this.name = name;
    this.numLegs = numLegs;
    this.isWarmBlooded = isWarmBlooded;
    this.methodOfMoving = methodOfMoving;
    this.superpower = new SuperPower();
  }

  move() {
    return `${this.name} is ${this.methodOfMoving} now`;
  }
}

class Frog extends Animal {
  constructor(name, numLegs, isWarmBlooded, methodOfMoving, isPoisonous) {
    super(name, numLegs, isWarmBlooded, methodOfMoving);
    this.isPoisonous = isPoisonous;
  }
}

class Fox extends Animal {
  constructor(name, numLegs, isWarmBlooded, methodOfMoving, isEvil) {
    super(name, numLegs, isWarmBlooded, methodOfMoving);
    this.isEvil = isEvil;
  }
}

class Chimps extends Animal {
  constructor(name, numLegs, isWarmBlooded, methodOfMoving, isSmart) {
    super(name, numLegs, isWarmBlooded, methodOfMoving);
    this.isSmart = isSmart;
  }
}

class Bat extends Animal {
  constructor(name, numLegs, isWarmBlooded, methodOfMoving, sleepAtNight) {
    super(name, numLegs, isWarmBlooded, methodOfMoving);
    this.sleepAtNight = sleepAtNight;
  }
}

class SuperPower {
  constructor() {
  	this.superpower = 'none';
  }

  useLaserVision() {
    this.superpower = 'can use laser vision like Superman';
  }

  beInvisible() {
    this.superpower = 'can be as invisible as Drax';
  }

  becomeMetal() {
  	this.superpower = 'whole body become metal like Collosus';
  }

  mysticPower() {
  	this.superpower = 'can use mystic power like Dr. Strange';
  }
}

var superpower = new SuperPower();

var frog = new Frog('Frog', 4, true, 'jumping', false);
var fox = new Fox('Fox', 4, true, 'walking', true);
var chimps = new Chimps('Chimps', 2, true, 'walking', true);
var bat = new Bat('Bat', 2, true, 'flying', false);

frog.superpower.useLaserVision(); // give the frog laser vision
fox.superpower.becomeMetal(); // give the fox become metal super power
chimps.superpower.mysticPower(); // give the chimps mystic power knowledge
bat.superpower.beInvisible(); // give the bat ability to become invisible

console.log(frog);
console.log(fox);
console.log(chimps);
console.log(bat);
