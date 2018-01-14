import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../client/reducers';

export default () => {
    // createStore(reducer, initialState, middlewares)
    const store = createStore(rootReducer, {}, applyMiddleware(thunk));
    return store;
};
