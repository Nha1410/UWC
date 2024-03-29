import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from './AuthSlice';
import { BACKEND_DOMAIN } from '../../utils/api';

const baseQuery = fetchBaseQuery({
    baseUrl: BACKEND_DOMAIN,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    console.log(result);
    if (result?.error && result?.error.originalStatus === 403) {
        console.log('sending refresh token');
        const refreshResult = await baseQuery('/refresh', api, extraOptions);
        console.log(refreshResult);
        if (refreshResult?.data) {
            const user = api.getState().auth.user;
            api.dispatch(setCredentials({ ...refreshResult.data, user }));
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logOut());
        }
    }
    console.log(result);
    return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryithReauth,
    endpoints: (builder) => ({}),
});
