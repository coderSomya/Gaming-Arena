import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const recordsDir = path.join(__dirname, '../records');

function createLogFile(gameid) {
  if (!fs.existsSync(recordsDir)) {
    fs.mkdirSync(recordsDir, { recursive: true });
  }
  const logFileName = `game_${gameid}.log`;
  const logFilePath = path.join(recordsDir, logFileName);
  fs.writeFileSync(logFilePath, 'Game Log...\n');
  return logFilePath;
}

function logToFile(logFilePath, message) {
  fs.appendFileSync(logFilePath, `${message}\n`);
}

export { createLogFile, logToFile };
