import { Button } from "@src/components/common";
import Trash from "@assets/icons/trash.svg?react";
import { getIntlFormat } from "@src/utils";
import { useNavigate } from "react-router-dom";

export const MainCard = ({
  clientName,
  phoneNumber,
  reservedDate,
  personCount,
  reservedTableNumber,
  reservedFloor,
  notes,
}: MainCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white px-2 py-4 rounded-md shadow-custom space-y-3 cursor-pointer"
      onClick={() => navigate("/edit")}>
      <div className="flex items-center gap-2">
        <strong>{clientName}</strong>
        <Button className="rounded-[1.5rem] from-default to-white text-sm text-common space-x-2 px-2 py-1.5 before:content-[''] before:bg-[url(../assets/icons/phone.svg)] before:w-6 before:h-6 before:inline-block before:bg-cover">
          {phoneNumber}
        </Button>
      </div>
      <div className="flex items-center gap-2 before:content-[''] before:bg-[url(../assets/icons/event_available.svg)] before:w-6 before:h-6 before:inline-block before:bg-cover">
        {getIntlFormat(reservedDate)}
      </div>
      <div className="flex items-center gap-2 before:content-[''] before:bg-[url(../assets/icons/group.svg)] before:w-6 before:h-6 before:inline-block before:bg-cover">
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
          <div className="flex items-center gap-1 after:content-[''] after:bg-[url(../assets/icons/edit.svg)] after:w-4 after:h-4 after:inline-block after:bg-cover">
            {notes}
          </div>
        ) : null}
      </div>
      <div className="flex space-x-3" onClick={(e) => e.stopPropagation()}>
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
