"use strict"


class Animal {

    constructor (haveEyes, canMove, consumeO2) {
        
        this._haveEyes = haveEyes
        this._canMove = canMove
        this._consumeO2 = consumeO2
        this.superPower = new SuperPower ()

    }

    get haveEyes () {
        return this._haveEyes
    }

    get canMove () {
        return this._canMove
    }

    get consumeO2 () {
        return this._consumeO2
    }

}

class Chicken extends Animal {

    constructor (haveEyes, canMove, consumeO2, hasWings) {
        super(haveEyes, canMove, consumeO2)
        this._hasWings = hasWings
    }

    get hasWings () {
        return this._hasWings
    }
}

class Wolves extends Animal {

    constructor (haveEyes, canMove, consumeO2, hasLegs) {
        super(haveEyes, canMove, consumeO2)
        this._hasLegs = hasLegs
    }

    get hasWings () {
        return this._hasLegs
    }
}

class SuperPower {

    constructor () {
        
    }

    laser_battery() {
        return ('Pew pew pew')
    }

    wind_walk() {
        return ('....')
    }

    demolition() {
        return ('ka-boom!!!')
    }

}

let animal = new Animal ()

let chicken = new Chicken ()

let wolves = new Wolves ()

wolves._canMove=true
wolves._consumeO2=true

console.log(wolves)
console.log('I m firing mah lazeeerr ' + wolves.superPower.laser_battery())
console.log('Vanishing Chicken' + chicken.superPower.wind_walk())

