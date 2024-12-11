import { ref } from "vue"
import type { Registro, RegistroNuevo } from "../interfaces/registro-interface"
import registroAPI from "../api/registroAPI"

export const useRegistro = () => {
    let registro = ref<Registro[]>([])
    let mensaje = ref(0)

    const traeRegistro = async () => {
        const respuesta = await registroAPI.get<Registro[]>('/')
        registro.value = respuesta.data
    }

    return {
        registro,
        mensaje,
        traeRegistro,
    }
}

export default useRegistro