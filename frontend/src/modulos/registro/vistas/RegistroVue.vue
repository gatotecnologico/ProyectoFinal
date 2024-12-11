<template>
    <section>
        <h3></h3>
        <h3 class="text-primary">Registro</h3>
        <div>
            <RouterLink :to="{path: '/registro/agregar'}">
                <button class="btn btn-sm btn-outline-primary">
                    Agregar Registro  <i class="fa fa-plus"></i>
                </button>
            </RouterLink>
        </div>
    </section>
    <table class="table table-striped">
        <thead>
            <tr>
                <th class="text-primary">Clave</th>
                <th class="text-primary">Clave Personal</th>
                <th class="text-primary">Fecha</th>
                <th class="text-primary">Hora</th>
                <th class="text-primary">Movimiento</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="registro.length == 0">
                <td class="text-primary">Sin registros</td>
            </tr>
            <tr v-for="(registro, index) in registro" :key="index">
                <td class="text-primary id"><h2>{{ registro.id }}</h2></td>
                <td class="text-primary idPersonal"><h2>{{ registro.idPersonal }}</h2></td>
                <td class="text-primary">{{ registro.fecha }}</td>     
                <td class="text-primary">{{ registro.hora }}</td>
                <td class="text-primary">{{ registro.movimiento }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue'
    import useRegistro from '../controladores/useRegistro'
    const { traeRegistro, registro } = useRegistro()

    onMounted(async () => {
        await traeRegistro()
    })
</script>

<style scoped>
    section {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        margin-top: 20px;
    }

    .id h2 {
        font-weight: 400;
        font-size: 1em;
        margin-left: 1em
    }

    .idPersonal h2 {
        font-weight: 400;
        font-size: 1em;
        margin-left: 2.5em
    }

    .centrado {
        text-align: center;
        border-top: 1px solid #0D6EFD;
    }
</style>