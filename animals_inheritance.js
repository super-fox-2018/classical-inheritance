"use strict"
class Animal{
	constructor(legs,blood){
		this.num_legs = legs
		this.is_warm_blooded = blood
	}
}
class Frog extends Animal {
	constructor(){
		super(4,false)
		this.num_legs = 4
		this.is_warm_blooded = false
	}
}
class Bat extends Animal{
	constructor(){
		super(4,true)
		this.num_legs = 2
		this.is_warm_blooded = true
	}
}
class Chimpanzee extends Animal{
	constructor(){
		super(4,true)
		this.num_legs = 2
		this.is_warm_blooded = true
	}
}
class Fox extends Animal{
	constructor(){
		super(4,true)
		this.num_legs = 4
		this.is_warm_blooded = true
	}
}
class Chicken extends Animal{
	constructor(){
		super(4,true)
		this.num_legs = 2
		this.is_warm_blooded = true
	}
}

var animal = new Animal(4,true)
let frog = new Frog()
let bat = new Bat()
let fox = new Fox()
let chincke = new Chicken()
console.log(frog);
console.log(chincke);
console.log(bat);
console.log(fox);
//console.log(animal);
