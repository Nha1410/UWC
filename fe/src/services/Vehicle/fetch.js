import { BACKEND_DOMAIN } from '../../utils/api';
import axios from 'axios';

export const fetch = async (form) => {
    const api = `${BACKEND_DOMAIN}api/vehicle/fetch`;
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
