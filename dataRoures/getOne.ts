import{getOneUser}from'../dataController'
import { Request, Response } from "express"
async function getOne(req: Request, res: Response) {
    const id =req.params.id;
    const user=await getOneUser(id);
    if(!user){
        res.status(404).send('Rout not found')
    }else{
        res.status(200).send(JSON.stringify(user));
    }
}
export=getOne