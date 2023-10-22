import { Button, SelectTable } from "@src/components/common";
import Minus from "@assets/icons/math-minus.svg?react";
import Plus from "@assets/icons/math-plus.svg?react";
import { tableArr } from "@src/mockup/tableItems";

export const InfoInputMid = ({
  personCount = 1,
  floor,
  tableNumber,
  onIncreasePerson,
  onDecreasePerson,
  onTableItemChange,
}: InfoInputMidProps) => {
  const remappingTable = tableArr
    .map((item) => {
      const tableItemLabels = item.table.map((table) => {
        const label = `Table ${table.table}·Floor ${item.floor}`;
        return { id: table.id, tableItemLabel: label };
      });
      return tableItemLabels;
    })
    .flat();
  const existedLabels = floor
    ? tableNumber?.map((num) => ({
        id: `f${floor}t${num}`,
        tableItemLabel: `Table ${num}·Floor ${floor}`,
      }))
    : [];
  return (
    <div className="grid grid-cols-3 items-center">
      <div className="flex items-center justify-between">
        <strong className="text-zinc-400 text-sm">Guests</strong>
        <div className="grid grid-cols-3 gap-1">
          <Button
            className="from-default to-white w-10 h-10"
            onClick={onDecreasePerson}>
            <Minus />
          </Button>
          <span className="w-10 h-10 text-3xl text-center">{personCount}</span>
          <Button
            className="from-default to-white w-10 h-10"
            onClick={onIncreasePerson}>
            <Plus />
          </Button>
        </div>
      </div>
      <div className="w-5/6 col-span-2 justify-self-end">
        <SelectTable
          tableItemLabels={remappingTable}
          onTableItemChange={onTableItemChange}
          existedLabel={existedLabels}
        />
      </div>
    </div>
  );
};

interface InfoInputMidProps {
  personCount?: number;
  tableNumber?: number[];
  floor?: number;
  onIncreasePerson?: () => void;
  onDecreasePerson?: () => void;
  onTableItemChange?: () => void;
}
