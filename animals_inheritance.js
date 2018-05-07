"use strict"

class Animal{
    constructor(animalProperties){
        this.legsNumber = animalProperties.legsNumber
        this.isWarmBlooded = animalProperties.isWarmBlooded
        this.Name = animalProperties.Name
        this.SupaPowa = new SupaPowa()
    }

}

class Godzilla extends Animal{
    constructor(animalProperties){
        super(animalProperties)
        this.hotness = animalProperties.hotness
    }
}

class SupaPowa {
    constructor(){
        
    }
    useLaserVision(){
        console.log('lalalallalallalalalala')
    }
    flyLikeARetard(){
        console.log('bewewealjalsfhdalds')
    }
    beSupaHot(){
        console.log('OOOOOOOH YEAAAAAAAAAH')
    }
}

let Bob = new Godzilla({
    Name : 'Bob',
    legsNumber : 500,
    isWarmBlooded : 'OF COURSE',
    hotness : 'SUPA HOT',
})

Bob.SupaPowa.beSupaHot()