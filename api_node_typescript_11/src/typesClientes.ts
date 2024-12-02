export interface Cliente {
    id: number,
    nombre: string,
    direccion: string,
    telefono: bigint,
    correo: string,
    ciudad: string
}

export type ClienteNuevo = Omit<Cliente,'id'>