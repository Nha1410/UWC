import { BACKEND_DOMAIN } from '../../utils/api';
import axios from 'axios';

export const store = async (form) => {
    const api = `${BACKEND_DOMAIN}api/vehicle/store`;
    try {
        const res = await axios.post(api, form);
        if (res.status !== 200) {
            console.log(res.status);
        } else {
            return res.data;
        }
    } catch (error) {
        console.log(error);
    }
};
