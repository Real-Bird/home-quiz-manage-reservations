import { TextareaHTMLAttributes, forwardRef } from "react";

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ ...textareaAttrs }, textareaRef) => {
  return (
    <div className="relative resize-none border-2 rounded-md shadow-custom w-full bg-transparent px-3 py-2 text-sm text-zinc-800  border-zinc-300 focus:border-highlight cursor-text h-40">
      <textarea
        className="peer focus:outline-none appearance-none overflow-auto resize-none w-full h-full"
        ref={textareaRef}
        {...textareaAttrs}></textarea>
    </div>
  );
});
