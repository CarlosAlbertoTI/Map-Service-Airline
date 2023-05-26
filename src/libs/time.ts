import { formatISO9075,format, add } from "date-fns";

interface addTimeInfoType {
  years?: number;
  months?: number;
  weeks?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export function DateInHourFormat(newDate: Date) {
  return formatISO9075(newDate, { representation: "time" });
}

export function DateInDateFormat(newDate: Date) {
  return format(newDate, 'MM/dd/yyyy')
}

export function addTime(newDate: Date, addTimeInfo:addTimeInfoType) {
    return add(newDate, addTimeInfo)
}
