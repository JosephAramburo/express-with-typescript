import express = require('express');
import { HomeC } from '../controllers/home.controller';
// const controller = require('../controllers/home.controller');

export const register = (app : express.Application) => {
    const homeC : HomeC = new HomeC();

    app.get('/', homeC.get);
    app.get('/:id', homeC.getById);
};