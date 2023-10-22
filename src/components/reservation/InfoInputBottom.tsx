import { TextArea, TextBox } from "@src/components/common";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export const InfoInputBottom = ({
  text,
  onTextChange,
}: InfoInputBottomProps) => {
  const [isWritable, setIsWritable] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(
        textareaRef.current.value.length,
        textareaRef.current.value.length
      );
    }
  }, [isWritable]);
  return (
    <div className="h-full mb-12">
      {isWritable ? (
        <TextArea
          className="h-full"
          ref={textareaRef}
          onBlur={() => setIsWritable((prev) => !prev)}
          value={text}
          onChange={onTextChange}
        />
      ) : (
        <TextBox text={text} onClick={() => setIsWritable((prev) => !prev)} />
      )}
    </div>
  );
};

interface InfoInputBottomProps {
  text: string | undefined;
  onTextChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
