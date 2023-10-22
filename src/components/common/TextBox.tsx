import { HTMLAttributes } from "react";

export const TextBox = ({ text, ...attrs }: TextBoxProps) => {
  return (
    <div
      className="border-zinc-300 text-zinc-800 border-2 rounded-md shadow-custom w-full bg-transparent overflow-auto px-3 py-2 h-full cursor-text"
      {...attrs}>
      <div className="after:content-[''] after:bg-[url(../assets/icons/edit.svg)] after:w-4 after:h-4 after:inline-block after:bg-cover after:ml-1 break-all whitespace-normal">
        {text ? (
          text
        ) : (
          <span className="text-xs text-zinc-300">Add Note...</span>
        )}
      </div>
    </div>
  );
};

interface TextBoxProps extends HTMLAttributes<HTMLDivElement> {
  text: string | undefined;
}
