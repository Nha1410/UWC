import { BACKEND_DOMAIN } from '../../utils/api';

import axios from 'axios';

export const getUsersyRole = async (role, limit) => {
    const api = `${BACKEND_DOMAIN}api/user/users-by-role`;
    try {
        const res = await axios.get(api, {
            params: {
                role,
                limit,
            },
        });
        console.log(res);
        if (res.status !== 200) {
            console.log(res.status);
        } else {
            return res.data;
        }
    } catch (error) {
        console.log(error);
    }
};
