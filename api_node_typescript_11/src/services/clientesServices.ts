import { Cliente, ClienteNuevo } from '../typesClientes'
import { clientesSchema } from '../schema/clientes.schema'
import { conexion } from './connectionService'

export const obtieneClientes = async () => {
    try {
        const [results] = await conexion.query("SELECT * FROM clientes")
        return results
    } catch(err) {
        return {error: "No se puede obtener a los clientes"}
    }
}

export const encuentraCliente = async (id:number) => {
    try {
        const [results] = await conexion.query('SELECT * FROM clientes WHERE id = ? LIMIT 1', id)
        return results
    } catch (error) {
        return {error:"No se encuentra ese cliente"}
    }
} 
 
// export const encuentraPersonalTelefono = async (telefono:string) => {
//     try {
//         const [results] = await conexion.query('SELECT * FROM personal WHERE telefono=? AND estatus=1', telefono)
//         return results
//     } catch (error) {
//         return {error: "No se puede encontrar al personal con ese numero de telefono"}
//     }
// }

export const agregarClientes = async (nuevo:ClienteNuevo) => {
    try {
        const validacion = clientesSchema.safeParse({
            nombre: nuevo.nombre,
            direccion: nuevo.direccion,
            telefono: nuevo.telefono,
            correo: nuevo.correo,
            ciudad: nuevo.ciudad
        })
        if (!validacion.success) {
            console.log(validacion.error)
            return {error: validacion.error}
        }
        const [results] = await conexion.query('INSERT INTO clientes(nombre, direccion, telefono, correo, ciudad) VALUES(?, ?, ?, ?, ?)', [nuevo.nombre, nuevo.direccion, nuevo.telefono, nuevo.correo, nuevo.ciudad])
        return results
    } catch (error) {
        console.log(error)
        return {error: "No se puede agregar al cliente"}
    }
}

export const modificarCliente = async (modificado:Cliente) => {
    try {
        const validacion = clientesSchema.safeParse({
            nombre: modificado.nombre,
            direccion: modificado.direccion,
            telefono: modificado.telefono,
            correo: modificado.correo,
            ciudad: modificado.ciudad
        })
        if (!validacion.success) {
            return {error: validacion.error}
        }
        const [results] = await conexion.query('UPDATE clientes SET nombre = ?, direccion = ?, telefono = ?, correo = ?, ciudad = ? WHERE id = ?', [modificado.nombre, modificado.direccion, modificado.telefono, modificado.correo, modificado.ciudad, modificado.id])
        return results
    } catch (error) {
        return {error: "No se puede modificar"}
    }
}

export const borrarCliente = async (id:number) => {
    try {
        const [results] = await conexion.query('DELETE FROM clientes WHERE id = ?', [id])
        return results
    } catch (error) {
        return {error: "No se puede borrar el cliente"}
    }
}