import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from '../header/header.component';

// route is the object matched by the route config at the Routes file
export const App = ({ route, auth }) => {
    return (
        <div>
            <Header auth={auth} />
            { renderRoutes(route.routes) }
        </div>
    );
};

export default App;
