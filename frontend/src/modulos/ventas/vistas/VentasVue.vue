<template>
    <section>
        <h3></h3>
        <h3 class="text-primary">Ventas</h3>
        <div>
            <RouterLink :to="{ path: '/ventas/agregar' }">
                <button class="btn btn-sm btn-outline-primary">
                    Agregar Ventas <i class="fa fa-plus"></i>
                </button>
            </RouterLink>
        </div>
    </section>
    <table class="table table-striped">
        <thead>
            <tr>
                <th class="text-primary">Clave</th>
                <th class="text-primary">ID Articulo</th>
                <th class="text-primary">ID Cliente</th>
                <th class="text-primary">Cantidad</th>
                <th class="text-primary">Precio</th>
                <th class="text-primary">IVA</th>
                <th class="text-primary">Subtotal</th>
                <th class="text-primary">Total</th>
                <th class="text-primary">Fecha Compra</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="venta.length == 0">
                <td class="text-primary">Sin ventas registradas</td>
            </tr>
            <tr v-for="(item, index) in venta" :key="index">
                <td class="text-primary id">
                    <h2>{{ item.id }}</h2>
                </td>
                <td class="text-primary">{{ item.idArticulo }}</td>
                <td class="text-primary">{{ item.idCliente }}</td>
                <td class="text-primary">{{ item.cantidad }}</td>
                <td class="text-primary">{{ item.precio }}</td>
                <td class="text-primary">{{ item.IVA }}</td>
                <td class="text-primary">{{ item.subtotal }}</td>
                <td class="text-primary">{{ item.total }}</td>
                <td class="text-primary">{{ item.fechaVenta }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import useVentas from "../controladores/useVentas";
const { traeVentas, venta } = useVentas();
onMounted(async () => {
    await traeVentas();
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
