import express                  = require('express');
import dotenv                   = require('dotenv');
import path                     = require('path');
import cors                     = require('cors');
import bodyParser               = require('body-parser');
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
const empresaR = require('./routes/empresa.route');

//###################################
//##    Registers Routes           ##
//###################################
homeR.register(app);
// empresaR.register(app);
app.use('/empresa',empresaR);

//###################################
//##    Catch 404                   ##
//###################################
app.use(function(req, res , next) {
    return res.status(404).json({ message: "Recurso no encontrado" });
});

//###################################
//##    Set PORT                   ##
//###################################
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.info(`Run server on port : ${PORT}`);
});