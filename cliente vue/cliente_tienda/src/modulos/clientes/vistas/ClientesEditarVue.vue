<template>
    <div v-if="clientes[0]" class="container mt-5">
        <div class="card">
            <div class="card-header text-success">
                <h4>Editar cliente</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success text-success" role="alert">
                Datos actualizados con exito
            </div>
            <div class="card-body ">
                <div class="mb-3 text-success">
                    Id
                    <input type="text" class="form-control" v-model="clientes[0].id" disabled>
                </div>
                <div class="mb-3 text-success">
                    Nombre
                    <input type="text" class="form-control" v-model="clientes[0].nombre">
                </div>
                <div class="mb-3 text-success">
                    Direccion
                    <input type="text" class="form-control" v-model="clientes[0].direccion">
                </div>
                <div class="mb-3 text-success">
                    Telefono
                    <input type="text" class="form-control" v-model="clientes[0].telefono">
                </div>
                <div class="mb-3 text-success">
                    Correo
                    <input type="text" class="form-control" v-model="clientes[0].correo">
                </div>
                <div class="mb-3 text-success">
                    Ciudad
                    <input type="text" class="form-control" v-model="clientes[0].ciudad">
                </div>
                <div class="mb-3">
                    <button class="btn btn-success" @click="actualizarCliente(clientes[0])">
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
import useClientes from '../controladores/useClientes';

const { traeClienteId, mensaje, clientes, actualizarCliente } = useClientes()
let idCliente = 0
const route = useRoute()

onMounted(async() => {
    idCliente = Number(route.params.id)
    await traeClienteId(idCliente)
})

</script>