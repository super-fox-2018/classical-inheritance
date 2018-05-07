"use strict"

class Animal {
  constructor(name,legs,bloodtype,diet){
    this.name = name;
    this.numlegs = legs;
    this.bloodtype = bloodtype;
    this.diet = diet
    this.superPower = new SuperPower
  }
}

// const newAnimal = new Animal('bird',2,'warm', 'omnivore')
// console.log(newAnimal);

class Frog extends Animal {
  constructor(name,legs,bloodtype,diet,lifeExpectancy){
    super(name,legs,bloodtype,diet);
    this.expectedAge = lifeExpectancy;
  }
get expectedLife(){
    return this.expectedAge;
  }
}
class Bat extends Animal {
  constructor(name,legs,bloodtype,diet,ebola){
    super(name,legs,bloodtype,diet);
    this.ebola = ebola
  }
get ebolaOrNot(){
    return this.ebola;
  }
}
class Chimpanzee extends Animal {
  constructor(name,legs,bloodtype,diet,intel){
    super(name,legs,bloodtype,diet);
    this.intel = intel
  }
get expectedIntel(){
    return this.intel;
  }
}
class Fox extends Animal {
  constructor(name,legs,bloodtype,diet,lifeExpectancy){
    super(name,legs,bloodtype,diet);
    this.expectedAge = lifeExpectancy;
  }
get expectedLife(){
    return this.expectedAge;
  }
}
class Chicken extends Animal {
  constructor(name,legs,bloodtype,diet,fly){
    super(name,legs,bloodtype,diet);
    this.canfly = fly;
  }
get expectedLife(){
    return this.canfly;
  }
}

class SuperPower {
  constructor(){
  }

  use_laser_vision(){
    return  'shooting lazers'
  }
  become_invisible(){
    return 'can be naked while still undetected'
  }
  blink(){
    return 'can become antimage'
  }

}



const frog = new Frog('name',3,'cold blood','carnivore','10 yeards')
console.log(frog)

const fox = new Fox ('fox',4,'warm blooded', 'carnivore', 'boom')
console.log(fox)

const chimpanzee = new Chimpanzee ('monkey', 2, 'war blooded', 'omnivore', '100iq')
console.log(chimpanzee)

const chicken = new Chicken ('chicken',2,'warm blooded', 'omnivore', 'sometimes')
console.log(chicken)

const bat = new Bat ('almost bird', 2 , 'warm blooded', 'omnivore', 'can carry ebola')
console.log(bat.superPower.become_invisible())




// console.log(frog);
// console.log(fox);
// console.log(chimps);
// console.log(bat);
