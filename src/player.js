import {MAX_DICE_VALUE, DEFAULT_PLAYER_NAME, DEFAULT_PLAYER_HEALTH, DEFAULT_PLAYER_ATTACK, DEFAULT_PLAYER_STRENGTH, PLAYER_MIN_HEALTH} from "../utils/constants.js";


class Player{

    #name;
    #health;
    #strength;
    #attack;

    //setting attributes as private, for encapsulation

    constructor(name=DEFAULT_PLAYER_NAME, health=DEFAULT_PLAYER_HEALTH, attack=DEFAULT_PLAYER_ATTACK, strength=DEFAULT_PLAYER_STRENGTH){
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
        if (health < PLAYER_MIN_HEALTH) {
            this.#health = PLAYER_MIN_HEALTH;
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
        return Math.floor(Math.random() * MAX_DICE_VALUE) + 1;
    }
}

export default Player;
