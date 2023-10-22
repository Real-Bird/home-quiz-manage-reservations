import Alarm from "@assets/icons/alarm_on.svg?react";
import Today from "@assets/icons/today.svg?react";
import {
  AdjustOption,
  TargetFormat,
  cls,
  getAdjustTime,
  setInitialDate,
} from "@src/utils";
import { HTMLAttributes, MouseEvent, forwardRef, useState } from "react";
import { UpDownBtn } from "@src/components/reservation/UpDownBtn";
import { CustomDateView } from "@src/components/common/CustomDateView";
import { Button } from "@src/components/common";
import Trash from "@assets/icons/trash.svg?react";
import { useNavigate } from "react-router-dom";

export const SelectDate = forwardRef<HTMLDivElement, SelectDateProps>(
  ({ initialDate = new Date(), ...attrs }, resultRef) => {
    const [dateState, setDateState] = useState(() =>
      setInitialDate(initialDate)
    );
    const navigate = useNavigate();

    const onChangeTime = (e: MouseEvent<HTMLButtonElement>) => {
      const type = e.currentTarget.dataset["type"] as TargetFormat;
      const option = e.currentTarget.dataset["opt"] as AdjustOption;
      setDateState((prev) => getAdjustTime(prev, type, option));
    };
    const onChangeHourMinute = (date: Date) => {
      setDateState(setInitialDate(date));
    };
    const onChangeMonthDay = (date: Date) => {
      setDateState(date);
    };

    const setCustomDayClassName = (date: Date): string => {
      const dateString = date.toDateString();
      const initialDateString = initialDate.toDateString();
      const resultDateString = dateState.toDateString();
      const today =
        dateString === initialDateString
          ? initialDateString !== resultDateString
            ? "bg-highlight hover:bg-highlight hover:brightness-110 opacity-90 text-gray-600 font-medium rounded-md"
            : "bg-highlight hover:bg-highlight hover:brightness-90"
          : "";
      const selectedDay =
        dateString === resultDateString
          ? "bg-highlight hover:bg-highlight hover:brightness-90 text-white font-bold rounded-md"
          : "";
      return cls(today, selectedDay);
    };

    return (
      <div
        ref={resultRef}
        {...attrs}
        data-result={dateState}
        className="bg-white w-full p-4 max-w-xs rounded-md mx-auto">
        <div className="grid grid-cols-[15%_85%] items-center gap-y-3 mb-3">
          <Alarm className="place-self-center" />
          <CustomDateView
            selected={dateState}
            onChange={onChangeHourMinute}
            minDate={initialDate}
            showTimeSelect
            showTimeSelectOnly
            locale={"en"}
            dateFormat={"hh:mm aa"}
            dayClassName={setCustomDayClassName}
          />
          <Today className="place-self-center" />
          <CustomDateView
            selected={dateState}
            onChange={onChangeMonthDay}
            minDate={initialDate}
            dateFormat={"MMM dd"}
            dayClassName={setCustomDayClassName}
          />
          <div className="flex items-center px-5 space-x-11 col-start-2">
            <div className="flex items-center space-x-3">
              <UpDownBtn
                type="hour"
                onClick={onChangeTime}
                content={dateState
                  .toLocaleTimeString("en", {
                    hour: "2-digit",
                    hour12: true,
                  })
                  .slice(0, 2)
                  .padStart(2, "0")}
              />
              <span className="text-2xl">:</span>
              <UpDownBtn
                type="min"
                onClick={onChangeTime}
                content={dateState
                  .toLocaleTimeString("en", {
                    minute: "2-digit",
                  })
                  .slice(0, 2)
                  .padStart(2, "0")}
              />
            </div>
            <UpDownBtn
              contentClassName="text-base leading-8"
              type="notation"
              onClick={onChangeTime}
              content={dateState
                .toLocaleTimeString("en", { hour12: true })
                .slice(-2)}
            />
          </div>
        </div>
        <div className="flex space-x-3">
          <Button
            className="w-16 from-default to-white"
            onClick={() => navigate(-1)}>
            <Trash />
          </Button>
          <Button
            className="flex-1 text-white from-highlight to-red-600"
            onClick={() => navigate(-1)}>
            Save
          </Button>
        </div>
      </div>
    );
  }
);

interface SelectDateProps extends HTMLAttributes<HTMLDivElement> {
  initialDate?: Date;
}
