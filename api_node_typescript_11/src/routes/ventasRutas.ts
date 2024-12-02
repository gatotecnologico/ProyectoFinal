import express ,{Request, Response } from "express"
import * as ventasServices from '../services/ventasServices'
const router = express.Router()

//http://localhost:3001/api/ventas/
router.get('/', async (_req:Request, res:Response) => {
    let ventas = await ventasServices.obtieneVentas()
    res.send(ventas)
})

//http://localhost:3001/api/ventas/1
router.get('/:id', async (req:Request, res:Response) => {
   let venta = await ventasServices.encuentraVenta(Number(req.params.id))
   res.send(venta) 
})

router.post('/', async (req:Request, res:Response) => {
    try {
        console.log(req.body)
        const {id_articulo, id_cliente, cantidad, precio, IVA, subtotal, total, fechaVenta} = req.body
        const nuevo = await ventasServices.agregarVenta({
            id_articulo, 
            id_cliente, 
            cantidad, 
            precio, 
            IVA, 
            subtotal, 
            total, 
            fechaVenta
        })
        res.send(nuevo)
    } catch (error) {
            res.send('No se puede agregar la venta')
        res.status(400).send('Error en los datos')
    }
})

//http://localhost:3001/api/ventas/id/
router.put('/', async (req:Request, res:Response) => {
    try {
        const {id, id_articulo, id_cliente, cantidad, precio, IVA, subtotal, total, fechaVenta} = req.body
        const modificado = await ventasServices.modificarVenta({
            id,
            id_articulo, 
            id_cliente, 
            cantidad, 
            precio, 
            IVA, 
            subtotal, 
            total, 
            fechaVenta
        })
        res.send(modificado)
    } catch (error) {
        res.status(400).send("Error en los datos")
    }
})

//http://localhost:3001/api/ventas/
router.delete('/', async (req:Request, res:Response) => {
    try {
        const {id} = req.body
        const eliminado = await ventasServices.borrarVenta(Number(id))
        res.send(eliminado)
    } catch (error) {
        res.status(400).send("Error en los datos")
    }
})

export default router
