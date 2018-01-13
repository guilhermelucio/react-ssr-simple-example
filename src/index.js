import express from 'express';
import renderer from './helpers/renderer';

const app = express();

// Tell express that the public folder is an available directory for the world
app.use(express.static('public'));

app.get('/', (req, res) => {
    // abstraction (helper) of the React renderer
    const html = renderer();

    // Send back the html
    res.send(html);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
