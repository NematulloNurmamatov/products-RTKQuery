// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { RootState } from "@reduxjs/toolkit/query";
import { useGetProductsQuery } from "../services/ApiService";
// import { RootState } from "../store/Store";

function Products() {
    const navigate = useNavigate()

    // const { auth } = useSelector((state:RootState ) => state);

    const { data, isLoading } = useGetProductsQuery({});
    console.log(data);

    if (isLoading)
        return <h1 className="text-3xl text-center mt-32 font-bold text-gray-700">Loading...</h1>;


    const productsDetails = (item: any) => {
        console.log(item);
        navigate(`/product-details/${item.id}`);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            <h1 className="text-4xl font-extrabold text-amber-500 mb-8">Product List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 max-w-6xl">
                {
                    data?.map((item: any) => (
                        <div
                            key={item?.id}
                            onClick={() => productsDetails(item)}
                            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 cursor-pointer"
                        >
                            <img className="w-full h-[200px] object-cover mb-4 rounded-lg" src={item?.image} alt={item?.title} />
                            <h2 className="text-xl font-semibold text-gray-800">{item?.title}</h2>
                        </div>

                    ))
                }
            </div>
        </div>
    );
}

export default Products;
