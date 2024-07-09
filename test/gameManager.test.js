import {expect} from 'chai';
import Player from '../src/player.js';
import GameManager from '../src/gameManager.js';

describe('GameManager', () => {
    
  it('should initialize with no waiting player and no active games', () => {
    const gameManager = new GameManager();
    expect(gameManager.waitingPlayer).to.equal(null);
    expect(gameManager.activeGames).to.be.an('array').that.is.empty;
  });

  it('should add players to the waiting queue and start a game when two players are available', () => {
    const gameManager = new GameManager();
    const playerA = new Player('Player A', 50, 5, 10);
    const playerB = new Player('Player B', 100, 10, 5);

    gameManager.enterArena(playerA);
    expect(gameManager.waitingPlayer).to.equal(playerA);

    gameManager.enterArena(playerB);
    expect(gameManager.waitingPlayer).to.equal(null);
    expect(gameManager.activeGames.length).to.equal(1);
  });
});
