import { apiSlice } from './apiSlice';

export const logoutApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        logout: builder.mutation({
            query: (credentials) => ({
                url: '/api/user/logout',
                method: 'POST',
                body: { ...credentials },
            }),
        }),
    }),
});

export const { useLogoutMutation } = logoutApiSlice;
