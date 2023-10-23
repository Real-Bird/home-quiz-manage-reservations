import { Button, Input } from "@src/components/common";
import { getIntlFormat } from "@src/utils";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
export const InfoInputTop = ({
  clientName,
  phoneNumber,
  reservedDate,
  onNameChange,
  onPhoneChange,
}: InfoInputTopProps) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="w-full h-10">
        <Input
          label="Name"
          id="clientName"
          value={clientName}
          onChange={onNameChange}
          required
        />
      </div>
      <div className="w-full h-10">
        <Input
          label="Phone"
          id="phoneNumber"
          value={phoneNumber}
          onChange={onPhoneChange}
          required
        />
      </div>
      <div className="w-full h-10">
        <Button
          className="from-default to-white w-full h-full"
          onClick={() => navigate("/date")}>
          <span className="before:content-[''] before:bg-[url(../assets/icons/event_available.svg)] before:w-5 before:h-5 before:bg-cover before:block text-sm text-zinc-400 flex items-center gap-1">
            {reservedDate ? getIntlFormat(reservedDate) : "Select Date"}
          </span>
        </Button>
      </div>
    </div>
  );
};

interface InfoInputTopProps {
  clientName?: string;
  phoneNumber?: string;
  reservedDate?: Date;
  onNameChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onPhoneChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
