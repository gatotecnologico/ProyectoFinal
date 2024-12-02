export interface Venta {
    id: number,
    id_articulo: number,
    id_cliente: number,
    cantidad: number,
    precio: number,
    IVA: number,
    subtotal: number,
    total: number,
    fechaVenta: string
}

export type VentaNueva = Omit<Venta,'id'>