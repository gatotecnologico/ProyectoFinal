import express ,{Request, Response } from "express"
import * as comprasServices from '../services/comprasServices'
const router = express.Router()

//http://localhost:3001/api/compras/
router.get('/', async (_req:Request, res:Response) => {
    let compras = await comprasServices.obtieneCompras()
    res.send(compras)
})

//http://localhost:3001/api/compras/1
router.get('/:id', async (req:Request, res:Response) => {
   let venta = await comprasServices.encuentraCompras(Number(req.params.id))
   res.send(venta) 
})

//http://localhost:3001/api/compras
router.post('/', async (req:Request, res:Response) => {
    try {
        const {id_articulo, cantidad, precio, IVA, subtotal, total, fechaCompra} = req.body
        const nuevo = await comprasServices.agregarCompra({
            id_articulo, 
            cantidad, 
            precio, 
            IVA, 
            subtotal, 
            total, 
            fechaCompra
        })
        res.send(nuevo)
    } catch (error) {
            res.send('No se puede agregar la compra')
        res.status(400).send('Error en los datos')
    }
})

//http://localhost:3001/api/compras/id/
router.put('/', async (req:Request, res:Response) => {
    try {
        const {id, id_articulo, cantidad, precio, IVA, subtotal, total, fechaCompra} = req.body
        const modificado = await comprasServices.modificarCompra({
            id,
            id_articulo, 
            cantidad, 
            precio, 
            IVA, 
            subtotal, 
            total, 
            fechaCompra
        })
        res.send(modificado)
    } catch (error) {
        res.status(400).send("Error en los datos")
    }
})

//http://localhost:3001/api/compras/
router.delete('/', async (req:Request, res:Response) => {
    try {
        const {id} = req.body
        const eliminado = await comprasServices.borrarCompra(Number(id))
        res.send(eliminado)
    } catch (error) {
        res.status(400).send("Error en los datos")
    }
})

export default router
