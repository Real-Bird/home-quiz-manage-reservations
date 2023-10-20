import { cls } from "@src/utils";
import { TextareaHTMLAttributes, forwardRef } from "react";

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...textareaAttrs }, textareaRef) => {
    return (
      <textarea
        className={cls(
          className ? className : "",
          "focus:border-highlight border-zinc-300 text-zinc-800 border-2 rounded-md shadow-custom w-full bg-transparent focus:outline-none appearance-none overflow-auto resize-none px-3 py-2"
        )}
        ref={textareaRef}
        {...textareaAttrs}></textarea>
    );
  }
);

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}
