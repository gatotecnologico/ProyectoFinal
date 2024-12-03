import express ,{Request, Response } from "express"
import * as registroServices from '../services/registroServices'
const router = express.Router()

//http://localhost:3001/api/registro/
router.get('/', async (_req:Request, res:Response) => {
    let registros = await registroServices.obtieneRegistros()
    res.send(registros)
})

//http://localhost:3001/api/registro/1
router.get('/:id', async (req:Request, res:Response) => {
    let registro = await registroServices.encuentraRegistro(Number(req.params.id))
    res.send(registro) 
 })
 