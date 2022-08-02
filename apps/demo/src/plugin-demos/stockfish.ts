import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedStockfish } from '@demo/shared';
import {} from '@loloof64/stockfish';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedStockfish {
  positionFen: string;
  thinkingTimeMs: number;

  constructor() {
    super();
    this.positionFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    this.thinkingTimeMs = 500;
  }

  evaluate() {
    console.log(`Evaluation for position : ${this.positionFen}`);
    console.log(`Thinking time ms : ${this.thinkingTimeMs}`);
  }

  pasteFen(args: EventData) {
    console.log(args);
  }

  onSliderValueChanged(args: EventData) {
    console.log(args);
  }

  onPositionChanged(args: EventData) {
    console.log(args);
  }
}
