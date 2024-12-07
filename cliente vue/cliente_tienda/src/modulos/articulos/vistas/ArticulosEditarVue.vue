<template>
    <div v-if="articulos[0]" class="container mt-5">
        <div class="card">
            <div class="card-header text-success">
                <h4>Editar articulo</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success text-success" role="alert">
                Datos actualizados con exito
            </div>
            <div class="card-body ">
                <div class="mb-3 text-success">
                    Id
                    <input type="text" class="form-control" v-model="articulos[0].id" disabled>
                </div>
                <div class="mb-3 text-success">
                    Descripcion
                    <input type="text" class="form-control" v-model="articulos[0].descripcion">
                </div>
                <div class="mb-3 text-success">
                    Precio
                    <input type="text" class="form-control" v-model="articulos[0].precio">
                </div>
                <div class="mb-3 text-success">
                    Cantidad en almacen
                    <input type="text" class="form-control" v-model="articulos[0].cantidadEnAlmacen">
                </div>
                <div class="mb-3 text-success">
                    Fecha de caducidad
                    <input type="text" class="form-control" v-model="articulos[0].fechaCaducidad">
                </div>
                <div class="mb-3">
                    <button class="btn btn-success" @click="actualizarArticulo(articulos[0])">
                        Actualizar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import useArticulos from '../controladores/useArticulos';

const { traeArticulosId, mensaje, articulos, actualizarArticulo } = useArticulos()
let idArticulo = 0
const route = useRoute()

onMounted(async() => {
    idArticulo = Number(route.params.id)
    await traeArticulosId(idArticulo)
    articulos.value[0].fechaCaducidad = articulos.value[0].fechaCaducidad.substring(0,10)
})

</script>