import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedStockfish } from '@demo/shared';
import {} from '@loloof64/stockfish';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedStockfish {}
