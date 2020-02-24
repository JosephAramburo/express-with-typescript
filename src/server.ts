import express = require('express');
import dotenv =  require('dotenv');
import path = require('path');
import cors = require('cors');
import bodyParser = require('body-parser');
const app : express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(express.json());

//###################################
//##    Enable Cors                ##
//###################################
app.use(cors());

//###################################
//##    Set Environment            ##
//###################################
dotenv.config({
    path : path.resolve(__dirname,`../.env.${process.env.NODE_ENV}`)
});

//###################################
//##    Connection to Database     ##
//###################################
const db = require('./configs/database.config');
db.authenticate().then(() => {
    console.log('Connection has been established successfully');
})
.catch((err:any) => {
      console.error('Unable to connect to the database');
});


//###################################
//##    Import Routes              ##
//###################################
import homeR    = require('./routes/home.routes');
import empresaR = require('./routes/empresa.route');

//###################################
//##    Registers Routes           ##
//###################################
homeR.register(app);
empresaR.register(app);

//###################################
//##    Set PORT                   ##
//###################################
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.info(`Run server on port : ${PORT}`);
});