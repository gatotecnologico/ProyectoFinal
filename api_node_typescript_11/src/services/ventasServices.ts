import { Venta, VentaNueva } from "../typesVentas";
import { ventasSchema } from "../schema/ventas.schema";
import { conexion } from "./connectionService";

export const obtieneVentas = async () => {
  try {
    const [results] = await conexion.query("SELECT * FROM ventas");
    return results;
  } catch (err) {
    return { error: "No se puede obtener las ventas" };
  }
};

export const encuentraVenta = async (id: number) => {
  try {
    const [results] = await conexion.query(
      "SELECT * FROM ventas WHERE id = ? LIMIT 1",
      id,
    );
    return results;
  } catch (error) {
    return { error: "No se encuentra esa venta" };
  }
};

export const agregarVenta = async (nuevo: VentaNueva) => {
  try {
    const validacion = ventasSchema.safeParse({
      id_articulo: nuevo.id_articulo,
      id_cliente: nuevo.id_cliente,
      cantidad: nuevo.cantidad,
      precio: nuevo.precio,
      IVA: nuevo.IVA,
      subtotal: nuevo.subtotal,
      total: nuevo.total,
      fechaVenta: new Date(nuevo.fechaVenta),
    });
    if (!validacion.success) {
      return { error: validacion.error };
    }
    const [results] = await conexion.query(
      "INSERT INTO ventas(idArticulo, idCliente, cantidad, precio, IVA, subtotal, total, fechaVenta) VALUES(?, ?, ?, ?, ?, ?, ?, ?)",
      [
        nuevo.id_articulo,
        nuevo.id_cliente,
        nuevo.cantidad,
        nuevo.precio,
        nuevo.IVA,
        nuevo.subtotal,
        nuevo.total,
        nuevo.fechaVenta,
      ],
    );
    return results;
  } catch (error) {
    return { error: "No se puede agregar la venta" };
  }
};

export const modificarVenta = async (modificado: Venta) => {
  try {
    const validacion = ventasSchema.safeParse({
      id_articulo: modificado.id_articulo,
      id_cliente: modificado.id_cliente,
      cantidad: modificado.cantidad,
      precio: modificado.precio,
      IVA: modificado.IVA,
      subtotal: modificado.subtotal,
      total: modificado.total,
      fechaVenta: new Date(modificado.fechaVenta),
    });
    if (!validacion.success) {
      return { error: validacion.error };
    }
    const [results] = await conexion.query(
      "UPDATE ventas SET `id articulo` = ?, `id cliente` = ?, cantidad = ?, precio = ?, IVA = ?" +
        ", subtotal = ?, total = ?, `fecha de la venta` = ? WHERE id = ?",
      [
        modificado.id_articulo,
        modificado.id_cliente,
        modificado.cantidad,
        modificado.precio,
        modificado.IVA,
        modificado.subtotal,
        modificado.total,
        modificado.fechaVenta,
        modificado.id,
      ],
    );
    return results;
  } catch (error) {
    return { error: `No se puede modificar la venta ${modificado.id}` };
  }
};

export const borrarVenta = async (id: number) => {
  try {
    const [results] = await conexion.query("DELETE FROM ventas WHERE id = ?", [
      id,
    ]);
    return results;
  } catch (error) {
    return { error: `No se puede modificar la venta ${id}` };
  }
};
