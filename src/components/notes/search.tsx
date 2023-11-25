import { Search } from "lucide-react";
import { Input } from "../ui/input";

function SearchNotes() {
  return (
    <div className="border rounded-full w-96 flex flex-row-reverse justify-center items-center">
      <Search height={18} width={24} className="mx-3 " />
      <Input
        placeholder="Search Notes"
        className="text-black w-full text-center rounded-l-full focus:outline-none focus:ring-2"
      />
    </div>
  );
}

export default SearchNotes;
