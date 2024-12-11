<template>
    <section>
        <h3></h3>
        <h3 class="text-primary">Compras</h3>
        <div>
            <RouterLink :to="{ path: '/compras/agregar' }">
                <button class="btn btn-sm btn-outline-primary">
                    Agregar Compras <i class="fa fa-plus"></i>
                </button>
            </RouterLink>
        </div>
    </section>
    <table class="table table-striped">
        <thead>
            <tr>
                <th class="text-primary">Clave</th>
                <th class="text-primary">ID Articulo</th>
                <th class="text-primary">Cantidad</th>
                <th class="text-primary">Precio</th>
                <th class="text-primary">IVA</th>
                <th class="text-primary">Subtotal</th>
                <th class="text-primary">Total</th>
                <th class="text-primary">Fecha Compra</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="compra.length == 0">
                <td class="text-primary">Sin compras registrado</td>
            </tr>
            <tr v-for="(item, index) in compra" :key="index">
                <td class="text-primary id">
                    <h2>{{ item.id }}</h2>
                </td>
                <td class="text-primary">{{ item.idArticulo }}</td>
                <td class="text-primary">{{ item.cantidad }}</td>
                <td class="text-primary">{{ item.precio }}</td>
                <td class="text-primary">{{ item.IVA }}</td>
                <td class="text-primary">{{ item.subtotal }}</td>
                <td class="text-primary">{{ item.total }}</td>
                <td class="text-primary">{{ item.fechaCompra }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import useCompras from "../controladores/useCompras";
const { traeCompras, compra } = useCompras();
onMounted(async () => {
    await traeCompras();
});
</script>

<style scoped>
section {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin-top: 20px;
}

.id h2,
.estatus h2 {
    font-weight: 400;
    font-size: 1em;
    margin-left: 1em;
}

.centrado {
    text-align: center;
    border-top: 1px solid #0d6efd;
}
</style>
