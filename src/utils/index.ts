export function cls(...classnames: string[]) {
  return classnames.join(" ");
}

export type TargetTime = Date;
export type TargetFormat = "hour" | "min" | "notation";
export type AdjustOption = "inc" | "dec" | undefined;

export const setInitialDate = (initialDate: TargetTime) => {
  const date = new Date(initialDate);
  const zeroOrthirty = date.getMinutes() < 30 ? 0 : 30;
  date.setMinutes(zeroOrthirty);
  return new Date(date.toISOString());
};

export const getAdjustTime = (
  time: TargetTime,
  type: TargetFormat,
  opt?: AdjustOption
) => {
  let nextTime = 0;
  if (type === "hour") {
    const hour = time.getHours();
    if (opt === "inc") {
      nextTime = hour < 23 ? hour + 1 : 0;
    } else if (opt === "dec") {
      nextTime = hour > 0 ? hour - 1 : 23;
    }
    time.setHours(nextTime);
  }
  if (type === "min") {
    const min = time.getMinutes();
    nextTime = min === 30 ? min - 30 : min + 30;
    time.setMinutes(nextTime);
  }
  if (type === "notation") {
    const notation = time.toLocaleTimeString("en", { hour12: true }).slice(-2);
    const hour =
      notation === "AM" ? time.getHours() + 12 : time.getHours() - 12;
    time.setHours(hour);
  }
  return new Date(time);
};

export const getIntlFormat = (reservedDate = new Date()) => {
  const data = new Date(reservedDate);
  const today = new Date().toLocaleDateString("en", {
    year: "2-digit",
    month: "short",
    day: "2-digit",
  });
  const reserved = data.toLocaleDateString("en", {
    year: "2-digit",
    month: "short",
    day: "2-digit",
  });
  const isToday = today === reserved;
  const min = data.getMinutes();
  const nextTime = Math.round(min / 30) * 30;
  data.setMinutes(nextTime);

  const reservedTime = new Date(data).toLocaleTimeString("en", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return isToday
    ? `Today, ${reservedTime}`
    : `${reserved.split(", ")[0]}, ${reservedTime}`;
};

export const validatePhoneNumber = (value: string) => {
  if (!value) return "";
  const validRegex = /^(\d{0,3})-?(\d{0,4})-?(\d{0,4})$/;
  if (!validRegex.test(value)) {
    return value.slice(0, -1);
  }
  const number = value.match(validRegex);

  const inputValue = number
    ? !number[2]
      ? number[1]
      : `${number[1]}-${number[2]}${number[3] ? "-" + number[3] : ""}`
    : "";
  return inputValue;
};
