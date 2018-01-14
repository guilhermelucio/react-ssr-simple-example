import React from 'react';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import Routes from '../client/Routes';

module.exports = (req, store) => {
    // Get the first template string that will be rendered immediately by the user
    const content = renderToString(
        // The context attribute is required by the StaticRouter, it's use for
        // redirecting and other process by react-router
        // The location property expects the current url, but StaticRouter doesn't
        // know how to fetch the parameters, thus this must be passed down by express
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>
                    { renderRoutes(Routes) }
                </div>
            </StaticRouter>
        </Provider>
    );

    // Append the static raw html to a template string, that will create subsequent requests
    // to start react
    const html = `
        <html>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
            </head>
            <body>
                <div id="app">${content}</div>
                <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <script src="client.js"></script>
            </body>
        </html>
    `;

    return html;
}