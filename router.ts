import create = require('./dataRoures/create')
import getAll = require('./dataRoures/getAll')
import getOne = require('./dataRoures/getOne')
import remove = require('./dataRoures/remove')
import update = require('./dataRoures/update')

import { Request, Response } from "express"
import * as express from "express"
const router = express.Router()

router.use(express.urlencoded({ extended: true }));

router.get('/', (req: Request, res: Response)=>{
    getAll(req,res)
})
router.post('/', (req: Request, res: Response)=>{
    create(req,res)
})
router.get('/:id', (req: Request, res: Response)=>{
    getOne(req,res)
})
router.put('/:id', (req: Request, res: Response)=>{
    update(req,res)
})
router.delete('/:id', (req: Request, res: Response)=>{
    remove(req,res)
})

export=router