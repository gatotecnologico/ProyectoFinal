<template>
    <div v-if="personal[0]" class="container mt-5">
        <div class="card">
            <div class="card-header text-dark">
                <h4>Borrar personal</h4>
            </div>
            <div class="alert alert-warning" role="alert">
                Seguro de borrar la informacion?
                <i class="fa fa-warning"></i>
            </div>
            <div class="card-body ">
                <div class="mb-3 text-dark">
                    Id
                    <input type="text" class="form-control" v-model="personal[0].id" disabled>
                </div>
                <div class="mb-3 text-dark">
                    Nombre
                    <input type="text" class="form-control" v-model="personal[0].nombre" disabled>
                </div>
                <div class="mb-3 text-dark">
                    Direccion
                    <input type="text" class="form-control" v-model="personal[0].direccion" disabled>
                </div>
                <div class="mb-3 text-dark">
                    Telefono
                    <input type="text" class="form-control" v-model="personal[0].telefono" disabled>
                </div>
                <div class="mb-3 text-dark">
                    Estatus
                    <input type="text" class="form-control" v-model="personal[0].estatus" disabled>
                </div>
                <div class="mb-3">
                    <button class="btn btn-danger" @click="(borrarPersonal(personal[0]))">
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
import usePersonal from '../controladores/usePersonal';
const { traePersonalId, borrarPersonal, mensaje, personal } = usePersonal()
let idPersona = 0
const route = useRoute()
const routeRedirect = useRouter()
watch(
    () => mensaje.value,
    newId => {
        routeRedirect.push('/personal')
    }
)

onMounted(async() => {
    idPersona = Number(route.params.id)
    await traePersonalId(idPersona)
})

</script>