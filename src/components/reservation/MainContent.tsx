import { ReactNode } from "react";

export const MainContent = ({ children }: MainContentProps) => {
  return (
    <div className="h-full bg-default rounded-b-md px-2 py-3">
      <div className="grid grid-cols-3 gap-3 overflow-y-scroll h-full px-2 py-2">
        {children}
      </div>
    </div>
  );
};

interface MainContentProps {
  children: ReactNode;
}
