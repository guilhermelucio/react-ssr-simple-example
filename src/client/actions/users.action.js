import { API, FETCH_USERS } from '../constants';

export const fetchUsers = () => {
    return async (dispatch, getState, api) => {
        const res = await api.get(`/users`);
        dispatch({
            type: FETCH_USERS,
            payload: res.data
        });
    }
}
