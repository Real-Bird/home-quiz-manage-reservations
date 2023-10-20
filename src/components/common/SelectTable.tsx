import { cls } from "@src/utils";
import { useState } from "react";
import Close from "@assets/icons/close.svg?react";
import ArrowDropDown from "@assets/icons/arrow_drop_down.svg?react";

export const SelectTable = ({ tableItems }: SelectTableProps) => {
  const [tableItemBadge, setTableItemBadge] = useState<TableBaseItem[]>([]);

  const onTableItemClick = (item: TableBaseItem) => {
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
      <div
        className={cls(
          tableItemBadge.length > 1 ? "hover:h-fit" : "",
          "box-border flex flex-1 flex-wrap items-center rounded-md border border-gray-300 px-2 py-0.5 shadow-sm h-12 overflow-hidden"
        )}>
        {tableItemBadge?.map((item) => (
          <div
            key={`${item.id}-table-badge`}
            className="text-xs mx-1 p-1 my-2 bg-default rounded-full flex"
            onClick={() =>
              setTableItemBadge((prev) => prev.filter((v) => v.id !== item.id))
            }>
            <span>{item.tableItemLabel}</span>
            <div className="w-4 h-4 rounded-full bg-gray-300 p-1 flex justify-center items-center">
              <Close width={8} height={8} />
            </div>
          </div>
        ))}
        <div className="absolute right-3">
          <ArrowDropDown />
        </div>
      </div>
      <ul
        className="hidden absolute z-10 h-fit max-h-60 w-full divide-y-2 overflow-y-scroll rounded-md border border-gray-300 group-hover:block"
        id="category">
        {tableItems?.map((item) => (
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

type TableBaseItem = {
  id: string;
  tableItemLabel: string;
};

interface SelectTableProps {
  tableItems: TableBaseItem[];
}
