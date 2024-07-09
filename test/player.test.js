import { expect } from 'chai';
import Player from '../src/player.js';


describe('Player', () => {
  it('should have consistent attributes', () => {
    const player = new Player('test', 5, 50, 10);
    expect(player.getName()).to.equal('test');
    expect(player.getHealth()).to.equal(5);
    expect(player.getAttack()).to.equal(50);
    expect(player.getStrength()).to.equal(10);
  });

  it('should set health correctly', () => {
    const player = new Player('Test Player', 50, 5, 10);
    player.setHealth(30);
    expect(player.getHealth()).to.equal(30);
  });

  it('should not set health below zero', () => {
    const player = new Player('Test Player', 50, 5, 10);
    player.setHealth(-10);
    expect(player.getHealth()).to.equal(0);
  });
  
});
