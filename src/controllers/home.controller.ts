// import express = require('express');
import { Response, Request } from 'express';
import { Home } from '../interfaces/home.interface';
const User = require('../models/user.model');
// import { Error } from 'sequelize/types';
import { ApiRest } from '../class/ApiRest';

export class HomeC implements ApiRest{   

    constructor(){}

    get(req:Request, res:Response):void{
        const limit     : number = 5;
        let messagev    : Home;
        let status      : number = 200;        
        let offset      : number = 1 * limit;
        
        User.findAndCountAll({where:{}, order : [], limit : limit, offset : offset}).then((data : any) => {
            messagev = {
                message : 'HOLA BIENVENIDO HOME!',
                data : data
            };
            return res.status(status).json(messagev);
        }).catch((err: Error) => {
            status = 409;
            messagev = {
                message : 'HOLA BIENVENIDO HOME!',
                data : err
            };
            return res.status(status).json(messagev); 
        });

        // new Promise((reject, resolve) => {
           
        // }).then(()=> {
        //     return res.status(status).json(messagev);
        // }).catch(()=> {
        //     return res.status(status).json(messagev);
        // });
    
        
        
    }

    getById(req: Request, res: Response): Response {
        console.log(req.params);

        const ID = req.params.id || null;

        if(ID === null){
            return res.status(409).json({message:"No se encontro ID"});
        }

        User.findByPk(Number.parseInt(ID)).then((data:any) => {
            return res.status(200).json(data);
        }).catch((err: Error) => {           
            return res.status(409).json({message: err}); 
        });
    }
    save(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    update(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    delete(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
}


// function home(req:any, res:any){
//     const limit = 5;
//     let offset = 1 * limit;

//     User.findAndCountAll({where:{}, order : [], limit : limit, offset : offset}).then((data : any) => {
            
//         let messagev : Home = {
//             message : 'HOLA BIENVENIDO HOME!',
//             data : data
//         };
//         return res.status(200).json(messagev);
//     }).catch((err: Error) => {
    
//     });
// }

// module.exports = {
//     home
// }