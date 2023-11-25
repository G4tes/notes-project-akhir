import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function relativeDate(date: string) {
  const relativeDateString = dayjs(date).fromNow();
  return relativeDateString;
}
