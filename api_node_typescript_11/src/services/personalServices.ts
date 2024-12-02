import { Personal, PersonalNuevo } from '../typesPersonal'
import { personalSchema } from '../schema/personal.schema'
import { conexion } from './connectionService'

export const obtienePersonal = async () => {
    try {
        const [results] = await conexion.query("SELECT * FROM personal")
        return results
    } catch(err) {
        return {error: "No se puede obtener el personal"}
    }
}

export const encuentraPersonal = async (id:number) => {
    try {
        const [results] = await conexion.query('SELECT * FROM personal WHERE id = ? LIMIT 1', id)
        return results
    } catch (error) {
        return {error:"No se encuentra ese personal"}
    }
} 
 
export const encuentraPersonalTelefono = async (telefono:string) => {
    try {
        const [results] = await conexion.query('SELECT * FROM personal WHERE telefono=? AND estatus=1', telefono)
        return results
    } catch (error) {
        return {error: "No se puede encontrar al personal con ese numero de telefono"}
    }
}

export const agregarPersonal = async (nuevo:PersonalNuevo) => {
    try {
        const validacion = personalSchema.safeParse({
            nombre: nuevo.nombre,
            direccion: nuevo.direccion,
            telefono: nuevo.telefono,
            estatus: Number(nuevo.estatus)
        })
        if (!validacion.success) {
            return {error: validacion.error}
        }
        const [results] = await conexion.query('INSERT INTO personal(nombre, direccion, telefono, estatus) VALUES(?, ?, ?, ?)', [nuevo.nombre, nuevo.direccion, nuevo.telefono, Number(nuevo.estatus)])
        return results
    } catch (error) {
        return {error: "No se puede agregar al personal"}
    }
}

export const modificarPersonal = async (modificado:Personal) => {
    try {
        const validacion = personalSchema.safeParse({
            nombre: modificado.nombre,
            direccion: modificado.direccion,
            telefono: String(modificado.telefono),
            estatus: Number(modificado.estatus)
        })
        if (!validacion.success) {
            return {error: validacion.error}
        }
        const [results] = await conexion.query('UPDATE personal SET nombre = ?, direccion = ?, telefono = ?, estatus = ? WHERE id = ?', [modificado.nombre, modificado.direccion, modificado.telefono, modificado.estatus, modificado.id])
        return results
    } catch (error) {
        return {error: "No se puede modificar"}
    }
}

export const borrarPersonal = async (id:number) => {
    try {
        const [results] = await conexion.query('DELETE FROM personal WHERE id = ?', [id])
        return results
    } catch (error) {
        return {error: "No se puede borrar el personal"}
    }
}