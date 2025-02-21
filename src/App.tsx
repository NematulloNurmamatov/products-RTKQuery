import { useSelector } from "react-redux";
import { RootState } from "./store/Store";
import { useGetProductsQuery } from "./services/ApiService";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()

  const { auth } = useSelector((state: RootState) => state);
  console.log(auth);

  const { data, isLoading } = useGetProductsQuery({});
  console.log(data);

  if (isLoading)
    return <h1 className="text-3xl text-center mt-32 font-bold text-gray-700">Loading...</h1>;


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1>Navbar</h1>
      <Outlet />
    </div>
  );
}

export default App;
