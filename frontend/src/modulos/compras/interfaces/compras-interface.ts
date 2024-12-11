export interface Compra {
  id: number;
  idArticulo: number;
  cantidad: number;
  precio: number;
  IVA: number;
  subtotal: number;
  total: number;
  fechaCompra: string;
}

export type CompraNueva = Omit<Compra, "id">;
