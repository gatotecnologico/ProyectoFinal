export interface Articulo { 
    id: number,
    descripcion: string,
    precio: number,
    cantidad: number,
    caducidad: string
}

export type ArticuloNuevo = Omit<Articulo,'id'>