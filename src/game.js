import { END_GAME_MESSAGE_PREFIX, START_GAME_MESSAGE_PREFIX } from '../utils/constants.js';
import { createLogFile, logToFile } from '../utils/logging.js';

class Game {

    constructor(playerA, playerB) {
      this.playerA = playerA;
      this.playerB = playerB;
      this.id = Date.now();
      this.logFile = createLogFile(this.id);
    }
  
    start() {
      console.log("game started with id ", this.id);
      logToFile(this.logFile, START_GAME_MESSAGE_PREFIX+this.id);
      logToFile(this.logFile, `Player A: ${this.playerA.getHealth()} health`);
      logToFile(this.logFile, `Player B: ${this.playerB.getHealth()} health`);

      let attacker = this.playerA.getHealth() <= this.playerB.getHealth() ? this.playerA : this.playerB;
      let defender = attacker === this.playerA ? this.playerB : this.playerA;

      this.gameLoop(attacker, defender);

      const winner = this.playerA.isAlive() ? this.playerA.getName() : this.playerB.getName();
      logToFile(this.logFile, END_GAME_MESSAGE_PREFIX + winner);
      console.log("game ended..winner: ",winner);
    }

    gameLoop(attacker, defender){
      while (this.playerA.isAlive() && this.playerB.isAlive()) {
        this.executeTurn(attacker, defender);
  
        // Swap attacker and defender
        [attacker, defender] = [defender, attacker];
      }
    }
  
    executeTurn(attacker, defender) {
      const attackRoll = attacker.rollDice();
      const defenseRoll = defender.rollDice();
  
      const damageDealt = attacker.getAttack() * attackRoll - defender.getStrength() * defenseRoll;

      if(damageDealt>0){
        defender.setHealth(defender.getHealth() - damageDealt);

        logToFile(this.logFile, `${attacker.getName()} deals ${damageDealt} damage to ${defender.getName()}`);
        logToFile(this.logFile, `${defender.getName()} health is now ${defender.getHealth()}`);  

      } else {        
        logToFile(this.logFile, `${defender.getName()} successfully defended against ${attacker.getName()}`);
    }
    }
  }
  
 export default Game;
  