import { useSelector } from 'react-redux';
import './App.css';
import Message from './components/notes/message';
import Sidebar from './components/sidebar/sidebar';
import Home from './pages/Home';

type notesState = {
  notesSlice: {
    indexOpen: number;
  };
};

function App() {
  const noteId = useSelector((state: notesState) => state.notesSlice.indexOpen);

  console.log(noteId, 'index open');
  return (
    <div className="lg:px-10 px-4 flex flex-row gap-4 md:h-screen md:overflow-hidden">
      <div className="lg:flex flex-col py-3 border-r h-full hidden">
        <img src="/logo.svg" className="w-36 " alt="" />
        <div className="md:w-56  h-full">
          <Sidebar />
        </div>
      </div>
      <div className="w-full py-6 text-white flex flex-row">
        <div className={`md:w-1/2 w-full ${noteId >= 0 ? 'md:block hidden' : 'block'}`}>
          <Home />
        </div>
        {/* <div className="w-full md:w-1/2">
          <Message />
        </div> */}
        <div className={`md:block ${noteId >= 0 ? 'block' : 'hidden'} w-full md:w-1/2`}>
          <Message />
        </div>
      </div>
    </div>
  );
}

export default App;
