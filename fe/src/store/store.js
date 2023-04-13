import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../services/Auth/apiSlice';
import authReducer from '../services/Auth/AuthSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});
