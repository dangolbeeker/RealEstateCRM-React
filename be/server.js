const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use (bodyParser.json());

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Yo'});

});

app.post('/api/data', (req, res) => {
    consol.log(req.body);
    res.send(
        'Post Request: ${req.body.post}',
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));