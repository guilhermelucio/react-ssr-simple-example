import { FETCH_USERS } from '../constants/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload;
        default:
            return state;
    }
}