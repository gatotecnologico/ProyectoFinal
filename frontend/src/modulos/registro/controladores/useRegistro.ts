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

    const agregarRegistro = async (registro:RegistroNuevo) => {
        const respuesta = await registroAPI.post('/',registro)
        if(respuesta.data.affectedRows >= 1) {
            mensaje.value = 1
        }
    }

    return {
        registro,
        mensaje,
        traeRegistro,
        agregarRegistro
    }
}

export default useRegistro