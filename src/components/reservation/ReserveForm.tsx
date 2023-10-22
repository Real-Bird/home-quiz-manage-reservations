import { OutletContextProps } from "@src/App";
import { ModalOverview } from "@src/components/common";
import { FormHeader } from "@src/components/reservation/FormHeader";
import { FormHTMLAttributes, ReactNode } from "react";
import { useOutletContext } from "react-router-dom";

export const ReserveForm = ({
  children,
  titlePrefix,
  ...formAttrs
}: ReserveForm) => {
  const { onModalClose } = useOutletContext<OutletContextProps>();
  return (
    <ModalOverview onOutsideClick={onModalClose}>
      <FormHeader titlePrefix={titlePrefix} onModalClose={onModalClose} />
      <form
        className="h-full bg-white rounded-b-md px-4 py-3 flex flex-col gap-8"
        onSubmit={(e) => e.preventDefault()}
        {...formAttrs}>
        {children}
      </form>
    </ModalOverview>
  );
};

interface ReserveForm extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  titlePrefix: "New" | "Edit";
}
