import CardNotes from "@/components/notes/card";
import SearchNotes from "@/components/notes/search";
import { useState } from "react";
import { useSelector } from "react-redux";

type Note = {
  title: string;
  content: string;
  createdAt: string;
  isOpen: boolean;
};

type notesState = {
  notesSlice: {
    notes: Note[];
    loading: boolean;
    error: null | string;
  };
};

function Home() {
  const [search, setSearch] = useState("");
  const notesList = useSelector((state: notesState) => state.notesSlice.notes);

  console.log(notesList);

  return (
    <div className="w-full h-[93vh] flex flex-col gap-4 ">
      <div className="flex flex-row justify-center  ">
        <SearchNotes setSearch={setSearch} />
      </div>

      <h1 className="text-4xl font-semibold text-white">Notes</h1>
      <CardNotes notesList={notesList} search={search} />
    </div>
  );
}

export default Home;
