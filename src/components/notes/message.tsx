import { ArrowDownToLine, MoreHorizontal, Pin } from 'lucide-react';
import { useState } from 'react';
import FooterMessage from './footer';
import { useSelector } from 'react-redux';
import { filterLatestDates } from '@/lib/relativeDate';

type Note = {
  title: string;
  content: string;
  createdAt: string;
};

type notesState = {
  notesSlice: {
    notes: Note[];
    loading: boolean;
    error: null | string;
    indexOpen: number;
  };
};

function Message() {
  const [isLoading, setIsLoading] = useState(false);

  const dataNotes = useSelector((state: notesState) => state.notesSlice.notes);
  const dataIndex = useSelector((state: notesState) => state.notesSlice.indexOpen);

  const sortDateToNewest = filterLatestDates(dataNotes);

  const NotesOpen = sortDateToNewest[dataIndex] as Note;
  const contentNotes = NotesOpen?.content;
  const titleNotes = NotesOpen?.title;
  const dateNotes = NotesOpen?.createdAt;

  // console.log(NotesOpen, 'mssg');

  return (
    <div className="flex flex-col-reverse justify-between w-full h-[93vh]">
      {/* footer */}
      <FooterMessage isLoading={isLoading} setIsLoading={setIsLoading} />
      {/* main */}
      {NotesOpen && (
        <div className="h-screen -mb-16">
          <div className="flex flex-col w-full ">
            <div className="flex flex-row justify-between px-8 ">
              <div className="w-1/3 flex flex-row gap-4 fixed">
                <button>
                  <Pin className="text-zinc-300" />
                </button>
                <button>
                  <ArrowDownToLine className="text-zinc-300" />
                </button>
              </div>
              <div className="w-full flex flex-row justify-end gap-4">
                <button className="text-zinc-300">Updates</button>
                <button className="text-zinc-300">Share</button>
                <button className="text-zinc-300">
                  <MoreHorizontal />
                </button>
              </div>
            </div>
          </div>
          <div className=" h-full ">
            {/* <div className="flex items-center  justify-center ">
              <div className="h-full w-2/3">
                <img className="w-full h-full object-cover rounded-3xl" src="/mainmssg2.png" alt="" />
              </div>
            </div> */}
            <div key={dateNotes} className="pl-8 flex flex-col gap-4  mt-10">
              <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-semibold">{titleNotes}</h1>
                <div className="flex flex-row w-full mt-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-300">
                    <img
                      src="https://i.pinimg.com/564x/7f/d7/d8/7fd7d85c9536008ee741d14c563a023b.jpg"
                      className="w-full h-full object-cover rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-center ml-3">
                    <p className="text-sm">G4tes</p>
                    <p className="text-sm">1 min read · 19 hours ago</p>
                  </div>
                </div>
                {/* <p className="text-sm">By G4tes · 19 hours ago</p> */}
              </div>
              <p
                className="overflow-y-auto h-[60vh]"
                dangerouslySetInnerHTML={{
                  __html: contentNotes
                }}
              ></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Message;
