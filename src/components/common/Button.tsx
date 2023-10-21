import { cls } from "@src/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

export const Button = ({ children, className, ...btnAttrs }: ButtonProps) => {
  const { disabled } = btnAttrs;
  return (
    <button
      className={cls(
        disabled
          ? "opacity-50 shadow-none cursor-default"
          : "hover:brightness-90 active:shadow-none",
        "py-3 shadow-custom font-semibold cursor-pointer rounded-md flex justify-center items-center bg-gradient-to-t",
        className ? className : ""
      )}
      {...btnAttrs}>
      {children}
    </button>
  );
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}
