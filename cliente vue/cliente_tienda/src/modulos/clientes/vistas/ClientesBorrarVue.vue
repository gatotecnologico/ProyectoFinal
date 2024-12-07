<template>
    <div v-if="clientes[0]" class="container mt-5">
        <div class="card">
            <div class="card-header text-dark">
                <h4>Borrar cliente</h4>
            </div>
            <div class="alert alert-warning" role="alert">
                Seguro de borrar la informacion?
                <i class="fa fa-warning"></i>
            </div>
            <div class="card-body ">
                <div class="mb-3 text-dark">
                    Id
                    <input type="text" class="form-control" v-model="clientes[0].id" disabled>
                </div>
                <div class="mb-3 text-dark">
                    Nombre
                    <input type="text" class="form-control" v-model="clientes[0].nombre" disabled>
                </div>
                <div class="mb-3 text-dark">
                    Direccion
                    <input type="text" class="form-control" v-model="clientes[0].direccion" disabled>
                </div>
                <div class="mb-3 text-dark">
                    Telefono
                    <input type="text" class="form-control" v-model="clientes[0].telefono" disabled>
                </div>
                <div class="mb-3 text-dark">
                    Correo
                    <input type="text" class="form-control" v-model="clientes[0].correo" disabled>
                </div>
                <div class="mb-3 text-dark">
                    Ciudad
                    <input type="text" class="form-control" v-model="clientes[0].ciudad" disabled>
                </div>
                <div class="mb-3">
                    <button class="btn btn-danger" @click="(borrarCliente(clientes[0]))">
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
import useClientes from '../controladores/useClientes';
const { traeClienteId, borrarCliente, mensaje, clientes } = useClientes()
let idCliente = 0
const route = useRoute()
const routeRedirect = useRouter()
watch(
    () => mensaje.value,
    newId => {
        routeRedirect.push('/clientes')
    }
)

onMounted(async() => {
    idCliente = Number(route.params.id)
    await traeClienteId(idCliente)
})

</script>