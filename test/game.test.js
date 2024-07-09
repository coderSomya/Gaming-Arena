import {expect} from 'chai';
import Player from '../src/player.js';
import Game from '../src/game.js';

describe('Game', () => {

  let playerA;
  let playerB;
  let game;

  beforeEach(() => {
    playerA = new Player('Player A', 50, 5, 10);
    playerB = new Player('Player B', 60, 6, 8);
    game = new Game(playerA, playerB);
  });

  it('should initialize the game with two players', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should correctly identify the first attacker', () => {
    expect(game.playerA.getHealth()).to.be.lessThan(game.playerB.getHealth());
    expect(game.playerA).to.equal(playerA);
  });

  it('should execute a turn correctly', () => {
    const initialHealthB = playerB.getHealth();
    const attackRoll = playerA.rollDice();
    const defenseRoll = playerB.rollDice();

    game.executeTurn(playerA, playerB); 

    const damage = Math.max(0, (playerA.getAttack() * attackRoll) - (playerB.getStrength() * defenseRoll));
    const finaldHealthB = initialHealthB - damage;

    expect(playerB.getHealth()).to.equal(initialHealthB);
    playerB.setHealth(finaldHealthB)
    expect(playerB.getHealth()).to.equal(finaldHealthB);
    expect(playerB.getHealth()).to.be.at.most(initialHealthB);
  });

  it('should declare the correct winner', () => {
    playerA.setHealth(0); // Simulate player A losing
    game.start();

    expect(playerB.isAlive()).to.be.true;
    expect(playerA.isAlive()).to.be.false;
    expect(game.playerA.isAlive()).to.be.false;
    expect(game.playerB.isAlive()).to.be.true;
  });

  it('should handle a game where player B wins', () => {
    playerA.setHealth(10);
    playerB.setHealth(100);
    game.start();

    expect(playerB.isAlive()).to.be.true;
    expect(playerA.isAlive()).to.be.false;
  });

  it('should handle a game where player A wins', () => {
    playerA.setHealth(100);
    playerB.setHealth(10);
    game.start();

    expect(playerA.isAlive()).to.be.true;
    expect(playerB.isAlive()).to.be.false;
  });

});
