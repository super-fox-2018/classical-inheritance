"use strict"
class SuperPower{
  constructor(){
  }

  use_laser_vision(){
    console.log("PEW PEW PEW");
  }

  be_invisible(){
    console.log("Now you see me, now you- ");
  }
}
class Animals {
  constructor(numLegs, bloodType){
    this._legs = numLegs;
    this._blood = bloodType;
    this.superpower = new SuperPower();
  }

  get blood(){
    return this._blood;
  }
  get legs(){
    return this._legs;
  }

  set blood(value){
    this._blood = value;
  }

  set legs(value){
    this._legs = value;
  }
}

class Frog extends Animals{
  constructor(numLegs = 4, bloodType = "cold"){
    super(numLegs, bloodType);
  }
}

class Bat extends Animals{
  constructor(numLegs = 2, bloodType = "hot"){
    super(numLegs, bloodType);
  }
}
class Chimpanzee extends Animals{
  constructor(numLegs = 2, bloodType = "hot"){
    super(numLegs, bloodType);
  }
}
class Fox extends Animals{
  constructor(numLegs = 4, bloodType = "hot"){
    super(numLegs, bloodType);
  }
}

class Chicken extends Animals{
  constructor(numLegs = 2, bloodType = "hot"){
    super(numLegs, bloodType);
  }
}



var chicken = new Chicken();
var chimpanzee = new Chimpanzee();
var fox = new Fox();
var bat = new Bat();
var frog = new Frog();
var animals = new Animals();

console.log(frog.superpower.use_laser_vision());
