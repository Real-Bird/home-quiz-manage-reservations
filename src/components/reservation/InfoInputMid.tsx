import { Button, SelectTable, TableItemLabel } from "@src/components/common";
import Minus from "@assets/icons/math-minus.svg?react";
import Plus from "@assets/icons/math-plus.svg?react";
import { tableArr } from "@src/mockup/tableItems";

export const InfoInputMid = ({
  personCount = 1,
  reservedTable = [],
  onIncreasePerson,
  onDecreasePerson,
  onTableItemChange,
}: InfoInputMidProps) => {
  const remappingTable: TableItemLabel<LabelTable>[] = tableArr.flatMap(
    ({ floor, table }) =>
      table.map(({ id, table }) => {
        const tableItemLabel = `Table ${table}·Floor ${floor}`;
        return {
          id,
          tableItemLabel,
          floor,
          table,
        };
      })
  );
  const existedLabels: LabelTable[] | undefined =
    reservedTable.length !== 0
      ? reservedTable.flatMap(({ floor, table }) =>
          table.map((table) => {
            const label = `Table ${table}·Floor ${floor}`;
            return {
              id: `f${floor}t${table}`,
              floor,
              table,
              tableItemLabel: label,
            };
          })
        )
      : undefined;
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
  reservedTable: Pick<
    ReservationData.Reservation,
    "reservedTable"
  >["reservedTable"];
  onIncreasePerson?: () => void;
  onDecreasePerson?: () => void;
  onTableItemChange?: (data: LabelTable, isDelete?: boolean) => void;
}

export type LabelTable = {
  id: string;
  tableItemLabel: string;
  floor: number;
  table: number;
};
