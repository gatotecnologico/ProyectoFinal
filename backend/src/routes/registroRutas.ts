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

router.post('/', async (req:Request, res:Response) => {
    try {
        const {idPersonal, fecha, hora, movimiento} = req.body
        const nuevo = await registroServices.agregarRegistro({
            idPersonal,
            fecha,
            hora,
            movimiento
        })
        res.send(nuevo)
    } catch (error) {
        console.log(error)
        res.send('No se puede agregar el registro')
        res.status(400).send('Error en los datos')
    }
})

//http://localhost:3001/api/registro/id/
router.put('/', async (req:Request, res:Response) => {
    try {
        const {id, idPersonal, fecha, hora, movimiento} = req.body
        const modificado = await registroServices.modificarRegistro({
            id,
            idPersonal,
            fecha,
            hora,
            movimiento
        })
        res.send(modificado)
    } catch (error) {
        res.status(400).send("Error en los datos")
    }
})

//http://localhost:3001/api/registro/
router.delete('/', async (req:Request, res:Response) => {
    try {
        const {id} = req.body
        const eliminado = await registroServices.borrarRegistro(Number(id))
        res.send(eliminado)
    } catch (error) {
        res.status(400).send("Error en los datos")
    }
})

export default router
