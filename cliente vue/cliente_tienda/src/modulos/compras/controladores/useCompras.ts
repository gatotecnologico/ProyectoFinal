import { ref } from "vue";
import type { Compra, CompraNueva } from "../interfaces/compras-interface";
import comprasAPI from "../api/comprasAPI";

export const useCompras = () => {
  let compra = ref<Compra[]>([]);
  let mensaje = ref(0);

  const traeCompras = async () => {
    const respuesta = await comprasAPI.get<Compra[]>("/");
    compra.value = respuesta.data;
  };

  const traeCompraId = async (id: number) => {
    const respuesta = await comprasAPI.get<Compra[]>("/" + id);
    compra.value = respuesta.data;
  };

  const agregarCompra = async (compraNueva: CompraNueva) => {
    const respuesta = await comprasAPI.post("/", compraNueva);
    if (respuesta.data.affectedRows >= 1) {
      mensaje.value = 1;
    }
  };

  return {
    compra,
    mensaje,
    traeCompras,
    traeCompraId,
    agregarCompra,
  };
};

export default useCompras;
