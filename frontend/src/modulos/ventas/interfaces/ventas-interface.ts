export interface Venta {
  id: number;
  idArticulo: number;
  idCliente: number;
  cantidad: number;
  precio: number;
  IVA: number;
  subtotal: number;
  total: number;
  fechaVenta: string;
}

export type VentaNueva = Omit<Venta, "id">;
