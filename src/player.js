class Player{

    #name;
    #health;
    #strength;
    #attack;

    //setting attributes as private, for encapusulation

    constructor(name="player", health=0, attack=0, strength=0){
        //initialize attributes
        this.#name = name;
        this.#health = health;
        this.#attack = attack;
        this.#strength = strength;
    }

    //define getters and setter
    getName() {
        return this.#name;
    }
    
    getHealth() {
        return this.#health;
    }

    setHealth(health) {
        if (health < 0) {
            this.#health = 0;
        } else {
            this.#health = health;
        }
    }

    getAttack() {
        return this.#attack;
    }

    getStrength() {
        return this.#strength;
    }

    isAlive() {
        return this.#health > 0;
    }
    
    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }
}

export default Player;
