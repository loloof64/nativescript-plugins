/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module loloof64 {
    export module android {
      export module stockfishlib {
        export class BuildConfig {
          public static class: java.lang.Class<com.loloof64.android.stockfishlib.BuildConfig>;
          public static DEBUG: boolean;
          public static LIBRARY_PACKAGE_NAME: string;
          public static BUILD_TYPE: string;
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module loloof64 {
    export module android {
      export module stockfishlib {
        export class NativeLib {
          public static class: java.lang.Class<com.loloof64.android.stockfishlib.NativeLib>;
          public readStdOut(): string;
          public constructor();
          public writeStdIn(param0: string): boolean;
          public init(): void;
          public main(): void;
        }
        export module NativeLib {
          export class Companion {
            public static class: java.lang.Class<com.loloof64.android.stockfishlib.NativeLib.Companion>;
          }
        }
      }
    }
  }
}

//Generics information:
