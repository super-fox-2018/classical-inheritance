"use strict"

class SuperPower{
    // constructor(name, num_legs){
    //     this.name = name;
    //     this.num_legs = num_legs;
    // }
    user_laser_vision(){
        return "can be laser vision";
    }
    be_invisible(){
        return "can be Invisible";
    }
}

class Animal{
    constructor(name, num_legs, isWarm){
        this.name = name
        this.num_legs = num_legs;
        this.isWarm_blooded = isWarm
        this.superPower = new SuperPower();
    }
}

class Frog extends Animal{
    constructor(name, isWarm){
        super(name, 2, isWarm)
    }
}

class Bat extends Animal{
    constructor(name, isWarm){
        super(name, 0, isWarm)
    }
}

class Fox extends Animal{
    constructor(name, isWarm){
        super(name, 4, isWarm)
    }
}

let myAnimal = new Animal('cuplis', 2, true);
let kodok = new Frog('MakLampir', true);

let fox = new Fox('Super Fox', true);
console.log(kodok);
console.log (fox);
console.log(fox.superPower.user_laser_vision());

console.log(kodok.superPower.be_invisible());

