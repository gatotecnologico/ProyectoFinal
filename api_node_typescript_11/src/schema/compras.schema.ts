import {z} from 'zod'

export const comprasSchema = z.object({
    id_articulo: z.number().int().positive(),
    cantidad: z.number().int().positive(),
    precio: z.number().int().positive(),
    IVA: z.number().positive().min(0.0),
    subtotal: z.number().int().positive(),
    total: z.number().positive().min(0.0),
    fechaCompra: z.date()
})