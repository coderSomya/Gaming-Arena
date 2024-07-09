import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Game {
    constructor(playerA, playerB) {
      this.playerA = playerA;
      this.playerB = playerB;
      this.id = Date.now();
      this.logFile = this.createLogFile();
    }

    createLogFile() {
        const recordsDir = path.join(__dirname, '../records');
        if (!fs.existsSync(recordsDir)) {
          fs.mkdirSync(recordsDir, { recursive: true });
        }
        const logFileName = `game_${this.id}.log`;
        const logFilePath = path.join(recordsDir, logFileName);
        fs.writeFileSync(logFilePath, 'Game Log\n');
        return logFilePath;
      }
    
      logToFile(message) {
        fs.appendFileSync(this.logFile, `${message}\n`);
      }
  
    start() {
      console.log("game started");
      this.logToFile(`Game started between ${this.playerA.getName()} and ${this.playerB.getName()}`);
      let attacker = this.playerA.getHealth() <= this.playerB.getHealth() ? this.playerA : this.playerB;
      let defender = attacker === this.playerA ? this.playerB : this.playerA;
  
      while (this.playerA.isAlive() && this.playerB.isAlive()) {
        this.executeTurn(attacker, defender);
  
        // Swap attacker and defender
        [attacker, defender] = [defender, attacker];
      }

      this.logToFile(`Game Over! Winner: ${this.playerA.isAlive() ? this.playerA.getName() : this.playerB.getName()}`);
      console.log("game ended..winner: ",this.playerA.isAlive() ? this.playerA.getName() : this.playerB.getName())
    }
  
    executeTurn(attacker, defender) {
      const attackRoll = attacker.rollDice();
      const defenseRoll = defender.rollDice();
  
      const damageDealt = attacker.getAttack() * attackRoll - defender.getStrength() * defenseRoll;
      if (damageDealt > 0) {
        defender.setHealth(defender.getHealth() - damageDealt);
        this.logToFile(`${attacker.getName()} deals ${damageDealt} damage to ${defender.getName()}`);
        this.logToFile(`${defender.getName()} health is now ${defender.getHealth()}`);    
      } else {
        this.logToFile(`${defender.getName()} successfully defended against ${attacker.getName()}`);
    }
    }
  }
  
 export default Game;
  