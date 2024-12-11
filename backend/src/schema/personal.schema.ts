import {z} from 'zod'

export const personalSchema = z.object({
    nombre: z.string().min(2).max(200),
    direccion: z.string().min(2).max(300),
    telefono: z.string().min(10).max(15),
    estatus: z.number().int().positive().min(1).max(2)
// }).refine(data  => data.direccion == "TEC DE CULIACAN", {
//     message: "La direccion debe ser del Tec de Culiacán", 
//     path:["direccion"]
}).refine(data  => data.estatus <= 2, {
    message: "Los valores correctos son 1(vigente) y 2(baja)", 
    path:["estatus"]
})