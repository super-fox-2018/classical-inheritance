"use strict"

class SuperPower {
  // constructor() {
  //
  // }
  use_laser_vision(){
    return "use laser vision";
  }
  be_invisible(){
    return "be be_invisible";
  }
}
class animals {
  constructor(object){
    this.num_length = object.num_length;
    this.habitat = object.habitat;
    this.superpower = new SuperPower();
  }

}
class Cat extends animals{
  constructor(object){
    super(object);
    this.spesies = object.spesies;
    this.meal = object.meal;
  }
}

class Chicken extends animals{
  constructor(object){
    super(object);
    this.spesies = object.spesies;
    this.meal = object.meal;
  }
}

class Snake extends animals{
  constructor(object){
    super(object);
    this.spesies = object.spesies;
    this.meal = object.meal;
  }
}

class Bird extends animals{
  constructor(object){
    super(object);
    this.spesies = object.spesies;
    this.meal = object.meal;
  }
}

class Lion extends animals{
  constructor(object){
    super(object);
    this.spesies = object.spesies;
    this.meal = object.meal;
  }
}

class Fish extends animals{
  constructor(object){
    super(object);
    this.spesies = object.spesies;
    this.meal = object.meal;
  }
}


var suPower = new SuperPower();
var animal = new animals({num_length:0,habitat:'hutan'});
var cat = new Cat({num_length:4,habitat:'darat',spesies:'kucing',meal:'omnivora'});
var chicken = new Chicken({num_length:2,habitat:'darat',spesies:'unggas',meal:'herbivora'});
var snake = new Snake({num_length:0,habitat:'darat',spesies:'hewan melata',meal:'okarnivora'});
var bird = new Bird({num_length:2,habitat:'udara',spesies:'uanggas',meal:'herbifora'});
var lion = new Lion({num_length:4,habitat:'darat',spesies:'kucing',meal:'karnivora'});
var fish = new Fish({num_length:0,habitat:'laut',spesies:'ikan',meal:'omnivora'});

console.log(cat);
console.log(chicken);
console.log(snake);
console.log(snake.superpower.be_invisible());
console.log(bird);
console.log(lion);
console.log(lion.superpower.use_laser_vision());
console.log(fish);
