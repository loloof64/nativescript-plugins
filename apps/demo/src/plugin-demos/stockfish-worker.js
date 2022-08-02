import { Stockfish } from '@loloof64/stockfish';
import 'globals';

const stockfishLib = new Stockfish();

stockfishLib.init();
stockfishLib.main();

global.onmessage = function (msg) {
  if (msg.data.type === 'set-position') {
    console.log(`Received [set position] command`);
    console.log(`Position: ${msg.data.value.fen}`);
    console.log(`Thinking time ms: ${msg.data.value.thinkingTimeMs}`);
  } else if (msg.data.type === 'set-thinking-time') {
    console.log('Received [set thinking time] command');
  } else if (msg.data.type === 'evaluate') {
    console.log('Received [evaluate] command');
  } else if (msg.data.type === 'close') {
    console.log('Received [close] command');
    stockfishLib.sendCommand('quit');
  }
};
