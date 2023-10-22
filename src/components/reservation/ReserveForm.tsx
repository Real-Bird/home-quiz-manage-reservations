import { ModalOverview } from "@src/components/common";
import { FormHeader } from "@src/components/reservation/FormHeader";
import { FormHTMLAttributes, ReactNode } from "react";

export const ReserveForm = ({
  children,
  onModalClose,
  onGoBack,
  ...formAttrs
}: ReserveForm) => {
  return (
    <ModalOverview onOutsideClick={onModalClose}>
      <FormHeader
        onGoBack={onGoBack}
        titlePrefix="New"
        onModalClose={onModalClose}
      />
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
  onModalClose: () => void;
  onGoBack: () => void;
  title: "New" | "Edit";
}
