import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import UsersList, { loadData } from './components/users/UsersList.container';

// When using react-router-config to help working with server side rendering,
// specially on cases where data needs to be loaded in order to make a component
// to function properly. JSX routes is not supported when doing this.
export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        loadData, // used because of the ssr
        path: '/users',
        component: UsersList
    }
];
