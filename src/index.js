import express from 'express';
import renderer from './helpers/renderer';

const app = express();

// Tell express that the public folder is an available directory for the world
app.use(express.static('public'));

app.get('*', (req, res) => {
    // abstraction (helper) of the React renderer
    // the url must be passed, it's gonna be used by the StaticRouter
    const html = renderer(req);

    // Send back the html
    res.send(html);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
