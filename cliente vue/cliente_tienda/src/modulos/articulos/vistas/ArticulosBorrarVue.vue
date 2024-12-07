<template>
    <div v-if="articulos[0]" class="container mt-5">
        <div class="card">
            <div class="card-header text-dark">
                <h4>Borrar articulo</h4>
            </div>
            <div class="alert alert-warning" role="alert">
                Seguro de borrar la informacion?
                <i class="fa fa-warning"></i>
            </div>
            <div class="card-body ">
                <div class="mb-3 text-dark">
                    Id
                    <input type="text" class="form-control" v-model="articulos[0].id" disabled>
                </div>
                <div class="mb-3 text-dark">
                    Descripcion
                    <input type="text" class="form-control" v-model="articulos[0].descripcion" disabled>
                </div>
                <div class="mb-3 text-dark">
                    Precio
                    <input type="text" class="form-control" v-model="articulos[0].precio" disabled>
                </div>
                <div class="mb-3 text-dark">
                    Cantidad en almacen
                    <input type="text" class="form-control" v-model="articulos[0].cantidadEnAlmacen" disabled>
                </div>
                <div class="mb-3 text-dark">
                    Fecha de caducidad
                    <input type="text" class="form-control" v-model="articulos[0].fechaCaducidad" disabled>
                </div>
                <div class="mb-3">
                    <button class="btn btn-danger" @click="(borrarArticulo(articulos[0]))">
                        Borrar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useArticulos from '../controladores/useArticulos';
const { traeArticulosId, borrarArticulo, mensaje, articulos } = useArticulos()
let idArticulo = 0
const route = useRoute()
const routeRedirect = useRouter()
watch(
    () => mensaje.value,
    newId => {
        routeRedirect.push('/articulos')
    }
)

onMounted(async() => {
    idArticulo = Number(route.params.id)
    await traeArticulosId(idArticulo)
})

</script>