"use strict"
class Animal {
  constructor(num_legs,isWaramBlooded) {
    this.num_legs = num_legs
    this.isWaramBlooded = isWaramBlooded
  }
}

class Frog extends Animal {
  constructor(num_legs,isWaramBlooded) {
    super(4,false)
  }
}

class Bat extends Animal {
  constructor(num_legs,isWaramBlooded) {
    super(2,true)
  }
}

class Chimpanze extends Animal{
  constructor(num_legs,isWaramBlooded) {
    super(4,true)
  }
}

class Chicken extends Animal{
  constructor(num_legs,isWaramBlooded) {
    super(2,true)
  }
}

class superPower {

  use_laser_vision(){
    console.log('you cant see me');
  }
}


let animal =new Animal(4,true)
let chicken = new Chicken
let bat = new Bat()
console.log(bat);
bat.superPower.use_laser_vision()
