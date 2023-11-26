import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

interface Note {
  title: string;
  content: string;
  createdAt: string;
  isOpen: boolean;
}

dayjs.extend(relativeTime);

export function relativeDate(date: string) {
  const relativeDateString = dayjs(date).fromNow();
  return relativeDateString;
}

export function filterLatestDates(notes: Note[]) {
  const sortedNotes = notes.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return sortedNotes;
}
