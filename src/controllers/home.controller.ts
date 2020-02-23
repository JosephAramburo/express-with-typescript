import express = require('express');
import { Home } from '../interfaces/home.interface';

function home(req:any, res:any){
    let messagev : Home = {
        message : 'HOLA BIENVENIDO HOME'
    };
    return res.status(200).json(messagev);
}

module.exports = {
    home
}