import { DirectionOptionType } from './Direction';
import { NodeRectType } from './NodeRects';
export type AxisOptionType = 'x' | 'y';
type AxisEdgeType = 'top' | 'right' | 'bottom' | 'left';
export type AxisType = {
    scroll: AxisOptionType;
    cross: AxisOptionType;
    startEdge: AxisEdgeType;
    endEdge: AxisEdgeType;
    measureSize: (nodeRect: NodeRectType) => number;
};
export declare function Axis(axis: AxisOptionType, direction: DirectionOptionType): AxisType;
export {};
