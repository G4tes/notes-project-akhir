import { ArrowDownToLine, ArrowLeft, FileEdit, MoreHorizontal, Pin, Share2, Trash2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useDispatch } from 'react-redux';
import { handleIndexOpen, removeNote } from '@/stores/slices/notesSlice';

interface HeaderNotesProps {
  dateNotes: string;
}
function HeaderNotes({ dateNotes }: HeaderNotesProps) {
  const dispatch = useDispatch();
  function handleBackToHome() {
    setTimeout(() => {
      dispatch(handleIndexOpen(-2));
    }, 300);
  }

  function handleDelete() {
    dispatch(handleIndexOpen(-2));
    setTimeout(() => {
      dispatch(removeNote(dateNotes));
    }, 300);
  }

  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-row justify-between px-2 md:px-8  ">
        <div className="w-1/3 flex flex-row gap-4 fixed ">
          <button onClick={handleBackToHome} className="md:hidden block">
            <ArrowLeft className="text-zinc-300" />
          </button>
          <button>
            <Pin className="text-zinc-300" />
          </button>
          <button>
            <ArrowDownToLine className="text-zinc-300" />
          </button>
        </div>
        <div className="w-full flex flex-row justify-end gap-4 -mb-4 md:mb-0">
          {/* <button className="text-zinc-300">Updates</button>
      <button className="text-zinc-300">Share</button> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-zinc-300">
                <MoreHorizontal />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mr-3">
              <DropdownMenuLabel>
                {' '}
                <div className="flex flex-row w-full">
                  <div className="w-10 h-10 rounded-full bg-zinc-300">
                    <img
                      src="https://i.pinimg.com/564x/7f/d7/d8/7fd7d85c9536008ee741d14c563a023b.jpg"
                      className="w-full h-full object-cover rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-center ml-3">
                    <p className="text-sm">G4tes</p>
                  </div>
                </div>
              </DropdownMenuLabel>

              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleDelete}>
                Delete
                <DropdownMenuShortcut>
                  <Trash2 size={16} />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Edit
                <DropdownMenuShortcut>
                  <FileEdit size={16} />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Share
                <DropdownMenuShortcut>
                  <Share2 className="rotate-180" size={16} />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Move to...</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Task</DropdownMenuItem>
                      <DropdownMenuItem>Announcements</DropdownMenuItem>
                      <DropdownMenuItem>Questions</DropdownMenuItem>
                      <DropdownMenuItem>Development</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default HeaderNotes;
