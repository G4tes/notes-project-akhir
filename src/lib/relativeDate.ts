import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

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
  if (!Array.isArray(notes) || notes.length === 0) {
    return notes;
  }
  const sortedNotes = notes
    .filter((note) => note.createdAt)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  return sortedNotes;
}
