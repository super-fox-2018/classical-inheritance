"use strict"
class Animal {
	constructor(num_legs,is_warm_bloded) {
		this.num_legs=num_legs;
		this.is_warm_bloded=is_warm_bloded;
	}
}


class Frog extends Animal  {
	constructor(num_legs,is_warm_bloded) {
		super(4,false);
		//this.skill=skill
	}
}

class Cat extends Animal {
	constructor(num_legs,is_warm_bloded) {
		super(3,false);
		//this.is_warm_bloded=true;
		
	}
}

class Horse extends Animal {
	constructor(num_legs,is_warm_bloded) {
		super(5,false);
		
		
	}
}


var frog=new Frog(4,true,"hydropump");
var cat= new Cat();
var horse=new Horse();
console.log(frog);
console.log(cat);
console.log(horse);