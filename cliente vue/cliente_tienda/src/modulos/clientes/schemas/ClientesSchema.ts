import { toTypedSchema } from "@vee-validate/zod";
import {z} from 'zod'

export const clientesSchema = toTypedSchema (
    z.object({
        nombre: z.string({message: 'Nombre requerido'}).min(3, {message: 'Nombre debe contener minimo 3 caracteres'})
        .max(50, {message: 'Nombre debe contener maximo 50 caracteres'}),

        direccion: z.string({message: 'Direccion requerida'}).min(3,{message: 'Direccion debe contener minimo 3 caracteres'})
        .max(300, {message: 'Direccion debe contener maximo 50 caracteres'}),

        telefono: z.string({message: 'Telefono requerido'}).min(10, {message: 'Minimo 10 numeros'}).max(15, {message: 'Maximo 15 numeros'}),

        correo: z.string({message: 'Correo requerido'}).min(6, {message: 'Correo debe contener minimo 6 caracteres'})
        .max(50, {message: 'Correo debe contener maximo 50 caracteres'}),

        ciudad: z.string({message: 'Ciudad requerida'}).min(3, {message: 'Ciudad debe contener minimo 3 caracteres'})
        .max(50, {message: 'Ciudad debe contener maximo 50 caracteres'}),
    })
)