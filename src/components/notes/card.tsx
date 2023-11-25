import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

import { relativeDate } from "@/lib/relativeDate";
import { truncated } from "@/lib/truncated";

interface CardProps {
  notesList: {
    title: string;
    content: string;
    createdAt: string;
    isOpen: boolean;
  }[];
}

function CardNotes({ notesList }: CardProps) {
  return (
    <div className="overflow-y-auto">
      {notesList.map((note) => {
        const relativeDateString = relativeDate(note.createdAt);
        const truncatedContent = truncated(note.content, 150);

        return (
          <>
            <Card className="mr-4 h-48 mt-3 rounded-3xl flex flex-col justify-between bg-zinc-200">
              <CardHeader>
                <CardTitle>{note.title}</CardTitle>
                <CardDescription className="pt-2">
                  {truncatedContent}
                </CardDescription>
              </CardHeader>

              <CardFooter>
                <p className="text-sm">{relativeDateString}</p>
              </CardFooter>
            </Card>
          </>
        );
      })}
    </div>
  );
}

export default CardNotes;
