import { StockfishCommon } from './common';

export class Stockfish extends StockfishCommon {
  stockfish: com.loloof64.android.stockfishlib.NativeLib;

  constructor() {
    super();
    this.stockfish = new com.loloof64.android.stockfishlib.NativeLib();
  }

  public readStdOut(): string {
    return this.stockfish.readStdOut();
  }

  public writeStdIn(command: string): boolean {
    return this.stockfish.writeStdIn(command);
  }

  public init() {
    this.stockfish.init();
  }

  public main() {
    this.stockfish.main();
  }
}
