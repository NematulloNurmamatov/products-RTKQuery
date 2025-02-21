import { Outlet } from "react-router-dom";

function App() {



    return <h1 className="text-3xl text-center mt-32 font-bold text-gray-700">Loading...</h1>;


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1>Navbar</h1>
      <Outlet />
    </div>
  );
}

export default App;
