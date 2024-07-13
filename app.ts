import * as express from "express"
import { Request, Response } from "express"

import env = require('./config') ;
const port = env.SERVER_PORT||3000

const router = require('./router');
const app = express()

app.use('/users',router);
if (app.path()!='/users?'){
  app.all('*',(req: Request, res: Response)=>{res.end('Over page...')})
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })