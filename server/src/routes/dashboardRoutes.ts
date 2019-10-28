import { Router } from 'express';
import {dashboardController} from '../controllers/dashboardController';

class DashboardRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/', dashboardController.list);
        this.router.get('/:id', dashboardController.getOne);
        this.router.post('/', dashboardController.create);
        this.router.delete('/:id',dashboardController.delete);
        this.router.put('/:id', dashboardController.update);
    }
}

const dashboardRoutes = new DashboardRoutes();
export default dashboardRoutes.router;