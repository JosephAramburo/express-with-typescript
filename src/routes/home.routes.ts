import express = require('express');
const controller = require('../controllers/home.controller');

export const register = (app : express.Application) => {
    app.get('/', controller.home);
};