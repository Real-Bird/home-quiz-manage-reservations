export function cls(...classnames: string[]) {
  return classnames.join(" ");
}

export type TargetTime = Date;
export type TargetFormat = "hour" | "min" | "notation";
export type AdjustOption = "inc" | "dec" | undefined;

export const setInitialDate = (date: TargetTime) => {
  const zeroOrthirty = date.getMinutes() < 30 ? 0 : 30;
  date.setMinutes(zeroOrthirty);
  return new Date(date);
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
