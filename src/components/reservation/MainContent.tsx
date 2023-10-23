import { cls } from "@src/utils";
import { ReactNode } from "react";

export const MainContent = ({ children }: MainContentProps) => {
  const isNull = !children || (Array.isArray(children) && !children.length);
  return (
    <div className="h-5/6 bg-default rounded-b-md px-2 py-3">
      <div
        className={cls(
          isNull ? "before:content-[''] before:w-56" : "",
          "grid grid-cols-3 gap-3 overflow-y-scroll h-full px-2 py-2"
        )}>
        {children}
      </div>
    </div>
  );
};

interface MainContentProps {
  children: ReactNode;
}
