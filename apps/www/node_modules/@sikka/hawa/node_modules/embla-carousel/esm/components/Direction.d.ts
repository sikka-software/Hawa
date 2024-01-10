export type DirectionOptionType = 'ltr' | 'rtl';
export type DirectionType = {
    apply: (n: number) => number;
};
export declare function Direction(direction: DirectionOptionType): DirectionType;
