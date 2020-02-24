import { Response, Request } from 'express';

export interface ApiRest{
    get(req:Request,        res:Response) : any;
    getById(req:Request,    res:Response) : any;
    save(req:Request,       res:Response) : any;
    update(req:Request,     res:Response) : any;
    delete(req:Request,     res:Response) : any;
}