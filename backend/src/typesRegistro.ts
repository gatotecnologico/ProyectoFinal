export interface Registro {
    id: number,
    idPersonal: number,
    fecha: string,
    hora: string,
    movimiento: string
}

export type RegistroNuevo = Omit<Registro,'id'>