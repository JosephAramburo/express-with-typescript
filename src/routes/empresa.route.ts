import express = require('express');
import { EmpresaController } from '../controllers/empresa.controller';

export const register = (app : express.Application) => {
    const controller : EmpresaController = new EmpresaController();

    app.post('/empresa', controller.save);
};