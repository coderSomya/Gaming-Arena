import Player from "./player.js";
import GameManager from "./gameManager.js";

const gameManager = new GameManager();

const playerA = new Player('Player A', 50, 5, 10);
const playerB = new Player('Player B', 100, 10, 5);
const playerC = new Player('Player C', 80, 7, 8);

gameManager.enterArena(playerA);
gameManager.enterArena(playerB);
gameManager.enterArena(playerC);

// This simulates more players entering the arena at a later time
setTimeout(() => {
  const playerD = new Player('Player D', 70, 6, 9);
  gameManager.enterArena(playerD);
}, 5000);
