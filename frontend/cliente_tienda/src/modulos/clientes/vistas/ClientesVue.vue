<template>
    <section>
        <h3></h3>
        <h3 class="text-primary">Clientes</h3>
        <div>
            <RouterLink :to="{path: '/clientes/agregar'}">
                <button class="btn btn-sm btn-outline-primary">
                    Agregar Cliente  <i class="fa fa-plus"></i>
                </button>
            </RouterLink>
        </div>
    </section>
    <table class="table table-striped">
        <thead>
            <tr>
                <th class="text-primary">Clave</th>
                <th class="text-primary">Nombre</th>
                <th class="text-primary">Direccion</th>
                <th class="text-primary">Telefono</th>
                <th class="text-primary">Correo</th>
                <th class="text-primary">Ciudad</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="clientes.length == 0">
                <td class="text-primary">Sin clientes registrados</td>
            </tr>
            <tr v-for="(cliente, index) in clientes" :key="index">
                <td class="text-primary id"><h2>{{ cliente.id }}</h2></td>
                <td class="text-primary">{{ cliente.nombre }}</td>
                <td class="text-primary">{{ cliente.direccion }}</td>     
                <td class="text-primary">{{ cliente.telefono }}</td>
                <td class="text-primary">{{ cliente.correo }}</td>
                <td class="text-primary">{{ cliente.ciudad }}</td>
                <td class="centrado">
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-sm btn-outline-primary">
                            <RouterLink class="nav-link item" :to="{path: '/clientes/'+cliente.id+'/editar'}">
                                <i class="fa fa-pencil"></i>
                            </RouterLink>
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-danger">
                            <RouterLink class="nav-link item" :to="{path: '/clientes/'+cliente.id+'/borrar'}">
                                <i class="fa fa-trash"></i>
                            </RouterLink>
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue'
    import useClientes from '../controladores/useClientes'
    const { traeClientes, clientes } = useClientes()

    onMounted(async () => {
        await traeClientes()
    })
</script>

<style scoped>
    section {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        margin-top: 20px;
    }

    .id h2, .estatus h2 {
        font-weight: 400;
        font-size: 1em;
        margin-left: 1em
    }

    .centrado {
        text-align: center;
        border-top: 1px solid #0D6EFD;
    }
</style>