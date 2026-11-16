import type { TreemapNode } from './model.js';
export interface Box {
    node: TreemapNode;
    parent: Box | undefined;
    series: number;
    value: number;
    children: Box[];
    headed: boolean;
    header: number;
    x: number;
    y: number;
    w: number;
    h: number;
}
export interface Insets {
    gap: number;
    header: number;
    short: number;
    side: number;
}
export declare function layoutTreemap(roots: TreemapNode[], width: number, height: number, insets: Insets): Box[];
