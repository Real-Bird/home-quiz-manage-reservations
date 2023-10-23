import { Button } from "@src/components/common";
import Trash from "@assets/icons/trash.svg?react";
import { getIntlFormat } from "@src/utils";
import { useNavigate } from "react-router-dom";
import { useReservationList } from "@src/contexts/reservationList";
import { useEdit } from "@src/contexts/edit";

export const MainCard = ({ data }: MainCardProps) => {
  const {
    clientName,
    phoneNumber,
    reservedDate,
    personCount,
    reservedTable,
    notes,
  } = data;
  const navigate = useNavigate();
  const [, dispatch] = useReservationList();
  const [, editDispatch] = useEdit();

  const onDelete = () => {
    dispatch({ type: "DELETE_RESERVATION", reservation: data });
  };

  const onToggleIsSeated = () => {
    dispatch({ type: "FILTER_RESERVATION", reservation: data });
  };

  const onToggleEdit = () => {
    editDispatch({ type: "GET_RESERVATION", reservation: data });
    navigate("/edit");
  };
  return (
    <div
      className="bg-white px-2 py-4 rounded-md shadow-custom space-y-3 cursor-pointer h-fit w-56"
      onClick={onToggleEdit}>
      <div className="flex items-center gap-2">
        <strong className="overflow-hidden text-ellipsis whitespace-nowrap max-w-[4rem]">
          {clientName}
        </strong>
        <Button
          className="from-default to-white text-sm text-common space-x-2 px-1 py-1.5 before:content-[''] before:bg-[url(../assets/icons/phone.svg)] before:w-6 before:h-6 before:inline-block before:bg-cover"
          style={{ borderRadius: "1.5rem" }}>
          {phoneNumber}
        </Button>
      </div>
      <div className="flex items-center gap-2 before:content-[''] before:bg-[url(../assets/icons/event_available.svg)] before:w-6 before:h-6 before:inline-block before:bg-cover">
        {getIntlFormat(reservedDate)}
      </div>
      <div className="flex items-center gap-2 before:content-[''] before:bg-[url(../assets/icons/group.svg)] before:w-6 before:h-6 before:inline-block before:bg-cover">
        {personCount}
      </div>
      <div className="text-sm text-common text-ellipsis overflow-hidden whitespace-nowrap">
        {reservedTable.length !== 0 ? (
          <>
            Reserved{" "}
            <span className="space-x-4">
              {reservedTable.map(({ floor, table }) => {
                const tableNums = table?.join(",");
                return (
                  <span key={`f${floor}t${table.join(",")}-${data.id}`}>
                    Table <strong className="text-black">{tableNums}</strong> ·
                    Floor {floor}
                  </span>
                );
              })}
            </span>
          </>
        ) : (
          <em>No Selected Table</em>
        )}
      </div>
      <div className="h-7">
        {notes ? (
          <div className="flex items-center gap-1 after:content-[''] after:bg-[url(../assets/icons/edit.svg)] after:w-4 after:h-4 after:inline-block after:bg-cover">
            <span className="max-w-[10rem] whitespace-nowrap overflow-hidden text-ellipsis">
              {notes}
            </span>
          </div>
        ) : null}
      </div>
      <div className="flex space-x-3" onClick={(e) => e.stopPropagation()}>
        <Button className="w-16 from-default to-white" onClick={onDelete}>
          <Trash />
        </Button>
        <Button
          className="flex-1 text-white from-highlight to-red-400"
          onClick={onToggleIsSeated}>
          Seated
        </Button>
      </div>
    </div>
  );
};

interface MainCardProps {
  data: ReservationData.Reservation;
}
