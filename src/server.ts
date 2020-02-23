import express = require('express');
import dotenv =  require('dotenv');
import path = require('path');

interface MessageJson{
    text : string;
}

const app : express.Application = express();
console.log(process.env.NODE_ENV);
dotenv.config({
    path : path.resolve(__dirname,`../.env.${process.env.NODE_ENV}`)
});

app.get('', (req, res) => {

console.log(process.env.URL);
    let message : MessageJson = {
        text : 'HOLAA!'
    };
    res.json(message);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.info(`Run server on port : ${PORT}`);
});