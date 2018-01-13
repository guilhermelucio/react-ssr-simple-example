import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

// Tell express that the public folder is an available directory for the world
app.use(express.static('public'));

app.get('/', (req, res) => {
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

    // Send back the html
    res.send(html);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
