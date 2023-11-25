import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="px-10 flex flex-row gap-4 overflow-hidden">
      <div className="flex flex-col h-screen py-3 border-r">
        <img src="/logo.svg" className="w-36 " alt="" />
        <div className="w-56 h-full">
          <Sidebar />
        </div>
      </div>
      <div className="w-full py-6 text-white flex flex-row">
        <div className="w-1/2 ">
          <Home />
        </div>
        <div className="w-1/2 bg-red-400">asdas</div>
      </div>
    </div>
  );
}

export default App;
