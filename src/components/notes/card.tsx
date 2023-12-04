import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

import { filterLatestDates, relativeDate } from '@/lib/relativeDate';
import { truncated } from '@/lib/truncated';

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
                <Card className="mr-4 h-48 mt-3 rounded-3xl flex flex-col justify-between bg-zinc-200">
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
