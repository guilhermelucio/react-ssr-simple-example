import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import Routes from './Routes';
import rootReducer from './reducers';

// Creating a custom instance of access
// axios will then send request to the app server
const axiosInstance = axios.create({
    baseURL: '/api'
});

// createStore(reducer, initialState, middlewares)
const store = createStore(
    rootReducer,
    window.INITIAL_STATE || {},
    // Creating a custom instance of redux thunk passing an extra argument
    // necessary because two different configurations need to happen by the
    // browser and the server using axios.
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

// Rendering the app on the client, this will replace the content
// of the file the server created and React will take care of the application from there

// Hydrating the template
// When using a traditional React App, the method to be called is render,
// but the term to re-render a ssr template is call hydrate
// An attempt to use render will result in this warning for now.
// Warning: render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working 
// in React v17. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                { renderRoutes(Routes) }
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#app')
);
