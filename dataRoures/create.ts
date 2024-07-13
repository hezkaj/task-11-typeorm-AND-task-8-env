import{createUser}from'../dataController'
import { Request, Response } from "express"
async function create(req: Request, res: Response) {
    const {name, age}=req.body;
    if(name&&+age){
        const user=await createUser(name,age)
        res.status(200).send(JSON.stringify(user))
    }
    else{
        res.status(400).send('Name and age are reqired')
       }
}
export=create
    
