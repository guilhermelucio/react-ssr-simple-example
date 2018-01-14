import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import { API } from './client/constants';
import createStore from './helpers/createStore';

const app = express();

// Proxy any attempt to /api
// This is gonna be used to make authenticated requests from both, browser and the server
// using the authentication stored on the cookies
app.use(
    '/api',
    proxy(API, {
        proxyReqOptDecorator(options) { // this project specific configuration
            options.headers['x-forwarded-host'] = 'localhost:3000';
            return options;
        }
    })
);

// Tell express that the public folder is an available directory for the world
app.use(express.static('public'));

app.get('*', (req, res) => {
    // The store will be executed here because the goal is to load
    // data much earlier than when the response is being sent
    const store = createStore(req);

    // Figure it which route the user intends to access
    const matchedRoutes = matchRoutes(Routes, req.path);
    const routePromises = matchedRoutes.map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    });

    Promise.all(routePromises).then(() => {
        // abstraction (helper) of the React renderer
        // the url must be passed, it's gonna be used by the StaticRouter
        const html = renderer(req, store);
    
        // Send back the html
        res.send(html);
    });

});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
