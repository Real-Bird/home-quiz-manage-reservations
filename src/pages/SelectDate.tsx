import { ModalOverview } from "@src/components/common";
import { SelectDate } from "@src/components/reservation";
import { useNavigate } from "react-router-dom";

export const SelectDateModal = () => {
  const navigate = useNavigate();
  return (
    <ModalOverview onOutsideClick={() => navigate(-1)}>
      <SelectDate />
    </ModalOverview>
  );
};
