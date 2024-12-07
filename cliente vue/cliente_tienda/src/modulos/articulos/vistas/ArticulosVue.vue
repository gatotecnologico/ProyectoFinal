<template>
    <section>
        <h3></h3>
        <h3 class="text-primary">Articulos</h3>
        <div>
            <RouterLink :to="{path: '/articulos/agregar'}">
                <button class="btn btn-sm btn-outline-primary">
                    Agregar Articulos <i class="fa fa-plus"></i>
                </button>
            </RouterLink>
        </div>
    </section>
    <table class="table table-striped">
        <thead>
            <tr>
                <th class="text-primary">Clave</th>
                <th class="text-primary">Descripcion</th>
                <th class="text-primary">Precio</th>
                <th class="text-primary">Cantidad</th>
                <th class="text-primary">Caducidad</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="articulos.length == 0">
                <td class="text-primary">Sin articulos registrados</td>
            </tr>
            <tr v-for="(articulos, index) in articulos" :key="index">
                <td class="text-primary id"><h2>{{ articulos.id }}</h2></td>
                <td class="text-primary">{{ articulos.descripcion }}</td>
                <td class="text-primary">{{ articulos.precio }}</td>     
                <td class="text-primary">{{ articulos.cantidadEnAlmacen }}</td>
                <td class="text-primary">{{ articulos.fechaCaducidad }}</td>
                <td classname="dsato" class="centrado">
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-sm btn-outline-primary">
                            <RouterLink class="nav-link item" :to="{path: '/articulos/'+articulos.id+'/editar'}">
                                <i class="fa fa-pencil"></i>
                            </RouterLink>
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-danger">
                            <RouterLink class="nav-link item" :to="{path: '/articulos/'+articulos.id+'/borrar'}">
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
    import useArticulos from '../controladores/useArticulos'
    const { traeArticulos, articulos } = useArticulos()

    onMounted(async () => {
        await traeArticulos()
        console.log(articulos.value)
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