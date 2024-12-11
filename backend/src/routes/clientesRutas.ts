import express ,{Request, Response } from "express"
import * as clientesServices from '../services/clientesServices'
const router = express.Router()

//http://localhost:3001/api/clientes/
router.get('/', async (_req:Request, res:Response) => {
    let clientes = await clientesServices.obtieneClientes()
    res.send(clientes)
})

//http://localhost:3001/api/clientes/1
router.get('/:id', async (req:Request, res:Response) => {
   let cliente = await clientesServices.encuentraCliente(Number(req.params.id))
   res.send(cliente) 
})

//  router.get('/telefono/:telefono', async (req:Request, res:Response) => {
//      let personal = await clientesServices.encuentraPersonalTelefono(req.params.telefono)
//      res.send(personal) 
//   })

router.post('/', async (req:Request, res:Response) => {
    try {
        const {nombre, direccion, telefono, correo, ciudad} = req.body
        const nuevo = await clientesServices.agregarClientes({
            nombre,
            direccion,
            telefono,
            correo,
            ciudad 
        })
        res.send(nuevo)
    } catch (error) {
        res.send('No se puede agregar el cliente')
        res.status(400).send('Error en los datos')
    }
})

//http://localhost:3001/api/clientes/id/
router.put('/', async (req:Request, res:Response) => {
    try {
        const {id, nombre, direccion, telefono, correo, ciudad} = req.body
        const modificado = await clientesServices.modificarCliente({
            id,
            nombre,
            direccion,
            telefono,
            correo,
            ciudad
        })
        res.send(modificado)
    } catch (error) {
        res.status(400).send("Error en los datos")
    }
})

//http://localhost:3001/api/clientes/
router.delete('/', async (req:Request, res:Response) => {
    try {
        const {id} = req.body
        const eliminado = await clientesServices.borrarCliente(Number(id))
        res.send(eliminado)
    } catch (error) {
        res.status(400).send("Error en los datos")
    }
})

export default router
