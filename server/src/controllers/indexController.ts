import {Request, Response} from 'express';

class IndexController{

    public index(req: Request, res:Response){
        res.json({
            text: 'El sistema esta en index'
        });
    }

}

export const indexController = new IndexController();
export default indexController;