import { Articulo, ArticuloNuevo  } from '../typesArticulos'
import { articulosSchema } from '../schema/articulos.schema'
import { conexion } from './connectionService'

export const obtieneArticulos = async () => {
    try {
        const [results] = await conexion.query("SELECT * FROM articulos")
        return results
    } catch(err) {
        return {error: "No se puede obtener los articulos"}
    }
}

export const encuentraArticulo = async (id:number) => {
    try {
        const [results] = await conexion.query('SELECT * FROM articulos WHERE id = ? LIMIT 1', id)
        return results
    } catch (error) {
        return {error:"No se encuentra ese articulo"}
    }
} 

export const agregarArticulo = async (nuevo:ArticuloNuevo) => {
    try {
        const validacion = articulosSchema.safeParse({
            descripcion: nuevo.descripcion,
            precio: nuevo.precio,
            cantidad: nuevo.cantidad,
            caducidad: new Date(nuevo.caducidad)
        })
        if (!validacion.success) {
            console.log(validacion.error)
            return {error: validacion.error}
        }
        const [results] = await conexion.query('INSERT INTO articulos(descripcion, precio, `cantidad en almacen`, `fecha de caducidad`) VALUES(?, ?, ?, ?)', [nuevo.descripcion, nuevo.precio, nuevo.cantidad, nuevo.caducidad])
        return results
    } catch (error) {
        console.log(error)
        return {error: "No se puede agregar el articulo"}
    }
}

export const modificarArticulo = async (modificado:Articulo) => {
    try {
        const validacion = articulosSchema.safeParse({
            descripcion: modificado.descripcion,
            precio: modificado.precio,
            cantidad: modificado.cantidad,
            caducidad: new Date(modificado.caducidad)
        })
        if (!validacion.success) {
            return {error: validacion.error}
        }
        const [results] = await conexion.query('UPDATE articulos SET descripcion = ?, precio = ?, `cantidad en almacen` = ?, `fecha de caducidad` = ? WHERE id = ?', 
            [modificado.descripcion, modificado.precio, modificado.cantidad, modificado.caducidad, modificado.id])
        return results
    } catch (error) {
        console.log(error)
        return {error: "No se puede modificar"}
    }
}

export const borrarArticulo = async (id:number) => {
    try {
        const [results] = await conexion.query('DELETE FROM articulos WHERE id = ?', [id])
        return results
    } catch (error) {
        return {error: "No se puede borrar el articulo"}
    }
}