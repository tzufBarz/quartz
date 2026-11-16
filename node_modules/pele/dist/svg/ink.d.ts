export declare const ON_LIGHT = "var(--pele-fg-on-light,#1f1f1f)";
export declare const ON_DARK = "var(--pele-fg-on-dark,#fff)";
export declare function plainColor(raw: string): boolean;
export declare function ink(shape: string, text?: string): string | undefined;
export declare function paints(shape: string): boolean;
export declare function inkFill(style: {
    shape: string;
    text: string;
}, fallback?: string): string;
