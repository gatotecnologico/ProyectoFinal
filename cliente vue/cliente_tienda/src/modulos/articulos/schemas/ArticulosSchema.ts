import { toTypedSchema } from "@vee-validate/zod";
import {z} from 'zod'

export const articulosSchema = toTypedSchema (
    z.object({
        descripcion: z.string().min(2, {message: 'Debe contener minimo 2 caracteres'}).max(800, {message: 'Maximo 800 caracteres'}),

        precio: z.number(
            {required_error: "El precio es requerido", invalid_type_error: "Precio debe ser un valor numerico",})
            .int().positive({message: "Debe ser un valor positivo"}).min(5, {message: "Debe ser un valor minimo de 5"}),
        
        cantidadEnAlmacen: z.number({message: 'Debe ser un valor numerico'}).int(),
        
        fechaCaducidad: z.string().date()}
    ) 
)