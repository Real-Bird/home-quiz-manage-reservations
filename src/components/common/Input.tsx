import { cls } from "@src/utils";
import { InputHTMLAttributes, forwardRef, useRef } from "react";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, required, ...inputAttrs }, inputRef) => {
    const { id, disabled, value } = inputAttrs;
    const localRef = useRef<HTMLInputElement>(null);
    const onInputFocus = () => {
      if (localRef && localRef.current) {
        localRef.current.focus();
      } else if (inputRef && "current" in inputRef && inputRef.current) {
        inputRef.current.focus();
      }
    };
    return (
      <div className="relative" onClick={onInputFocus}>
        <input
          ref={inputRef ? inputRef : localRef}
          type="text"
          className={cls(
            disabled ? "bg-gray-300" : "",
            "peer block w-full appearance-none bg-transparent px-3 py-2 text-sm text-zinc-800 focus:outline-none rounded-md border-2 border-zinc-300 focus:border-highlight"
          )}
          placeholder={" "}
          {...inputAttrs}
        />
        <label
          className={cls(
            value ? "-translate-y-3" : "",
            "absolute top-0 translate-x-3 z-10 transform text-[0.75rem] text-zinc-300 duration-300 peer-placeholder-shown:translate-y-1/2 peer-focus:-translate-y-3 bg-white peer-focus:text-highlight cursor-text px-1"
          )}
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
