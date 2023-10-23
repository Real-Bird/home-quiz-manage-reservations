import { Button } from "@src/components/common";
import { ReserveForm } from "@src/components/reservation/ReserveForm";
import {
  InfoInputBottom,
  InfoInputMid,
  InfoInputTop,
  LabelTable,
} from "@src/components/reservation";
import Trash from "@assets/icons/trash.svg?react";
import { Navigate, useNavigate } from "react-router-dom";
import { EditType, useEdit } from "@src/contexts/edit";
import { ChangeEvent, useEffect } from "react";
import { validatePhoneNumber } from "@src/utils";
import { useReservationList } from "@src/contexts/reservationList";

export const EditReservationModal = () => {
  const navigate = useNavigate();
  const [, dispatch] = useReservationList();
  const [editState, editDispatch] = useEdit();

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const keyword = e.target.id as keyof EditType;
    let value = e.target.value;
    if (keyword === "phoneNumber") {
      value = validatePhoneNumber(e.target.value);
    }
    editDispatch({
      type: "SET_RESERVATION",
      keyword,
      value,
    });
  };

  const onIncreasePerson = () => {
    editDispatch({
      type: "SET_RESERVATION",
      keyword: "personCount",
      value: editState.personCount + 1,
    });
  };

  const onDecreasePerson = () => {
    if (editState.personCount <= 1) return;
    editDispatch({
      type: "SET_RESERVATION",
      keyword: "personCount",
      value: editState.personCount - 1,
    });
  };

  const onTableItemChange = (target: LabelTable, isDelete?: boolean) => {
    if (editState.reservedTable.length === 0) {
      const newReservedTable = [
        {
          floor: target.floor,
          table: [target.table],
        },
      ];
      return editDispatch({
        type: "SET_RESERVATION",
        keyword: "reservedTable",
        value: newReservedTable,
      });
    }
    const existedFloor = editState.reservedTable.find(
      ({ floor }) => floor === target.floor
    );
    if (existedFloor) {
      if (isDelete) {
        const filteredTable = editState.reservedTable.reduce(
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
          editState.reservedTable
        );
        return editDispatch({
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
      const deletedOldFloor = editState.reservedTable.filter(
        ({ floor }) => floor !== target.floor
      );
      return editDispatch({
        type: "SET_RESERVATION",
        keyword: "reservedTable",
        value: [...deletedOldFloor, addTable].sort((a, b) => a.floor - b.floor),
      });
    }
    const addFloorTable = {
      floor: target.floor,
      table: [target.table],
    };
    return editDispatch({
      type: "SET_RESERVATION",
      keyword: "reservedTable",
      value: [...editState.reservedTable, addFloorTable].sort(
        (a, b) => a.floor - b.floor
      ),
    });
  };

  const onDelete = () => {
    dispatch({ type: "DELETE_RESERVATION", reservation: editState });
    editDispatch({ type: "INITIALIZE" });
    navigate(-1);
  };

  const onToggleIsSeated = () => {
    dispatch({ type: "FILTER_RESERVATION", reservation: editState });
    editDispatch({ type: "INITIALIZE" });
    navigate(-1);
  };

  useEffect(() => {
    dispatch({ type: "EDIT_RESERVATION", reservation: editState });
  }, [editState, dispatch]);

  if (!editState.id) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <ReserveForm titlePrefix="Edit">
      <InfoInputTop
        clientName={editState.clientName}
        phoneNumber={editState.phoneNumber}
        reservedDate={editState.reservedDate}
        onNameChange={onChange}
        onPhoneChange={onChange}
      />
      <InfoInputMid
        personCount={editState.personCount}
        reservedTable={editState.reservedTable}
        onIncreasePerson={onIncreasePerson}
        onDecreasePerson={onDecreasePerson}
        onTableItemChange={onTableItemChange}
      />
      <InfoInputBottom text={editState.notes} onTextChange={onChange} />
      <div className="flex space-x-3">
        <Button className="w-16 from-default to-white" onClick={onDelete}>
          <Trash />
        </Button>
        <Button
          type="submit"
          className="flex-1 text-white from-highlight to-red-400"
          onClick={onToggleIsSeated}>
          Seated
        </Button>
      </div>
    </ReserveForm>
  );
};
