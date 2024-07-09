import {expect} from 'chai';
import Player from '../src/player.js';
import Game from '../src/game.js';

describe('Game', () => {
  it('should initialize the game with two players', () => {
    const playerA = new Player('Player A', 50, 5, 10);
    const playerB = new Player('Player B', 100, 10, 5);
    const game = new Game(playerA, playerB);
    expect(game).to.be.an.instanceof(Game);
  });

});
