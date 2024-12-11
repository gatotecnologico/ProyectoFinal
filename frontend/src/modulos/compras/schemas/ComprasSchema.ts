import { toTypedSchema } from "@vee-validate/zod";
import zod from "zod";

export const CompraSchema = toTypedSchema(
  zod.object({
    id: zod
      .number({ message: "Requerido" })
      .int()
      .positive({ message: "Un entero positivo" }),

    idArticulo: zod
      .number({ message: "Requerido" })
      .int()
      .positive({ message: "Un entero positivo" }),

    cantidad: zod
      .number({ message: "Requerido" })
      .int()
      .positive({ message: "Un entero positivo" }),

    precio: zod
      .number({ message: "Requerido" })
      .positive({ message: "Un numero positivo" }),

    IVA: zod
      .number({ message: "Requerido" })
      .positive({ message: "Un numero positivo" }),

    subtotal: zod
      .number({ message: "Requerido" })
      .positive({ message: "Un numero positivo" }),

    total: zod
      .number({ message: "Requerido" })
      .positive({ message: "Un numero positivo" }),

    fechaCompra: zod.string({ required_error: "Fecha requerida" }),
  }),
);
