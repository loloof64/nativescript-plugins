import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { StockfishComponent } from './stockfish.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: StockfishComponent }])],
  declarations: [StockfishComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class StockfishModule {}
