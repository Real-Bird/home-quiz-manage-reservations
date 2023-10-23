import { cls } from "@src/utils";
import { useState } from "react";
import ArrowDropDown from "@assets/icons/arrow_drop_down.svg?react";

export const SelectTable = <T extends Record<string, unknown>>({
  tableItemLabels,
  onTableItemChange,
  existedLabel = [],
  maxPick = 2,
}: SelectTableProps<T>) => {
  const [tableItemBadge, setTableItemBadge] =
    useState<TableItemLabel<T>[]>(existedLabel);

  const onTableItemClick = (item: TableItemLabel<T>) => {
    if (
      tableItemBadge.length >= maxPick ||
      tableItemBadge.find((badge) => badge.id === item.id)
    ) {
      return;
    }
    if (typeof onTableItemChange === "function") {
      onTableItemChange(item);
    }
    setTableItemBadge((prev) => {
      const prevSet = new Set([...prev, item]);
      const newArr = [...prevSet].sort((a, b) => a.id.localeCompare(b.id));
      return newArr;
    });
  };

  const onBadgeClick = (item: TableItemLabel<T>) => {
    if (typeof onTableItemChange === "function") {
      onTableItemChange(item, true);
    }
    setTableItemBadge((prev) => prev.filter((v) => v.id !== item.id));
  };

  return (
    <div className="relative w-full group">
      <div
        className={cls(
          tableItemBadge.length > 0 ? "-translate-y-3" : "translate-y-1/2",
          "absolute top-1 translate-x-3 z-10 transform text-[0.75rem] text-zinc-300 duration-300 bg-white cursor-text px-1"
        )}>
        Select Table
      </div>
      <div className="box-border flex flex-1 flex-wrap items-center rounded-md border border-gray-300 px-2 py-0.5 shadow-sm h-12 overflow-hidden">
        {tableItemBadge?.map((item) => (
          <div
            key={`${item.id}-table-badge`}
            className="text-xs mx-1 p-1 my-2 bg-default rounded-full flex after:content-[''] after:bg-[url(../assets/icons/close.svg)] after:w-4 after:h-4 after:rounded-full after:bg-slate-200 after:bg-cover after:bg-no-repeat after:bg-origin-content after:p-1 cursor-pointer"
            onClick={() => onBadgeClick(item)}>
            <span>{item.tableItemLabel}</span>
          </div>
        ))}
        <div className="absolute right-3">
          <ArrowDropDown />
        </div>
      </div>
      <ul
        className="hidden absolute z-10 h-fit max-h-60 w-full divide-y-2 overflow-y-scroll rounded-md border border-gray-300 group-hover:block"
        id="category">
        {tableItemLabels?.map((item) => (
          <li
            key={item.id}
            className="w-full cursor-pointer bg-white px-3 py-2 placeholder-gray-400 shadow-sm hover:bg-gray-300"
            onClick={() => onTableItemClick(item)}>
            {item.tableItemLabel}
          </li>
        ))}
      </ul>
    </div>
  );
};

type BaseTableItem = {
  id: string;
  tableItemLabel: string;
};

export type TableItemLabel<T extends Record<string, unknown>> = BaseTableItem &
  T;

interface SelectTableProps<T extends Record<string, unknown>> {
  tableItemLabels: TableItemLabel<T>[];
  maxPick?: number;
  existedLabel?: TableItemLabel<T>[];
  onTableItemChange?: (data: TableItemLabel<T>, isDelete?: boolean) => void;
}
