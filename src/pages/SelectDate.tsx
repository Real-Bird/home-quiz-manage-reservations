import { ModalOverview } from "@src/components/common";
import { SelectDate } from "@src/components/reservation";

export const SelectDateModal = ({ onModalClose }: SelectDateModalProps) => {
  return (
    <ModalOverview onOutsideClick={onModalClose}>
      <SelectDate />
    </ModalOverview>
  );
};

interface SelectDateModalProps {
  onModalClose: () => void;
}
