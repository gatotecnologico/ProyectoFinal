export interface Articulo { 
    id: number,
    descripcion: string,
    precio: number,
    cantidadEnAlmacen: number,
    fechaCaducidad: string
}

export type ArticuloNuevo = Omit<Articulo,'id'>