class Game {
    constructor(playerA, playerB) {
      this.playerA = playerA;
      this.playerB = playerB;
    }
  
    start() {
      console.log(`Game started between ${this.playerA.getName()} and ${this.playerB.getName()}`);
      let attacker = this.playerA.getHealth() <= this.playerB.getHealth() ? this.playerA : this.playerB;
      let defender = attacker === this.playerA ? this.playerB : this.playerA;
  
      while (this.playerA.isAlive() && this.playerB.isAlive()) {
        this.executeTurn(attacker, defender);
  
        // Swap attacker and defender
        [attacker, defender] = [defender, attacker];
      }
  
      console.log(`Game Over! Winner: ${this.playerA.isAlive() ? this.playerA.getName() : this.playerB.getName()}`);
    }
  
    executeTurn(attacker, defender) {
      const attackRoll = attacker.rollDice();
      const defenseRoll = defender.rollDice();
  
      const damageDealt = attacker.getAttack() * attackRoll - defender.getStrength() * defenseRoll;
      if (damageDealt > 0) {
        defender.setHealth(defender.getHealth() - damageDealt);
        console.log(`${attacker.getName()} deals ${damageDealt} damage to ${defender.getName()}`);
        console.log(`${defender.getName()} health is now ${defender.getHealth()}`);
      } else {
        console.log(`${defender.getName()} successfully defended against ${attacker.getName()}`);
      }
    }
  }
  
  module.exports = Game;
  