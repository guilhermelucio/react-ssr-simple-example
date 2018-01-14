import { API, FETCH_USERS, FETCH_CURRENT_USER } from '../constants';

export const fetchUsers = () => {
    return async (dispatch, getState, api) => {
        const res = await api.get(`/users`);
        dispatch({
            type: FETCH_USERS,
            payload: res.data
        });
    }
}

export const fetchCurrentUser = () => {
    return async (dispatch, getState, api) => {
        const res = await api.get('/current_user');
        dispatch({
            type: FETCH_CURRENT_USER,
            payload: res.data
        })
    };
};
