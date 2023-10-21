import ChevronUp from "@assets/icons/chevron-up.svg?react";
import ChevronDown from "@assets/icons/chevron-down.svg?react";
import { TargetFormat, cls } from "@src/utils";
import { MouseEvent } from "react";

export const UpDownBtn = ({
  type,
  content,
  contentClassName,
  onClick,
}: UpDownBtnProps) => {
  return (
    <div className="flex flex-col space-y-2 items-center">
      <button
        data-type={type}
        data-opt="inc"
        onClick={onClick}
        data-value={content}>
        <ChevronUp />
      </button>
      <div
        className={cls(
          "text-2xl h-8 w-8 text-center",
          contentClassName ? contentClassName : ""
        )}>
        {content}
      </div>
      <button
        data-type={type}
        data-opt="dec"
        onClick={onClick}
        data-value={content}>
        <ChevronDown />
      </button>
    </div>
  );
};

interface UpDownBtnProps {
  type: TargetFormat;
  content: number | string;
  contentClassName?: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}
