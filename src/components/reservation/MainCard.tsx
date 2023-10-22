import { Button } from "@src/components/common";
import Phone from "@assets/icons/phone.svg?react";
import CheckedDate from "@assets/icons/event_available.svg?react";
import Group from "@assets/icons/group.svg?react";
import Edit from "@assets/icons/edit.svg?react";
import Trash from "@assets/icons/trash.svg?react";
import { getIntlFormat } from "@src/utils";

export const MainCard = ({
  clientName,
  phoneNumber,
  reservedDate,
  personCount,
  reservedTableNumber,
  reservedFloor,
  notes,
}: MainCardProps) => {
  return (
    <div className="bg-white px-2 py-4 rounded-md shadow-custom space-y-3">
      <div className="flex items-center gap-2">
        <strong>{clientName}</strong>
        <Button className="rounded-3xl from-default to-white text-sm text-common space-x-2 px-2 py-1.5">
          <Phone />
          {phoneNumber}
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <CheckedDate />
        {getIntlFormat(reservedDate)}
      </div>
      <div className="flex items-center gap-2">
        <Group />
        {personCount}
      </div>
      <div className="text-sm text-common">
        {reservedTableNumber ? (
          <span>
            Reserved Table{" "}
            <strong className="text-black">
              {Array.isArray(reservedTableNumber)
                ? reservedTableNumber.join(",")
                : reservedTableNumber}
            </strong>{" "}
            · Floor {reservedFloor}
          </span>
        ) : (
          <em>No Selected Table</em>
        )}
      </div>
      <div className="h-7">
        {notes ? (
          <div className="flex items-center gap-2">
            {notes} <Edit />
          </div>
        ) : null}
      </div>
      <div className="flex space-x-3">
        <Button className="w-16 from-default to-white">
          <Trash />
        </Button>
        <Button className="flex-1 text-white from-highlight to-red-400">
          Seated
        </Button>
      </div>
    </div>
  );
};

interface MainCardProps {
  clientName: string;
  phoneNumber: string;
  reservedDate: Date;
  personCount: number;
  reservedTableNumber?: number | number[];
  reservedFloor?: number;
  notes?: string;
}
