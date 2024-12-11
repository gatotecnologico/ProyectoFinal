import { z } from 'zod'
import { toTypedSchema } from "@vee-validate/zod";

export const registroSchema = toTypedSchema(
    z.object({
        idPersonal: z.number().int().positive(),
        fecha: z.string({ required_error: "Fecha requerida" }),
        hora: z.string().min(5).max(5),
        movimiento: z.string()
    }).refine( data => data.movimiento.includes!("entrada") || data.movimiento.includes!("salida"), {
            message: `El movimiento solo puede ser "entrada" o "salida"`, 
            path:["movimiento"]
        }
    )
)
 