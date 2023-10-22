import { Button, Header } from "@src/components/common";
import BackspaceArrow from "@assets/icons/keyboard_backspace.svg?react";

export const FormHeader = ({
  onModalClose,
  onGoBack,
  titlePrefix,
}: FormHeader) => {
  return (
    <Header onModalClose={onModalClose}>
      <Button className="w-10 h-10 from-default to-white" onClick={onGoBack}>
        <BackspaceArrow />
      </Button>
      <h2 className="text-common">{titlePrefix} Reservation</h2>
    </Header>
  );
};

interface FormHeader {
  onModalClose: () => void;
  onGoBack: () => void;
  titlePrefix: string;
}
