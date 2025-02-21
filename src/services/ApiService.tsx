import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ApiClient = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com',
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products',
        }),
        getProductDetails: builder.query({
            query: (id) => `/products/${id}`,
        }),
    }),
})


export const { useGetProductsQuery, useGetProductDetailsQuery } = ApiClient