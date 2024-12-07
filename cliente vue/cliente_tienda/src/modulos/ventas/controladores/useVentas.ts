import { ref } from "vue";
import type { Venta, VentaNueva } from "../interfaces/ventas-interface";
import ventasAPI from "../api/ventasAPI";

export const useCompras = () => {
  let venta = ref<Venta[]>([]);
  let mensaje = ref(0);

  const traeVentas = async () => {
    const respuesta = await ventasAPI.get<Venta[]>("/");
    venta.value = respuesta.data;
  };

  const traeVentaId = async (id: number) => {
    const respuesta = await ventasAPI.get<Venta[]>("/" + id);
    venta.value = respuesta.data;
  };

  const agregarVenta = async (ventaNueva: VentaNueva) => {
    const respuesta = await ventasAPI.post("/", ventaNueva);
    if (respuesta.data.affectedRows >= 1) {
      mensaje.value = 1;
    }
  };

  return {
    venta,
    mensaje,
    traeVentas,
    traeVentaId,
    agregarVenta,
  };
};

export default useCompras;
