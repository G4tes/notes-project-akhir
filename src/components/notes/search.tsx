import { Search } from "lucide-react";
import { Input } from "../ui/input";
import debounce from "debounce";
interface SearchNotesProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function SearchNotes({ setSearch }: SearchNotesProps) {
  const debounceSetSearch = debounce((value: string) => {
    setSearch(value);
  }, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounceSetSearch(e.target.value);
  };

  return (
    <div className="border rounded-full w-96 flex flex-row-reverse justify-center items-center">
      <Search height={18} width={24} className="mx-3 " />
      <Input
        onChange={handleInputChange}
        placeholder="Search Notes"
        className="text-black w-full text-center rounded-l-full focus:outline-none focus:ring-2"
      />
    </div>
  );
}

export default SearchNotes;
