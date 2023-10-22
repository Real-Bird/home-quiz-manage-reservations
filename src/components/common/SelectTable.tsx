import { cls } from "@src/utils";
import { useState } from "react";
import ArrowDropDown from "@assets/icons/arrow_drop_down.svg?react";

export const SelectTable = ({
  tableItemLabels,
  onTableItemChange,
  existedLabel = [],
  maxPick = 2,
}: SelectTableProps) => {
  const [tableItemBadge, setTableItemBadge] =
    useState<TableItemLabel[]>(existedLabel);

  const onTableItemClick = (item: TableItemLabel) => {
    if (tableItemBadge.length >= maxPick) {
      return;
    }
    setTableItemBadge((prev) => {
      const prevSet = new Set([...prev, item]);
      const newArr = [...prevSet].sort((a, b) => a.id.localeCompare(b.id));
      return newArr;
    });
  };

  return (
    <div className="relative w-full group">
      <div
        className={cls(
          tableItemBadge.length > 0 ? "-translate-y-4" : "",
          "absolute top-1 translate-x-3 z-10 transform text-[0.75rem] text-zinc-300 duration-300 translate-y-1/2 bg-white cursor-text px-1"
        )}>
        Select Table
      </div>
      <div className="box-border flex flex-1 flex-wrap items-center rounded-md border border-gray-300 px-2 py-0.5 shadow-sm h-12 overflow-hidden">
        {tableItemBadge?.map((item) => (
          <div
            key={`${item.id}-table-badge`}
            className="text-xs mx-1 p-1 my-2 bg-default rounded-full flex after:content-[''] after:bg-[url(../assets/icons/close.svg)] after:w-4 after:h-4 after:rounded-full after:bg-slate-200 after:bg-cover after:bg-no-repeat after:bg-origin-content after:p-1 cursor-pointer"
            onClick={() =>
              setTableItemBadge((prev) => prev.filter((v) => v.id !== item.id))
            }>
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
            onClick={() => {
              onTableItemChange && onTableItemChange();
              onTableItemClick(item);
            }}>
            {item.tableItemLabel}
          </li>
        ))}
      </ul>
    </div>
  );
};

type TableItemLabel = {
  id: string;
  tableItemLabel: string;
};

interface SelectTableProps {
  tableItemLabels: TableItemLabel[];
  maxPick?: number;
  existedLabel?: TableItemLabel[];
  onTableItemChange?: () => void;
}
