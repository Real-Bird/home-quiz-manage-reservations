import { Button } from "@src/components/common";
import { ReserveForm } from "@src/components/reservation/ReserveForm";
import { useState } from "react";
import {
  InfoInputBottom,
  InfoInputMid,
  InfoInputTop,
} from "@src/components/reservation";
import { emptyReservationData } from "@src/mockup/reservationData";

export const NewReservationModal = ({
  onModalClose,
}: NewReservationModalProps) => {
  const [text, setText] = useState("");

  const hasEmpty = Object.values(emptyReservationData).includes(undefined);

  return (
    <ReserveForm
      onModalClose={onModalClose}
      onGoBack={onModalClose}
      title="New">
      <InfoInputTop />
      <InfoInputMid />
      <InfoInputBottom
        text={text}
        onTextChange={(e) => setText(e.target.value)}
      />
      <Button
        className="w-full h-28 from-highlight to-red-400 text-default"
        disabled={hasEmpty}>
        Save
      </Button>
    </ReserveForm>
  );
};

interface NewReservationModalProps {
  onModalClose: () => void;
}
