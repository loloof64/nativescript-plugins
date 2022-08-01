import { DemoSharedBase } from '../utils';
import {} from '@loloof64/stockfish';

export class DemoSharedStockfish extends DemoSharedBase {
  evaluate() {
    console.log('test stockfish!');
  }

  onSliderValueChanged(event) {
    console.log(`Slider changed : ${event}`);
  }
}
