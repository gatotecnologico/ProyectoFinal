<template>
    <div v-if="personal[0]" class="container mt-5">
        <div class="card">
            <div class="card-header text-success">
                <h4>Editar personal</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success text-success" role="alert">
                Datos actualizados con exito
            </div>
            <div class="card-body ">
                <div class="mb-3 text-success">
                    Id
                    <input type="text" class="form-control" v-model="personal[0].id" disabled>
                </div>
                <div class="mb-3 text-success">
                    Nombre
                    <input type="text" class="form-control" v-model="personal[0].nombre">
                </div>
                <div class="mb-3 text-success">
                    Direccion
                    <input type="text" class="form-control" v-model="personal[0].direccion">
                </div>
                <div class="mb-3 text-success">
                    Telefono
                    <input type="text" class="form-control" v-model="personal[0].telefono">
                </div>
                <div class="mb-3 text-success">
                    Estatus
                    <input type="text" class="form-control" v-model="personal[0].estatus">
                </div>
                <div class="mb-3">
                    <button class="btn btn-success" @click="actualizarPersonal(personal[0])">
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
import usePersonal from '../controladores/usePersonal';

const { traePersonalId, mensaje, personal, actualizarPersonal } = usePersonal()
let idPersona = 0
const route = useRoute()

onMounted(async() => {
    idPersona = Number(route.params.id)
    await traePersonalId(idPersona)
})

</script>