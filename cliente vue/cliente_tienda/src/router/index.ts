import ArticulosVue from "@/modulos/articulos/vistas/ArticulosVue.vue";
import ArticulosAgregarVue from "@/modulos/articulos/vistas/ArticulosAgregarVue.vue";
import PersonalAgregarVue from "@/modulos/personal/vistas/PersonalAgregarVue.vue";
import PersonalVue from "@/modulos/personal/vistas/PersonalVue.vue";
import PersonalEditarVue from "@/modulos/personal/vistas/PersonalEditarVue.vue";
import { createRouter, createWebHistory } from "vue-router";
import PersonalBorrarVue from "@/modulos/personal/vistas/PersonalBorrarVue.vue";
import ComprasAgregarVue from "@/modulos/compras/vistas/ComprasAgregarVue.vue";
import ComprasVue from "@/modulos/compras/vistas/ComprasVue.vue";
import VentasAgregarVue from "@/modulos/ventas/vistas/VentasAgregarVue.vue";
import VentasVue from "@/modulos/ventas/vistas/VentasVue.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },
    {
      path: "/articulos",
      name: "articulos",
      component: ArticulosVue,
    },
    {
      path: "/articulos/agregar",
      name: "articulosagregar",
      component: ArticulosAgregarVue,
    },
    {
      path: "/personal",
      name: "personal",
      component: PersonalVue,
    },
    {
      path: "/personal/agregar",
      name: "personalagregar",
      component: PersonalAgregarVue,
    },
    {
      path: "/personal/:id/editar",
      name: "personaleditar",
      component: PersonalEditarVue,
    },
    {
      path: "/personal/:id/borrar",
      name: "personalborrar",
      component: PersonalBorrarVue,
    },
    {
      path: "/compras",
      name: "compras",
      component: ComprasVue,
    },
    {
      path: "/compras/agregar",
      name: "comprasagregar",
      component: ComprasAgregarVue,
    },
    {
      path: "/ventas",
      name: "ventas",
      component: VentasVue,
    },
    {
      path: "/ventas/agregar",
      name: "ventasagregar",
      component: VentasAgregarVue,
    },
  ],
});

export default router;
