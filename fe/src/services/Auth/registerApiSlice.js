import { apiSlice } from './apiSlice';

export const logoutApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (credentials) => {
                console.log(credentials);
                return {
                    url: '/api/user/register',
                    method: 'POST',
                    body: { ...credentials },
                };
            },
        }),
    }),
});

export const { useRegisterMutation } = logoutApiSlice;
