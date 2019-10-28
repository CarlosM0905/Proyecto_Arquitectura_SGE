import {Request, Response} from 'express';
import db from '../database';

class DashboardController{

    public async list(req: Request, res:Response){
       await db.query('SELECT * FROM empleado', (err,result,fields)=>{
           if(err) throw err;
           res.json(result);
           console.log(result);
           console.log(fields);
       });
       
    }
    
    public async create (req:Request, res: Response): Promise<void>{
        await db.query('INSERT INTO empleado SET ?', [req.body]);
        res.json({text: 'Empleado guardado'});
    }

    public async delete(req:Request, res:Response){
        const {id} = req.params;
        await db.query('DELETE FROM empleado WHERE emp_id = ?', [id]);
        res.json({message: 'El empleado fue despedido'});
    }

    public async update(req:Request, res:Response): Promise<void>{
        const {id} = req.params;
        await db.query('UPDATE empleado SET ? WHERE emp_id = ?',[req.body, id]);
        res.json({text:"El empleado fue actualizado"});
    }

    public async getOne(req:Request, res:Response): Promise<any> {
        const {id} = req.params;
        await  db.query('SELECT * FROM empleado WHERE emp_id = ?', [id], (err,result,fields)=>{
            if(err) throw err;
            console.log(result[0]);
            res.status(404).json({text: 'Empleado encontrado'});
        });
        res.status(404).json({text: 'Empleado no encontrado'});
    }

}

export const dashboardController = new DashboardController()
export default dashboardController;