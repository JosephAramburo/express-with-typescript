import express = require('express');

interface MessageJson{
    text : string;
}

const app : express.Application = express();

app.get('', (req, res) => {
    let message : MessageJson = {
        text : 'HOLAA!'
    };
    res.json(message);
});


app.listen(3000, () => {
    console.info(`Run server on port : 3000`);
});