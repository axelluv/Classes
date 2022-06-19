class Character {
    constructor(name, type, health, level, attack, defence) {
        this.name = name
        this.type = type
        this.health = 100
        this.level = 1

        if (!typeof(this.name) === String) {
            throw new Error('Error')
        }
        if (!typeof(this.type) === String) {
            throw new Error('Error')
        }
        // if (this.health < 0) {
        //     this.levelUp()
        // } else {
        //     throw new Error('Нельзя повысить левел умершего')
        // }

        // if ( this.health >= 0) {
        //     this.damage(points)
        // }
    }

    levelUp() {
        this.level++
        (this.attack * 20) / 100
        (this.defence * 20) / 100
        health = 100
    }

    damage(points) {
        this.health -= points * (1 - defence / 100)
    }
}

class Bowman extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence)
        this.attack = 25
        this.defence = 25
    }
}

class Swordsman extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence)
        this.attack = 40
        this.defence = 10
    }
}

class Magician extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence)
        this.attack = 10
        this.defence = 40
    }
}

class Undead extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence)
        this.attack = 25
        this.defence = 25
    }
}

class Zombie extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence)
        this.attack = 40
        this.defence = 10
    }
}

class Daemon extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence)
        this.attack = 10
        this.defence = 40
    }
}