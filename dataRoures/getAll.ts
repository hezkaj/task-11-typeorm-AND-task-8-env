import{getAllUsers}from'../dataController'
import { Request, Response } from "express"
async function getAll(req: Request, res: Response) {
    const users=await getAllUsers();
    res.status(200).send(JSON.stringify(users));
}
export=getAll