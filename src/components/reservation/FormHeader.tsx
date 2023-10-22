import { Button, Header } from "@src/components/common";
import BackspaceArrow from "@assets/icons/keyboard_backspace.svg?react";
import { useNavigate } from "react-router-dom";

export const FormHeader = ({ onModalClose, titlePrefix }: FormHeader) => {
  const navigate = useNavigate();
  return (
    <Header onModalClose={onModalClose}>
      <Button
        className="w-10 h-10 from-default to-white"
        onClick={() => navigate(-1)}>
        <BackspaceArrow />
      </Button>
      <h2 className="text-common text-center text-2xl">
        {titlePrefix} Reservation
      </h2>
    </Header>
  );
};

interface FormHeader {
  onModalClose?: () => void;
  titlePrefix: string;
}
