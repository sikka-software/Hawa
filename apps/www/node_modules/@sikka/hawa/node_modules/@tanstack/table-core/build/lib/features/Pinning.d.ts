import { TableFeature } from '../core/table';
import { OnChangeFn, Updater, Column, Row, Cell, RowData } from '../types';
export type ColumnPinningPosition = false | 'left' | 'right';
export type RowPinningPosition = false | 'top' | 'bottom';
export interface ColumnPinningState {
    left?: string[];
    right?: string[];
}
export interface RowPinningState {
    bottom?: string[];
    top?: string[];
}
export interface ColumnPinningTableState {
    columnPinning: ColumnPinningState;
}
export interface RowPinningTableState {
    rowPinning: RowPinningState;
}
export interface ColumnPinningOptions {
    /**
     * Enables/disables column pinning for the table. Defaults to `true`.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#enablecolumnpinning)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    enableColumnPinning?: boolean;
    /**
     * Enables/disables all pinning for the table. Defaults to `true`.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#enablepinning)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    enablePinning?: boolean;
    /**
     * If provided, this function will be called with an `updaterFn` when `state.columnPinning` changes. This overrides the default internal state management, so you will also need to supply `state.columnPinning` from your own managed state.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#oncolumnpinningchange)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/oncolumnpinningchange)
     */
    onColumnPinningChange?: OnChangeFn<ColumnPinningState>;
}
export interface RowPinningOptions<TData extends RowData> {
    /**
     * Enables/disables row pinning for the table. Defaults to `true`.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#enablerowpinning)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    enableRowPinning?: boolean | ((row: Row<TData>) => boolean);
    /**
     * When `false`, pinned rows will not be visible if they are filtered or paginated out of the table. When `true`, pinned rows will always be visible regardless of filtering or pagination. Defaults to `true`.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#keeppinnedrows)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    keepPinnedRows?: boolean;
    /**
     * If provided, this function will be called with an `updaterFn` when `state.rowPinning` changes. This overrides the default internal state management, so you will also need to supply `state.rowPinning` from your own managed state.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#onrowpinningchange)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/onrowpinningchange)
     */
    onRowPinningChange?: OnChangeFn<RowPinningState>;
}
export interface ColumnPinningDefaultOptions {
    onColumnPinningChange: OnChangeFn<ColumnPinningState>;
}
export interface RowPinningDefaultOptions {
    onRowPinningChange: OnChangeFn<RowPinningState>;
}
export interface ColumnPinningColumnDef {
    /**
     * Enables/disables column pinning for this column. Defaults to `true`.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#enablepinning-1)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    enablePinning?: boolean;
}
export interface ColumnPinningColumn {
    /**
     * Returns whether or not the column can be pinned.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#getcanpin)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    getCanPin: () => boolean;
    /**
     * Returns the pinned position of the column. (`'left'`, `'right'` or `false`)
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#getispinned)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    getIsPinned: () => ColumnPinningPosition;
    /**
     * Returns the numeric pinned index of the column within a pinned column group.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#getpinnedindex)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    getPinnedIndex: () => number;
    /**
     * Pins a column to the `'left'` or `'right'`, or unpins the column to the center if `false` is passed.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#pin)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    pin: (position: ColumnPinningPosition) => void;
}
export interface ColumnPinningRow<TData extends RowData> {
    /**
     * Returns all center pinned (unpinned) leaf cells in the row.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#getcentervisiblecells)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    getCenterVisibleCells: () => Cell<TData, unknown>[];
    /**
     * Returns all left pinned leaf cells in the row.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#getleftvisiblecells)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    getLeftVisibleCells: () => Cell<TData, unknown>[];
    /**
     * Returns all right pinned leaf cells in the row.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#getrightvisiblecells)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    getRightVisibleCells: () => Cell<TData, unknown>[];
}
export interface RowPinningRow {
    /**
     * Returns whether or not the row can be pinned.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#getcanpin-1)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    getCanPin: () => boolean;
    /**
     * Returns the pinned position of the row. (`'top'`, `'bottom'` or `false`)
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#getispinned-1)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    getIsPinned: () => RowPinningPosition;
    /**
     * Returns the numeric pinned index of the row within a pinned row group.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#getpinnedindex-1)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    getPinnedIndex: () => number;
    /**
     * Pins a row to the `'top'` or `'bottom'`, or unpins the row to the center if `false` is passed.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#pin-1)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    pin: (position: RowPinningPosition, includeLeafRows?: boolean, includeParentRows?: boolean) => void;
}
export interface ColumnPinningInstance<TData extends RowData> {
    /**
     * Returns all center pinned (unpinned) leaf columns.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#getcenterleafcolumns)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    getCenterLeafColumns: () => Column<TData, unknown>[];
    /**
     * Returns whether or not any columns are pinned. Optionally specify to only check for pinned columns in either the `left` or `right` position.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#getissomecolumnspinned)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    getIsSomeColumnsPinned: (position?: ColumnPinningPosition) => boolean;
    /**
     * Returns all left pinned leaf columns.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#getleftleafcolumns)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    getLeftLeafColumns: () => Column<TData, unknown>[];
    /**
     * Returns all right pinned leaf columns.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#getrightleafcolumns)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    getRightLeafColumns: () => Column<TData, unknown>[];
    /**
     * Resets the **columnPinning** state to `initialState.columnPinning`, or `true` can be passed to force a default blank state reset to `{ left: [], right: [], }`.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#resetcolumnpinning)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    resetColumnPinning: (defaultState?: boolean) => void;
    /**
     * Sets or updates the `state.columnPinning` state.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#setcolumnpinning)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    setColumnPinning: (updater: Updater<ColumnPinningState>) => void;
}
export interface RowPinningInstance<TData extends RowData> {
    _getPinnedRows: (position: 'top' | 'bottom') => Row<TData>[];
    /**
     * Returns all bottom pinned rows.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#getbottomrows)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    getBottomRows: () => Row<TData>[];
    /**
     * Returns all rows that are not pinned to the top or bottom.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#getcenterrows)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    getCenterRows: () => Row<TData>[];
    /**
     * Returns whether or not any rows are pinned. Optionally specify to only check for pinned rows in either the `top` or `bottom` position.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#getissomerowspinned)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    getIsSomeRowsPinned: (position?: RowPinningPosition) => boolean;
    /**
     * Returns all top pinned rows.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#gettoprows)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    getTopRows: () => Row<TData>[];
    /**
     * Resets the **rowPinning** state to `initialState.rowPinning`, or `true` can be passed to force a default blank state reset to `{ top: [], bottom: [], }`.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#resetrowpinning)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    resetRowPinning: (defaultState?: boolean) => void;
    /**
     * Sets or updates the `state.rowPinning` state.
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pinning#setrowpinning)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/pinning)
     */
    setRowPinning: (updater: Updater<RowPinningState>) => void;
}
export declare const Pinning: TableFeature;
