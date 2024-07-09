import Game from './game.js';

class GameManager {

  constructor() {
    this.waitingPlayer = null;
    this.activeGames = [];
  }

  enterArena(player) {

    if(this.waitingPlayer === null){
        this.waitingPlayer = player;
        return;
    }
    
    let opponent = this.waitingPlayer;
    this.waitingPlayer = null;
    this.startGame(player, opponent);
  }

  startGame(playerA, playerB) {
    const game = new Game(playerA, playerB);
    this.activeGames.push(game);
    game.start();
  }
}

export default GameManager;
