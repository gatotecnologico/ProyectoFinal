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
        const {descripcion, precio, cantidadEnAlmacen, fechaCaducidad} = req.body
        const nuevo = await articulosServices.agregarArticulo({
            descripcion,
            precio, 
            cantidadEnAlmacen, 
            fechaCaducidad
        })
        res.send(nuevo)
    } catch (error) {
        console.log(error)
        res.send('No se puede agregar el articulo')
        res.status(400).send('Error en los datos')
    }
})

//http://localhost:3001/api/articulos/id/
router.put('/', async (req:Request, res:Response) => {
    try {
        const {id, descripcion, precio, cantidadEnAlmacen, fechaCaducidad} = req.body
        const modificado = await articulosServices.modificarArticulo({
            id,
            descripcion, 
            precio, 
            cantidadEnAlmacen, 
            fechaCaducidad
        })
        res.send(modificado)
    } catch (error) {
        res.status(400).send("Error en los datos")
    }
})

router.put("/compra", async (req: Request, res: Response) => {
    try {
      const {id, descripcion, precio, cantidadEnAlmacen, fechaCaducidad} = req.body
      const articulo = await articulosServices.modificarCantidad({
        id,
        descripcion,
        precio,
        cantidadEnAlmacen,
        fechaCaducidad
      }, "compra")
        res.send(articulo)
    } catch (error) {
      res.send("No se puede modificar la cantidad en almacen");
      res.status(400).send("Error en los datos");
    }
});    

router.put("/venta", async (req: Request, res: Response) => {
    try {
      const {id, descripcion, precio, cantidadEnAlmacen, fechaCaducidad} = req.body
      const articulo = await articulosServices.modificarCantidad({
        id,
        descripcion,
        precio,
        cantidadEnAlmacen,
        fechaCaducidad
      }, "venta")
      res.send(articulo)
    } catch (error) {
      console.log(error)
      res.send("No se puede modificar la cantidad en almacen");
      res.status(400).send("Error en los datos");
    }
});    

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
