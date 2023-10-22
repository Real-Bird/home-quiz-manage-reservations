import { Input } from "@src/components/common";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";

export const CustomDateView = ({
  ...datePickerAttrs
}: ReactDatePickerProps) => {
  return (
    <ReactDatePicker
      wrapperClassName="w-full bg-transparent px-3 py-4 rounded-md border-2 border-zinc-300 focus-within:border-highlight border-solid"
      customInput={
        <Input className="appearance-none focus:outline-none bg-transparent text-sm text-zinc-800" />
      }
      {...datePickerAttrs}
    />
  );
};
