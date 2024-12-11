import {z} from 'zod'

export const articulosSchema = z.object({
    descripcion: z.string().min(2).max(800),
    precio: z.number().min(5),
    cantidadEnAlmacen: z.number().min(1),
    fechaCaducidad: z.date().min(new Date('2024-01-01'))
})