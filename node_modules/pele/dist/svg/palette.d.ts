import type { DiagramType } from '../detect.js';
import { type Config } from '../preprocess.js';
export interface Palette {
    style: string;
    inks: (string | undefined)[];
}
export declare function palette(type: DiagramType, config: Config): Palette;
export declare function withPalette<T>(next: Palette, run: () => T): T;
export declare const paletteStyle: () => string;
export declare function seriesInkFill(index: number): string;
