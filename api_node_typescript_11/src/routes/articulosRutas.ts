import express ,{Request, Response } from "express"
import * as articulosServices from '../services/articulosServices'
const router = express.Router()

//http://localhost:3001/api/articulos/
router.get('/', async (_req:Request, res:Response) => {
    let articulos = await articulosServices.obtieneArticulos()
    res.send(articulos)
})

//http://localhost:3001/api/articulos/1
router.get('/:id', async (req:Request, res:Response) => {
   let articulo = await articulosServices.encuentraArticulo(Number(req.params.id))
   res.send(articulo) 
})

router.post('/', async (req:Request, res:Response) => {
    try {
        console.log(req.body)
        const {descripcion, precio, cantidad, caducidad} = req.body
        const nuevo = await articulosServices.agregarArticulo({
            descripcion,
            precio, 
            cantidad, 
            caducidad
        })
        res.send(nuevo)
    } catch (error) {
        res.send('No se puede agregar el articulo')
        res.status(400).send('Error en los datos')
    }
})

//http://localhost:3001/api/articulos/id/
router.put('/', async (req:Request, res:Response) => {
    try {
        const {id, descripcion, precio, cantidad, caducidad} = req.body
        const modificado = await articulosServices.modificarArticulo({
            id,
            descripcion, 
            precio, 
            cantidad, 
            caducidad
        })
        res.send(modificado)
    } catch (error) {
        res.status(400).send("Error en los datos")
    }
})

//http://localhost:3001/api/articulos/
router.delete('/', async (req:Request, res:Response) => {
    try {
        const {id} = req.body
        const eliminado = await articulosServices.borrarArticulo(Number(id))
        res.send(eliminado)
    } catch (error) {
        res.status(400).send("Error en los datos")
    }
})

export default router
