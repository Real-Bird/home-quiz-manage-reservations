import { cls } from "@src/utils";
import { InputHTMLAttributes, forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, required, ...inputAttrs }, inputRef) => {
    const { id, disabled } = inputAttrs;
    const onInputFocus = () => {
      if (inputRef && "current" in inputRef && inputRef.current) {
        inputRef.current.focus();
      }
    };
    return (
      <div className="relative" onClick={onInputFocus}>
        <input
          ref={inputRef}
          className={cls(
            disabled ? "bg-gray-300" : "",
            "peer block w-full appearance-none bg-transparent px-3 py-2 text-sm text-zinc-800 focus:outline-none rounded-md border-2 border-zinc-300 focus:border-highlight"
          )}
          placeholder=" "
        />
        <label
          className="absolute top-0 translate-x-3 z-10 transform text-[0.75rem] text-zinc-300 duration-300 peer-placeholder-shown:translate-y-1/2 peer-focus:-translate-y-3 bg-white peer-focus:text-highlight cursor-text"
          htmlFor={id}>
          {placeholder} {required && <span className="text-highlight">*</span>}
        </label>
      </div>
    );
  }
);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  required?: boolean;
}
