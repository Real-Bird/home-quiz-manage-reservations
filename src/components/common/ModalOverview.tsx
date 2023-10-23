import { ReactNode } from "react";

export const ModalOverview = ({ children }: ModalOverviewProps) => {
  return (
    <div className="fixed w-full h-screen bg-black bg-opacity-70">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-3xl min-w-max w-fit h-[70%]">
        {children}
      </div>
    </div>
  );
};

interface ModalOverviewProps {
  children: ReactNode;
}
