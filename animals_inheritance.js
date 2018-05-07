"use strict"
class Animals{
    constructor(object){
        this._spesies = object.spesies;
        this._habitat = object.habitat;
        this._numLeg = 4; 
    }

}

class Frog extends Animals{
    constructor(object){
        super(object)
        this._food = object.food;
    }
}

class Bat extends Animals{
    constructor(object){
        super(object)
        this._numLeg = 2;
        this._food = object.food;
        this.superPower = new SuperPower
    }
}

class Chimpanzee extends Animals{
    constructor(object){
        super(object)
        this._food = object.food;
        this.superPower = new SuperPower
    }
}

class Fox extends Animals{
    constructor(object){
        super(object)
        this._food = object.food;
        this.superPower = new SuperPower
    }
}

class Chicken extends Animals{
    constructor(object){
        super(object)
        this._numLeg = 2;
        this._food = object.food;
    }
}

class SuperPower {
    use_laser_vision(){
        console.log('i use my laser vision')
    }

    be_invisible(){
        console.log('can you see me !!! hahaha')
    }
}




var animals = new Animals({spesies :'bukan manusia', habitat: 'bumi'});
var frog = new Frog ({spesies :'amphibi', habitat: 'sungai', food:'serangga'} )
var bat = new Bat ({spesies :'mamalia', habitat: 'goa', food:'buah-buah'} )
var chimpanzee = new Chimpanzee ({spesies :'primata', habitat: 'pohon', food:'buah-buahan'})
var fox = new Fox ({spesies :'mamalia', habitat: 'hutan', food:'daging'})
var chicken = new Chicken ({spesies :'unggas', habitat: 'hutan', food:'biji-bijian'})


animals._numLeg = 4;



console.log(animals);
console.log(frog);
console.log(bat)
console.log(chimpanzee);
console.log(fox);
console.log(chicken);

console.log(bat.superPower.be_invisible());
console.log(fox.superPower.use_laser_vision());
