import { ModalOverview } from "@src/components/common";
import { SelectDate } from "@src/components/reservation";
import { useEdit } from "@src/contexts/edit";
import { useResister } from "@src/contexts/resister";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const SelectDateModal = () => {
  const navigate = useNavigate();
  const [resisterState, resisterDispatch] = useResister();
  const [editState, editDispatch] = useEdit();
  const dateRef = useRef<HTMLDivElement>(null);
  const onSaveDate = () => {
    if (dateRef.current) {
      if (editState.id) {
        editDispatch({
          type: "SET_RESERVATION",
          keyword: "reservedDate",
          value: dateRef.current.dataset["result"],
        });
      } else {
        resisterDispatch({
          type: "SET_RESERVATION",
          keyword: "reservedDate",
          value: dateRef.current.dataset["result"],
        });
      }
      navigate(-1);
    }
  };

  const onDeleteDate = () => {
    if (editState.id) {
      editDispatch({
        type: "SET_RESERVATION",
        keyword: "reservedDate",
        value: undefined,
      });
    } else {
      resisterDispatch({
        type: "SET_RESERVATION",
        keyword: "reservedDate",
        value: undefined,
      });
    }
    navigate(-1);
  };
  return (
    <ModalOverview>
      <SelectDate
        initialDate={editState.reservedDate ?? resisterState.reservedDate}
        ref={dateRef}
        onSaveDate={onSaveDate}
        onDeleteDate={onDeleteDate}
      />
    </ModalOverview>
  );
};
