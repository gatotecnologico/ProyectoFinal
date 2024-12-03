import { Registro, RegistroNuevo } from '../typesRegistro'
import { registroSchema } from '../schema/registro.schema'
import { conexion } from './connectionService'

export const obtieneRegistros = async () => {
    try {
        const [results] = await conexion.query("SELECT * FROM registro")
        return results
    } catch(err) {
        return {error: "No se pueden obtener los registros"}
    }
}

export const encuentraRegistro = async (id:number) => {
    try {
        const [results] = await conexion.query('SELECT * FROM registro WHERE id = ? LIMIT 1', id)
        return results
    } catch (error) {
        return {error:"No se encuentra ese registro"}
    }
} 

export const agregarRegistro = async (nuevo:RegistroNuevo) => {
    try {
        const validacion = registroSchema.safeParse({
            id_personal: nuevo.id_personal,
            fecha: nuevo.fecha,
            hora: nuevo.hora,
            movimiento: nuevo.movimiento
        })
        if (!validacion.success) {
            return {error: validacion.error}
        }
        const [results] = await conexion.query('INSERT INTO registro(`id personal`,fecha, hora, movimiento) VALUES(?, ?, ?, ?)', 
            [nuevo.id_personal, nuevo.fecha, nuevo.hora, nuevo.movimiento])
        return results
    } catch (error) {
        console.log(error)
        return {error: "No se puede agregar el registro"}
    }
}

export const modificarRegistro = async (modificado:Registro) => {
    try {
        const validacion = registroSchema.safeParse({
            id_personal: modificado.id_personal,
            fecha: modificado.fecha,
            hora: modificado.hora,
            movimiento: modificado.movimiento
        })
        if (!validacion.success) {
            return {error: validacion.error}
        }
        const [results] = await conexion.query('UPDATE registro SET `id personal` = ?, fecha = ?, hora = ?, movimiento = ? WHERE id = ?', 
            [modificado.id_personal, modificado.fecha, modificado.hora, modificado.movimiento, modificado.id])
        return results
    } catch (error) {
        return {error: `No se puede modificar el registro ${modificado.id}`}
    }
}

export const borrarRegistro = async (id:number) => {
    try {
        const [results] = await conexion.query('DELETE FROM registro WHERE id = ?', [id])
        return results
    } catch (error) {
        return {error: `No se puede modificar el registro ${id}`}
    }
}