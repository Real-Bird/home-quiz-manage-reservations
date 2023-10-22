import { ReactNode } from "react";
import Close from "@assets/icons/close.svg?react";

export const Header = ({ children, onModalClose }: HeaderProps) => {
  return (
    <div className="grid grid-cols-3 items-center w-full bg-white rounded-t-md p-4">
      {children}
      <div className="justify-self-end cursor-pointer" onClick={onModalClose}>
        <Close />
      </div>
    </div>
  );
};

interface HeaderProps {
  children: ReactNode;
  onModalClose?: () => void;
}
