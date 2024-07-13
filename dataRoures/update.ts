import{updateUser,getOneUser }from'../dataController'
import { Request, Response } from "express"
async function update(req: Request, res: Response) {
    const id = req.params.id;
    const {name, age}=req.body;
    if(name&&+age){
        const user=await getOneUser(id);
        if(!user){
            res.status(404).send('Rout not found')
        }else{
            const updatedUser= await updateUser(name, age,id)
            res.status(200).send(JSON.stringify(updatedUser));
        }
    }

    
    
}
export=update