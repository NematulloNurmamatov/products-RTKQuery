import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./AuthSlice";
import { ApiClient } from "../services/ApiService";

export const store = configureStore({
    reducer: {
        auth: AuthSlice,




        [ApiClient.reducerPath]: ApiClient.reducer 
    },

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(ApiClient.middleware) 
    }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

