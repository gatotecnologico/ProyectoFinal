<template>
    <section>
        <h3></h3>
        <h3 class="text-primary">Personal</h3>
        <div>
            <RouterLink :to="{path: '/personal/agregar'}">
                <button class="btn btn-sm btn-outline-primary">
                    Agregar <i class="fa fa-plus"></i>
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
                <th class="text-primary">Estatus</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="personal.length == 0">
                <td class="text-primary">Sin personal registrado</td>
            </tr>
            <tr v-for="(persona, index) in personal" :key="index">
                <td class="text-primary">{{ persona.id }}</td>
                <td class="text-primary">{{ persona.nombre }}</td>
                <td class="text-primary">{{ persona.direccion }}</td>
                <td class="text-primary">{{ persona.telefono }}</td>
                <td class="text-primary">{{ persona.estatus }}</td>
                <td class="centrado">
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-sm btn-outline-primary">
                            <RouterLink class="nav-link item" :to="{path: '/personal/'+persona.id+'/editar'}">
                                <i class="fa fa-pencil"></i>
                            </RouterLink>
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-danger">
                            <RouterLink class="nav-link item" :to="{path: '/personal/'+persona.id+'/borrar'}">
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
    import usePersonal from '../controladores/usePersonal'
    const { traePersonal, personal } = usePersonal()

    onMounted(async () => {
        await traePersonal()
    })
</script>

<style scoped>
    section {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        margin-top: 20px;
    }
    .centrado {
        text-align: center;
    }
</style>