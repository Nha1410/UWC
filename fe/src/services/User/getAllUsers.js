import { BACKEND_DOMAIN } from '../../utils/api';

import axios from 'axios';

export const getAllUsers = async () => {
    const api = `${BACKEND_DOMAIN}api/user/all`;
    try {
        const res = await axios.get(api);
        if (res.status !== 200) {
            console.log(res.status);
        } else {
            return res.data;
        }
    } catch (error) {
        console.log(error);
    }
};
