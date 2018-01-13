import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';

module.exports = () => {
    // Get the first template string that will be rendered immediately by the user
    const content = renderToString(<Home />);

    // Append the static raw html to a template string, that will create subsequent requests
    // to start react
    const html = `
        <html>
            <head>
            </head>
            <body>
                <div id="app">${content}</div>
                <script src="client.js"></script>
            </body>
        </html>
    `;

    return html;
}