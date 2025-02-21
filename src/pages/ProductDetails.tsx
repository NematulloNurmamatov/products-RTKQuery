import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store/Store";
import { useGetProductDetailsQuery } from "../services/ApiService";

export default function ProductDetails() {

    const navigate = useNavigate();



    const { id } = useParams();
    console.log(id, "Product Details");

    const { auth } = useSelector((state: RootState) => state)
    console.log(auth, "jdkjdskjds");

    const { data, isLoading } = useGetProductDetailsQuery(id);
    console.log(data);

    if (isLoading)
        return <h1 className="text-3xl text-center mt-32 font-bold text-gray-700">Loading...</h1>;

    return (
        <div className="container">
            <p className="mb-2"> Product Details - {id}</p>

            <button className="bg-red-500 text-white p-2 rounded w-[100px] mb-2 cursor-pointer" onClick={() => navigate(-1)}>EXIT</button>

            <div className="flex gap-10 bg-white p-10 shadow-md items-center rounded-xl">
                <img className="w-50" src={data.image} alt={data.title} />
                <div>
                    <h1 className="font-black text-2xl mb-3">{data.title}</h1>
                    <p className="text-gray-700">{data.description}</p>
                    <p className="text-gray-500">Price: {data.price}</p>
                </div>
            </div>
        </div>
    )
}
