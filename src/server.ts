import express = require('express');
import dotenv =  require('dotenv');
import path = require('path');
//routes
import homeR = require('./routes/home.routes');

interface MessageJson{
    text : string;
}

const app : express.Application = express();

app.use(express.json());

dotenv.config({
    path : path.resolve(__dirname,`../.env.${process.env.NODE_ENV}`)
});


homeR.register(app);

// app.get('', (req, res) => {

//     let message : MessageJson = {
//         text : 'HOLAA!'
//     };
//     res.json(message);
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.info(`Run server on port : ${PORT}`);
});