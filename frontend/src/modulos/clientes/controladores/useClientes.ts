import { ref } from "vue"
import type { Cliente, ClienteNuevo } from "../interfaces/clientes-interfaces"
import clientesAPI from "../api/clientesAPI"

export const useClientes = () => {
    let clientes = ref<Cliente[]>([])
    let mensaje = ref(0)

    const traeClientes = async () => {
        const respuesta = await clientesAPI.get<Cliente[]>('/')
        clientes.value = respuesta.data
    }

    const traeClienteId = async (id:number) => {
        const respuesta = await clientesAPI.get<Cliente[]>('/'+id)
        clientes.value = respuesta.data
    }

    const agregarCliente = async (cliente:ClienteNuevo) => {
        const respuesta = await clientesAPI.post('/',cliente)
        if(respuesta.data.affectedRows >= 1) {
            mensaje.value = 1
        }
    }

    const actualizarCliente = async (cliente:Cliente) => {
        const respuesta = await clientesAPI.put('/',cliente)
        if(respuesta.data.affectedRows >= 1) {
            mensaje.value = 1
        }
    }

    const borrarCliente = async(cliente:Cliente) => {
        const respuesta = await clientesAPI.delete('/', {data: {id: cliente.id}})
        if(respuesta.data.fieldCount == 0) {
            mensaje.value = 1
        }
    }

    return {
        clientes,
        mensaje,
        traeClientes,
        traeClienteId,
        agregarCliente,
        actualizarCliente,
        borrarCliente
    }
}

export default useClientes