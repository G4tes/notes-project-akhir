import CardNotes from '@/components/notes/card';
import SearchNotes from '@/components/notes/search';
import { handleIndexOpen, setSearchNotes } from '@/stores/slices/notesSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type Note = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
};

type notesState = {
  notesSlice: {
    notes: Note[];
    searchNotes: boolean;
    loading: boolean;
    error: null | string;
    indexOpen: number;
  };
};

function Home() {
  const [search, setSearch] = useState('');
  const notesList = useSelector((state: notesState) => state.notesSlice.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    const condition = search ? true : false;

    const updateSearch = setTimeout(() => {
      dispatch(handleIndexOpen(-2));
      dispatch(setSearchNotes(condition));
    }, 10);

    return () => {
      clearTimeout(updateSearch);
    };
  }, [search]);

  return (
    <div className="w-full md:h-[93vh] flex flex-col gap-4">
      <div className="md:relative fixed flex flex-col gap-2 md:mx-0 bg-zinc-900 -mx-4  w-full -mt-6 py-4 border-b-[1px]">
        <div className="flex flex-row justify-center w-full md:px-0 px-4">
          <SearchNotes setSearch={setSearch} />
        </div>

        <h1 className="text-4xl font-semibold text-white px-4 md:px-0">Notes</h1>
      </div>
      <div className="md:mt-0 mt-24 h-full">
        <CardNotes notesList={notesList} search={search} />
      </div>
    </div>
  );
}

export default Home;
