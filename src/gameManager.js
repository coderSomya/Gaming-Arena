import { Worker } from 'worker_threads';


class GameManager {

  constructor() {
    this.waitingPlayer = null;
    this.activeGames = []; //this will store the active game workers
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

    const worker = new Worker('./src/gameWorker.js', {
        workerData: {
          playerAData: {
            name: playerA.getName(),
            health: playerA.getHealth(),
            strength: playerA.getStrength(),
            attack: playerA.getAttack()
          },
          playerBData: {
            name: playerB.getName(),
            health: playerB.getHealth(),
            strength: playerB.getStrength(),
            attack: playerB.getAttack()
          }
        }
      });


    worker.on('message', (message) => {
        switch(message.type){
            case 'game_over':
                console.log(`Game finished! Winner: ${message.winner}`);
                this.activeGames = this.activeGames.filter(_worker => _worker != worker)
                break;
            default: 
                console.log('Invalid message type');
        }
    });

    worker.on('error', (error) => {
        console.error('Worker error:', error);
    });

    worker.on('exit', (code) => {
        if (code !== 0) {
            console.error(`Worker stopped with exit code ${code}`);
        }
    });

    this.activeGames.push(worker);
  }
}

export default GameManager;
