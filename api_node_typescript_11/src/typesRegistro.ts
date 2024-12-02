export interface Registro {
    id_personal: number,
    fecha: string,
    hora: string,
    movimiento: string
}

export type RegistroNuevo = Omit<Registro,'id'>