import { ApiRest } from '../class/ApiRest';
import { Response, Request } from 'express';
import { Error, Model  } from 'sequelize';
import { ResponseInterface } from '../interfaces/Response.interface';
import { EmpresaInterface } from '../interfaces/empresa.interface';
const Empresa = require('../models/empresa.model');

export class EmpresaController implements ApiRest{
    constructor(){
    }

    get(req: Request, res: Response): void {
        throw new Error("Method not implemented.");
    }

    getById(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }

    save(req: Request, res: Response): void {

        let params : EmpresaInterface = {
            cliente         : 1,
            estatus         : 1,
            nombreComercial : 'Nombre Comercial',
            razonSocial     : 'Razon social',
            rfc             : '',
            userIdAdd       : 1            
        };
console.log("params",params);

        Empresa.create(params).then((data:any) => {
            if(!data){
                let msg : ResponseInterface = {
                    message : 'Problemas al crear un nuevo registro'
                };

                return res.status(409).json(msg);
            }

            return res.status(201).json(data);
        }).catch((err: Error) => {
            let msg : ResponseInterface = {
                message : err
            };
            return res.status(409).json(msg);
        });
    }

    update(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }

    delete(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
}