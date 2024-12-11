import { z } from 'zod'

export const registroSchema = z.object({
    idPersonal: z.number().int().positive(),
    fecha: z.date(),
    hora: z.string().min(5).max(5),
    movimiento: z.string()
}).refine( data => data.movimiento === "entrada" || "salida", {
        message: `El movimiento solo puede ser "entrada" o "salida"`, 
        path:["movimiento"]
    }
)