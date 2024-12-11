import ClientesVue from "@/modulos/clientes/vistas/ClientesVue.vue";
import ClientesAgregarVue from "@/modulos/clientes/vistas/ClientesAgregarVue.vue";
import ClientesEditarVue from "@/modulos/clientes/vistas/ClientesEditarVue.vue";
import ClientesBorrarVue from "@/modulos/clientes/vistas/ClientesBorrarVue.vue";
import ArticulosVue from "@/modulos/articulos/vistas/ArticulosVue.vue";
import ArticulosAgregarVue from "@/modulos/articulos/vistas/ArticulosAgregarVue.vue";
import ArticulosEditarVue from "@/modulos/articulos/vistas/ArticulosEditarVue.vue";
import ArticulosBorrarVue from "@/modulos/articulos/vistas/ArticulosBorrarVue.vue";
import PersonalAgregarVue from "@/modulos/personal/vistas/PersonalAgregarVue.vue";
import PersonalVue from "@/modulos/personal/vistas/PersonalVue.vue";
import PersonalEditarVue from "@/modulos/personal/vistas/PersonalEditarVue.vue";
import { createRouter, createWebHistory } from "vue-router";
import PersonalBorrarVue from "@/modulos/personal/vistas/PersonalBorrarVue.vue";
import ComprasAgregarVue from "@/modulos/compras/vistas/ComprasAgregarVue.vue";
import ComprasVue from "@/modulos/compras/vistas/ComprasVue.vue";
import VentasAgregarVue from "@/modulos/ventas/vistas/VentasAgregarVue.vue";
import VentasVue from "@/modulos/ventas/vistas/VentasVue.vue";
import RegistroVue from "@/modulos/registro/vistas/RegistroVue.vue";
import RegistroAregarVue from "@/modulos/registro/vistas/RegistroAregarVue.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },
    {
      path: "/clientes",
      name: "clientes",
      component: ClientesVue,
    },
    {
      path: "/clientes/agregar",
      name: "clientesagregar",
      component: ClientesAgregarVue,
    },
    {
      path: "/clientes/:id/editar",
      name: "clienteseditar",
      component: ClientesEditarVue,
    },
    {
      path: "/clientes/:id/borrar",
      name: "clientesborrar",
      component: ClientesBorrarVue,
    },
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
      path: "/articulos/:id/editar",
      name: "articuloseditar",
      component: ArticulosEditarVue,
    },
    {
      path: "/articulos/:id/borrar",
      name: "articulosborrar",
      component: ArticulosBorrarVue,
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
    {
      path: "/registro",
      name: "registro",
      component: RegistroVue,
    },
    {
      path: "/registro/agregar",
      name: "registroagregar",
      component: RegistroAregarVue,
    },
  ],
});

export default router;
