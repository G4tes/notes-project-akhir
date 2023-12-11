import { Trash, FileDown, Copy, Code2, HelpCircle, Volume2, Hash, StickyNote, PlusCircle } from 'lucide-react';

function Sidebar() {
  return (
    <div className="text-white h-full flex flex-col justify-between ">
      <div className="w-full overflow-y-auto h-[80%]">
        <div className="my-6 flex flex-col gap-3">
          <div className="flex flex-row items-center mt-2">
            <Copy height={18} width={18} />
            <div className="ml-1.5">Templates</div>
          </div>
          <div className="flex flex-row items-center mt-2">
            <FileDown height={18} width={18} />
            <div className="ml-1.5">Import</div>
          </div>
          <div className="flex flex-row items-center mt-2">
            <Trash height={18} width={18} />
            <div className="ml-1.5">Trash</div>
          </div>
        </div>
        <h2 className="text-gray-500 uppercase">workspace</h2>
        <div className="my-1 flex flex-col gap-3">
          <div className="flex flex-row items-center mt-2">
            <StickyNote height={18} width={18} className="rotate-90" />
            <div className="ml-1.5">Notes</div>
          </div>
          <div className="flex flex-row items-center mt-2">
            <Hash height={18} width={18} />
            <div className="ml-1.5">Tasks</div>
          </div>
          <div className="flex flex-row items-center mt-2">
            <Volume2 height={18} width={18} />
            <div className="ml-1.5">Announcements</div>
          </div>
          <div className="flex flex-row items-center mt-2">
            <HelpCircle height={18} width={18} />
            <div className="ml-1.5">Questions</div>
          </div>
          <div className="flex flex-row items-center mt-2">
            <Code2 height={18} width={18} />
            <div className="ml-1.5">Development</div>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-4 flex flex-row items-center my-3">
        <PlusCircle height={18} width={18} />
        <div className="ml-1.5">New Page</div>
      </div>
    </div>
  );
}

export default Sidebar;
