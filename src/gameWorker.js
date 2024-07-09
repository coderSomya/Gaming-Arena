import { parentPort, workerData } from 'worker_threads';
import Player from './player.js';
import Game from './game.js';

const { playerAData, playerBData } = workerData;

const playerA = new Player(playerAData.name, playerAData.health, playerAData.strength, playerAData.attack);
const playerB = new Player(playerBData.name, playerBData.health, playerBData.strength, playerBData.attack);

const game = new Game(playerA, playerB);
game.start();

// Send the result back to the main thread when game finishes
parentPort.postMessage({
  type: 'game_over',
  winner: playerA.isAlive() ? playerA.getName() : playerB.getName()
});
