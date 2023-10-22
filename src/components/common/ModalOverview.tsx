import { ReactNode } from "react";

export const ModalOverview = ({
  children,
  onOutsideClick,
}: ModalOverviewProps) => {
  return (
    <div
      className="fixed w-full h-screen bg-black bg-opacity-70"
      onClick={() => {
        if (typeof onOutsideClick === "function") {
          onOutsideClick();
        }
      }}>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-72 max-w-3xl w-full h-[70%]"
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

interface ModalOverviewProps {
  children: ReactNode;
  onOutsideClick?: () => void;
}
