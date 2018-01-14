import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import rootReducer from '../client/reducers';
import { API } from '../client/constants/index';

export default (req) => {
    // axios configuration to send requests from the server and
    // on the clients behalf, serving as a proxy
    const axiosInstance = axios.create({
        baseURL: API,
        headers: {
            cookie: req.get('cookie') || '' // pass the cookie coming from the client
        }
    });

    // function createStore: object (reducer, initialState, middlewares)
    const store = createStore(
        rootReducer,
        {},
        applyMiddleware(thunk.withExtraArgument(axiosInstance))
    );
    return store;
};
