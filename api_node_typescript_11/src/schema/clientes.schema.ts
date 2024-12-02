import {z} from 'zod'

export const clientesSchema = z.object({
    nombre: z.string().min(2).max(200),
    direccion: z.string().min(2).max(300),
    telefono: z.number().min(1000000000).max(100000000000000),
    correo: z.string().min(8).max(200),
    ciudad: z.string().min(3).max(100),
})