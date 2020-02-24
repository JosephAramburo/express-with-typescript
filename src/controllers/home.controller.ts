import express = require('express');
import { Home } from '../interfaces/home.interface';
const User = require('../models/user.model');
import { Error } from 'sequelize/types';

function home(req:any, res:any){
    const limit = 5;
    let offset = 1 * limit;

    User.findAndCountAll({where:{}, order : [], limit : limit, offset : offset}).then((data : any) => {
            
        let messagev : Home = {
            message : 'HOLA BIENVENIDO HOME',
            data : data
        };
        return res.status(200).json(messagev);
    }).catch((err: Error) => {
    
    });

    // User.findAll<User>({}).then((data : User[]) => {
    //     console.log(data);
    // }).catch((err: Error) => {

    // });
}

module.exports = {
    home
}