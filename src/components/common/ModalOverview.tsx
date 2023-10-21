import { ReactNode } from "react";

export const ModalOverview = ({ children, header }: ModalOverviewProps) => {
  return (
    <div className="fixed w-full h-screen bg-black opacity-70 flex justify-center items-center">
      {header}
      {children}
    </div>
  );
};

interface ModalOverviewProps {
  children: ReactNode;
  header?: ReactNode;
}
