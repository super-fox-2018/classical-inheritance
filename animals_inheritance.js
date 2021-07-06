"use strict"

class SuperPower {
  use_laser_vision() {
   console.log('Biiippppppppppp'); 
  }

  be_invisible() {
    console.log('zzzzzzzzzzz');
  }

  spitFire() {
    console.log('Fuaaayhaaa Oooonn');
  }

  becomeStone() {
    console.log('grkgrkgrkgrk');
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
  constructor(name, featherColor) {
    super(name, 2, true);
    this.featherColor = featherColor;
  }
}

class Lion extends Animal {
  constructor(name, furColor) {
    super(name, 2, true);
    this.furColor = furColor;
  }
}

class Elephant extends Animal {
  constructor(name, skinColor) {
    super(name, 4, true);
    this.skinColor = skinColor;
  }
}

class Crocodile extends Animal {
  constructor(name, skinColor) {
    super(name, 5, false);
    this.skinColor = this.skinColor;
  }
}

const kratos = new Eagle('Kratos', 'White');
const aslan = new Lion('Aslan', 'Gold');
const itebe = new Elephant('Itebe', 'Blue');
const crocoBoy = new Crocodile('Croco Boy', 'Green');

kratos.superpower.becomeStone();
aslan.superpower.use_laser_vision(); 
itebe.superpower.spitFire();
crocoBoy.superpower.be_invisible();