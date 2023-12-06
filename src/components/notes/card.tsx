import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

import { filterLatestDates, relativeDate } from '@/lib/relativeDate';
import { truncated } from '@/lib/truncated';
import { handleIndexOpen } from '@/stores/slices/notesSlice';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

interface CardProps {
  search?: string;
  notesList: {
    title: string;
    content: string;
    createdAt: string;
    isOpen: boolean;
  }[];
}

function CardNotes({ notesList, search }: CardProps) {
  if (search !== '') {
    notesList = notesList?.filter((note) => {
      return note.title.toLowerCase().includes(search!.toLowerCase());
    });
  }

  const [openedNoteIndex, setOpenedNoteIndex] = useState(-1);
  const dispatch = useDispatch();
  const handleNoteClick = (index: number) => {
    setTimeout(() => {
      if (index === openedNoteIndex) {
        setOpenedNoteIndex(-1);
      } else {
        setOpenedNoteIndex(index);
      }
    }, 300);
  };

  useEffect(() => {
    dispatch(handleIndexOpen(openedNoteIndex));
  }, [openedNoteIndex]);

  useEffect(() => {
    if (openedNoteIndex !== -1) {
      const final = openedNoteIndex + 1;
      setOpenedNoteIndex(final);
      dispatch(handleIndexOpen(final));
    }
  }, [notesList.length]);

  const sortDateToNewest = filterLatestDates(notesList);

  return (
    <div className="overflow-y-auto h-full">
      {notesList.length === 0
        ? 'Not found'
        : sortDateToNewest.map((note, id) => {
            const relativeDateString = relativeDate(note.createdAt);
            const truncatedContent = truncated(note.content, 150);
            const truncatedTitle = truncated(note.title, 15);

            return (
              <div key={id}>
                <Card
                  onClick={() => handleNoteClick(id)}
                  className={`cursor-pointer mr-4 h-48 mt-3 rounded-3xl flex flex-col justify-between ${
                    openedNoteIndex == id ? 'bg-zinc-700 text-white' : 'bg-zinc-200 '
                  }`}
                >
                  <CardHeader>
                    <CardTitle>{truncatedTitle}</CardTitle>
                    <CardDescription className="pt-2 overflow-hidden h-14">
                      {truncatedContent.replace(/<br\s*\/?>/g, ' ')}
                    </CardDescription>
                  </CardHeader>

                  <CardFooter>
                    <p className="text-sm">{relativeDateString}</p>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
    </div>
  );
}

export default CardNotes;
