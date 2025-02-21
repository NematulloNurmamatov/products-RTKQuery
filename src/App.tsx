import { Outlet } from "react-router-dom";

function App() {




  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1>Navbar</h1>
      <Outlet />
    </div>
  );
}

export default App;
