import { z } from 'zod'

export const registroSchema = z.object({
    id_personal: z.number().int().positive(),
    fecha: z.string(),
    hora: z.string(),
    movimiento: z.string()
}).refine(data => data.fecha == z.string().date().parse("2024-01-01"), {
        message: "La fecha debe estar en el formato YYYY-MM-DD", 
        path:["fecha"]
    }
).refine(data => data.hora == z.string().time().parse("00:00"), {
    message: "La hora debe estar en el formato HH:MM", 
    path:["hora"]
}
).refine( data => data.movimiento === "entrada" || "salida", {
        message: `El movimiento solo puede ser "entrada" o "salida"`, 
        path:["movimiento"]
    }
)