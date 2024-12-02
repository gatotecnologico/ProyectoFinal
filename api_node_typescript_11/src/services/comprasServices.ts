import { Compra, CompraNueva } from '../typesCompras'
import { comprasSchema } from '../schema/compras.schema'
import { conexion } from './connectionService'

export const obtieneCompras = async () => {
    try {
        const [results] = await conexion.query("SELECT * FROM compras")
        return results
    } catch(err) {
        return {error: "No se pueden obtener las compras"}
    }
}

export const encuentraCompras = async (id:number) => {
    try {
        const [results] = await conexion.query('SELECT * FROM compras WHERE id = ? LIMIT 1', id)
        return results
    } catch (error) {
        return {error:"No se encuentra esa compra"}
    }
} 

export const agregarCompra = async (nuevo:CompraNueva) => {
    try {
        const validacion = comprasSchema.safeParse({
            id_articulo: nuevo.id_articulo,
            cantidad: nuevo.cantidad,
            precio: nuevo.precio,
            IVA: nuevo.IVA,
            subtotal: nuevo.subtotal,
            total: nuevo.total,
            fechaCompra: new Date(nuevo.fechaCompra)
        })
        if (!validacion.success) {
            return {error: validacion.error}
        }
        const [results] = await conexion.query('INSERT INTO compras(`id articulo`, cantidad, precio, IVA, subtotal' + 
            ', total, `fecha de compra`) VALUES(?, ?, ?, ?, ?, ?, ?)', [nuevo.id_articulo, nuevo.cantidad, nuevo.precio, 
                nuevo.IVA, nuevo.subtotal, nuevo.total, nuevo.fechaCompra])
        return results
    } catch (error) {
        console.log(error)
        return {error: "No se puede agregar la compra"}
    }
}

export const modificarCompra = async (modificado:Compra) => {
    try {
        const validacion = comprasSchema.safeParse({
            id_articulo: modificado.id_articulo,
            cantidad: modificado.cantidad,
            precio: modificado.precio,
            IVA: modificado.IVA,
            subtotal: modificado.subtotal,
            total: modificado.total,
            fechaCompra: new Date(modificado.fechaCompra)
        })
        if (!validacion.success) {
            return {error: validacion.error}
        }
        const [results] = await conexion.query('UPDATE compras SET `id articulo` = ?, cantidad = ?, precio = ?, IVA = ?'
            + ', subtotal = ?, total = ?, `fecha de compra` = ? WHERE id = ?', [modificado.id_articulo, modificado.cantidad, 
                modificado.precio, modificado.IVA, modificado.subtotal, modificado.total, modificado.fechaCompra, modificado.id])
        return results
    } catch (error) {
        return {error: `No se puede modificar la compra ${modificado.id}`}
    }
}

export const borrarCompra = async (id:number) => {
    try {
        const [results] = await conexion.query('DELETE FROM compras WHERE id = ?', [id])
        return results
    } catch (error) {
        return {error: `No se puede modificar la compra ${id}`}
    }
}