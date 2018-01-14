import axios from 'axios';
import { API, FETCH_USERS } from '../constants';

export const fetchUsers = () => {
    return async (dispatch) => {
        const res = await axios.get(`${API}/users`);
        dispatch({
            type: FETCH_USERS,
            payload: res.data
        });
    }
}
