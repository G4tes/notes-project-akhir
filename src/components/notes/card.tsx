import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

import { filterLatestDates, relativeDate } from '@/lib/relativeDate';
import { truncated } from '@/lib/truncated';
import { handleIndexOpen } from '@/stores/slices/notesSlice';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FooterMessage from './footer';

type Note = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
};

interface CardProps {
  search?: string;
  notesList: Note[];
}

type notesState = {
  notesSlice: {
    notes: Note[];
    searchNotes: boolean;
    loading: boolean;
    error: null | string;
    indexOpen: number;
  };
};

function CardNotes({ notesList, search }: CardProps) {
  const dispatch = useDispatch();

  const [openedNoteIndex, setOpenedNoteIndex] = useState(-2);
  const [isLoading, setIsLoading] = useState(false);
  const dataIndex = useSelector((state: notesState) => state.notesSlice.indexOpen);
  const useSearch = useSelector((state: notesState) => state.notesSlice.searchNotes);

  const handleNoteClick = (index: number) => {
    setTimeout(() => {
      if (index === openedNoteIndex) {
        setOpenedNoteIndex(-2);
      } else {
        setOpenedNoteIndex(index);
      }
    }, 300);
  };

  if (search !== '') {
    notesList = notesList?.filter((note) => {
      return note.title.toLowerCase().includes(search!.toLowerCase());
    });
  }

  useEffect(() => {
    dispatch(handleIndexOpen(openedNoteIndex));
  }, [openedNoteIndex]);

  useEffect(() => {
    console.log(dataIndex, 'new');
    if (useSearch && openedNoteIndex !== -2) {
      setOpenedNoteIndex(-2);
    } else if (dataIndex === -2) {
      setOpenedNoteIndex(-2);
    } else {
      const final = openedNoteIndex + 1;
      setOpenedNoteIndex(final);
      dispatch(handleIndexOpen(final));
    }
  }, [notesList.length]);

  const sortDateToNewest = filterLatestDates(notesList) as Note[];

  return (
    <div className=" md:overflow-y-auto md:h-full h-screen my-6 md:my-0">
      <div className="h-full mb-4">
        {notesList.length === 0 ? (
          <div className="mt-2 h-screen">Not found</div>
        ) : (
          sortDateToNewest.map((note, id) => {
            const relativeDateString = relativeDate(note.createdAt);
            const truncatedContentDesktop = truncated(note.content, 150);
            const truncatedContentIpad = truncated(note.content, 110);
            const truncatedContentMobile = truncated(note.content, 100);
            const truncatedTitle = truncated(note.title, 15);

            return (
              <div key={id}>
                <Card
                  onClick={() => (search ? handleNoteClick(note.id) : handleNoteClick(id))}
                  className={`cursor-pointer lg:mr-4 h-48 mt-3 rounded-3xl flex flex-col justify-between ${
                    search
                      ? note.id == dataIndex
                        ? 'bg-zinc-700 text-white'
                        : 'bg-zinc-200 '
                      : id == dataIndex
                      ? 'bg-zinc-700 text-white'
                      : 'bg-zinc-200 '
                  }`}
                >
                  <CardHeader>
                    <CardTitle>{truncatedTitle}</CardTitle>
                    <CardDescription className="pt-2 overflow-hidden h-20">
                      <span className="hidden md:block lg:hidden">{truncatedContentMobile}</span>
                      <span className="block md:hidden">{truncatedContentIpad}</span>
                      <span className="hidden lg:block">{truncatedContentDesktop}</span>
                    </CardDescription>
                  </CardHeader>

                  <CardFooter>
                    <p className="text-sm">{relativeDateString}</p>
                  </CardFooter>
                </Card>
              </div>
            );
          })
        )}
      </div>
      <div className="relative ">
        <div className="md:hidden fixed bottom-0 right-0 mr-4 mb-4 ">
          <FooterMessage isLoading={isLoading} setIsLoading={setIsLoading} />
        </div>
      </div>
    </div>
  );
}

export default CardNotes;
