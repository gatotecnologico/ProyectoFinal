import PersonalAgregarVue from '@/modulos/personal/vistas/PersonalAgregarVue.vue'
import PersonalVue from '@/modulos/personal/vistas/PersonalVue.vue'
import PersonalEditarVue from '@/modulos/personal/vistas/PersonalEditarVue.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PersonalBorrarVue from '@/modulos/personal/vistas/PersonalBorrarVue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },
    {
      path: '/personal',
      name: 'personal',
      component: PersonalVue,
    },
    {
      path: '/personal/agregar',
      name: 'personalagregar',
      component: PersonalAgregarVue,
    },
    {
      path: '/personal/:id/editar',
      name: 'personaleditar',
      component: PersonalEditarVue,
    },
    {
      path: '/personal/:id/borrar',
      name: 'personalborrar',
      component: PersonalBorrarVue,
    },
  ],
})

export default router
