import {z} from 'zod'

export const clientesSchema = z.object({
    nombre: z.string().min(3).max(50),
    direccion: z.string().min(3).max(50),
    telefono: z.string().min(10).max(15),
    correo: z.string().min(6).max(50),
    ciudad: z.string().min(3).max(50),
})