## How to run the application

1. **Install dependencies**:
```
npm install
```

2. **Run tests**:
```
npm test
```

3. **Run a simulation of the game**:
```
npm start
```


## Features

1. **Modular Object-Oriented Code**: 
   - The application is structured using well-defined classes for `Player`, `Game`, `GameManager`, and utility functions. This design ensures code reusability and maintainability.

2. **Multiple Games Managed by Game Manager**:
   - The `GameManager` class handles the creation and management of multiple games simultaneously. Players are matched dynamically, and games are started as soon as there are enough players available.

3. **Exhaustive Tests**:
   - Comprehensive unit tests ensure the reliability and correctness of the application's functionality. Tests cover various scenarios and edge cases for players and games.

4. **Multithreading**:
   - The application leverages Node.js `worker_threads` to run multiple games concurrently, enhancing performance and allowing for parallel game processing.

5. **Logging**:
   - Detailed logs of game events are recorded in the `records` directory. Each game has its own log file, capturing every move and the outcome of the game.


## Code Structure and Modules
**Player Class (src/player.js)**:
Defines the Player class with attributes for name, health, strength, and attack. Includes methods for rolling dice, checking if a player is alive, and getting/setting attributes.

**Game Class (src/game.js)**:
Defines the Game class that handles the game logic between two players. It uses utility functions for logging game events.

**GameManager Class (src/gameManager.js)**:
Manages multiple games and handles the creation of worker threads for concurrent game execution.

**GameWorker Script (src/gameWorker.js)**:
Runs the game logic in a separate worker thread for each game, allowing for parallel game processing.

**Logging Utility (utils/logging.js)**:
Handles the creation of the records directory and writing game logs to individual files.

**Constants**:
Stores all the constant variables related to the application.

**Tests (test directory)**:
Contains test cases for Player, Game, and GameManager classes, ensuring the functionality and reliability of the application.