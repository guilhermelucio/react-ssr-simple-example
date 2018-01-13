import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Routes from './Routes';
import rootReducer from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk));

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
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.querySelector('#app')
);
