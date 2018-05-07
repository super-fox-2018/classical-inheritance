"use strict"

class Animals{
    constructor (name, speak, num_legs=2){ // klu misal nggak isi dia bakal otomatis diisi 2
        this._name = name
        this._speak = speak
        this._num_legs = num_legs // nah ini bisa dignti" susuai input
    }
}

class Dog extends Animals{
    constructor(name, speak, num_legs, is_warm_blood){
        super(name, speak, num_legs)
        this.is_warm_blood = is_warm_blood
    }
}

class Chicken extends Animals{
    constructor(name, speak, num_legs, is_warm_blood){
        super(name, speak, num_legs)
        this.is_warm_blood = is_warm_blood
    }
}

class Cat extends Animals{
    constructor(name, speak, num_legs, is_warm_blood){
        super(name, speak, num_legs)
        this.is_warm_blood = is_warm_blood
    }
}

class Dinosour extends Animals{
    constructor(name, speak, num_legs, is_warm_blood){
        super(name, speak, num_legs)
        this.is_warm_blood = is_warm_blood
        this.superpower=new SuperPower() // buat connect ke SuperPower
    }
}

class SuperPower { 
    power (){
        console.log("aaarrrgghhhhaarrrgghhh")
    }
}

var callAnimals = new Animals('Fox', 'uuhh')
console.log(callAnimals)

var callDog = new Dog('Niko', 'Gukguk', 4 ,'No')
console.log(callDog)

var callDinosour = new Dinosour('TRex', 'aarrgghh', 4 ,'No')
// console.log(callDinosour)
callDinosour.superpower.power() // panggil yg di SuperPower