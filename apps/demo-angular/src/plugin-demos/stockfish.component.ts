import { Component, NgZone } from '@angular/core';
import { DemoSharedStockfish } from '@demo/shared';
import {} from '@loloof64/stockfish';

@Component({
  selector: 'demo-stockfish',
  templateUrl: 'stockfish.component.html',
})
export class StockfishComponent {
  demoShared: DemoSharedStockfish;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedStockfish();
  }
}
