import { Button } from "@src/components/common";
import { ReserveForm } from "@src/components/reservation/ReserveForm";
import { useState } from "react";
import {
  InfoInputBottom,
  InfoInputMid,
  InfoInputTop,
} from "@src/components/reservation";
import { reservationData } from "@src/mockup/reservationData";
import Trash from "@assets/icons/trash.svg?react";

export const EditReservationModal = ({
  onModalClose,
}: EditReservationModalProps) => {
  const {
    clientName,
    phoneNumber,
    reservedDate,
    personCount,
    reservedTableNumber,
    reservedFloor,
    notes,
  } = reservationData[0];
  const [text, setText] = useState(notes);

  return (
    <ReserveForm
      onModalClose={onModalClose}
      onGoBack={onModalClose}
      title="Edit">
      <InfoInputTop
        clientName={clientName}
        phoneNumber={phoneNumber}
        reservedDate={reservedDate}
      />
      <InfoInputMid
        personCount={personCount}
        tableNumber={reservedTableNumber}
        floor={reservedFloor}
      />
      <InfoInputBottom
        text={text}
        onTextChange={(e) => setText(e.target.value)}
      />
      <div className="flex space-x-3">
        <Button className="w-16 from-default to-white">
          <Trash />
        </Button>
        <Button className="flex-1 text-white from-highlight to-red-400">
          Seated
        </Button>
      </div>
    </ReserveForm>
  );
};

interface EditReservationModalProps {
  onModalClose: () => void;
}
