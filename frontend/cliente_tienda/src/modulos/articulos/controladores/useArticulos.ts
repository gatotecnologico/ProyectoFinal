import { ref } from "vue"
import type { Articulo, ArticuloNuevo } from "../interfaces/articulos-interfaces"
import articulosAPI from "../api/articulosAPI"

export const useArticulo = () => {
    let articulos = ref<Articulo[]>([])
    let mensaje = ref(0)

    const traeArticulos = async () => {
        const respuesta = await articulosAPI.get<Articulo[]>('/')
        articulos.value = respuesta.data
    }

    const traeArticulosId = async (id:number) => {
        const respuesta = await articulosAPI.get<Articulo[]>('/'+id)
        articulos.value = respuesta.data
    }

    const agregarArticulo = async (articulos:ArticuloNuevo) => {
        const respuesta = await articulosAPI.post('/',articulos)
        if(respuesta.data.affectedRows >= 1) {
            mensaje.value = 1
        }
    }

    const actualizarArticulo = async (articulo:Articulo) => {
        const respuesta = await articulosAPI.put('/',articulo)
        if(respuesta.data.affectedRows >= 1) {
            mensaje.value = 1
        }
    }

    const borrarArticulo = async(articulo:Articulo) => {
        const respuesta = await articulosAPI.delete('/', {data: {id: articulo.id}})
        if(respuesta.data.fieldCount == 0) {
            mensaje.value = 1
        }
    }

    return {
        articulos,
        mensaje,
        traeArticulos,
        traeArticulosId,
        agregarArticulo,
        actualizarArticulo,
        borrarArticulo
    }
}

export default useArticulo