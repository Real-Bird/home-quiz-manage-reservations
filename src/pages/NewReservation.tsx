import { Button } from "@src/components/common";
import { ReserveForm } from "@src/components/reservation/ReserveForm";
import {
  InfoInputBottom,
  InfoInputMid,
  InfoInputTop,
  LabelTable,
} from "@src/components/reservation";
import { useNavigate } from "react-router-dom";
import { ResisterType, useResister } from "@src/contexts/resister";
import { ChangeEvent } from "react";
import { validatePhoneNumber } from "@src/utils";
import { useReservationList } from "@src/contexts/reservationList";

export const NewReservationModal = () => {
  const navigate = useNavigate();
  const [resisterState, resisterDispatch] = useResister();
  const [, reservationDispatch] = useReservationList();

  const hasEmpty =
    !resisterState.clientName ||
    !resisterState.phoneNumber ||
    !resisterState.personCount ||
    !resisterState.reservedDate;
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const keyword = e.target.id as keyof ResisterType;
    let value = e.target.value;
    if (keyword === "phoneNumber") {
      value = validatePhoneNumber(e.target.value);
    }
    resisterDispatch({
      type: "SET_RESERVATION",
      keyword,
      value,
    });
  };

  const onIncreasePerson = () => {
    resisterDispatch({
      type: "SET_RESERVATION",
      keyword: "personCount",
      value: resisterState.personCount + 1,
    });
  };

  const onDecreasePerson = () => {
    if (resisterState.personCount <= 1) return;
    resisterDispatch({
      type: "SET_RESERVATION",
      keyword: "personCount",
      value: resisterState.personCount - 1,
    });
  };

  const onTableItemChange = (target: LabelTable, isDelete?: boolean) => {
    if (resisterState.reservedTable.length === 0) {
      const newReservedTable = [
        {
          floor: target.floor,
          table: [target.table],
        },
      ];
      return resisterDispatch({
        type: "SET_RESERVATION",
        keyword: "reservedTable",
        value: newReservedTable,
      });
    }
    const existedFloor = resisterState.reservedTable.find(
      ({ floor }) => floor === target.floor
    );
    if (existedFloor) {
      if (isDelete) {
        const filteredTable = resisterState.reservedTable.reduce(
          (prev, { floor, table }) => {
            if (table.length === 1) {
              return prev.filter(({ floor }) => floor !== target.floor);
            } else if (table.includes(target.table)) {
              const temp = table
                .filter((n) => n !== target.table)
                .sort((a, b) => a - b);
              return [{ floor, table: temp }];
            }
            return prev;
          },
          resisterState.reservedTable
        );
        return resisterDispatch({
          type: "SET_RESERVATION",
          keyword: "reservedTable",
          value: filteredTable,
        });
      }
      const setExistedFTable = new Set([...existedFloor.table, target.table]);
      const addTable = {
        floor: existedFloor.floor,
        table: [...setExistedFTable].sort((a, b) => a - b),
      };
      const deletedOldFloor = resisterState.reservedTable.filter(
        ({ floor }) => floor !== target.floor
      );
      return resisterDispatch({
        type: "SET_RESERVATION",
        keyword: "reservedTable",
        value: [...deletedOldFloor, addTable].sort((a, b) => a.floor - b.floor),
      });
    }
    const addFloorTable = {
      floor: target.floor,
      table: [target.table],
    };
    return resisterDispatch({
      type: "SET_RESERVATION",
      keyword: "reservedTable",
      value: [...resisterState.reservedTable, addFloorTable].sort(
        (a, b) => a.floor - b.floor
      ),
    });
  };

  const onNewReservationSubmit = () => {
    reservationDispatch({
      type: "SET_RESERVATION",
      reservation: resisterState,
    });
    resisterDispatch({ type: "INITIALIZE" });
    navigate("/");
  };
  return (
    <ReserveForm titlePrefix="New" onSubmit={onNewReservationSubmit}>
      <InfoInputTop
        clientName={resisterState.clientName}
        phoneNumber={resisterState.phoneNumber}
        reservedDate={resisterState.reservedDate}
        onNameChange={onChange}
        onPhoneChange={onChange}
      />
      <InfoInputMid
        personCount={resisterState.personCount}
        reservedTable={resisterState.reservedTable}
        onIncreasePerson={onIncreasePerson}
        onDecreasePerson={onDecreasePerson}
        onTableItemChange={onTableItemChange}
      />
      <InfoInputBottom text={resisterState.notes} onTextChange={onChange} />
      <Button
        type="submit"
        className="w-full h-28 from-highlight to-red-400 text-default"
        disabled={hasEmpty}>
        Save
      </Button>
    </ReserveForm>
  );
};
