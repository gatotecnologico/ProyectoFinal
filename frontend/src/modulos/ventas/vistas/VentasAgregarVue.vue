<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header text-primary">
                <h4>Agregar venta</h4>
            </div>
            <div
                v-if="mensaje == 1"
                class="alert alert-success text-success"
                role="alert"
            >
                Venta agregada con exito
            </div>
            <div class="card-body">
                <Form :validation-schema="VentaSchema" @submit="onTodoBien">
                    <div class="mb-3 text-primary">
                        Artículo
                        <Field
                            name="idArticulo"
                            as="select"
                            class="form-select"
                            v-model="venta.idArticulo"
                        >
                            <option value="">Seleccione un artículo</option>
                            <option
                                v-for="articulo in articulos"
                                :key="articulo.id"
                                :value="articulo.id"
                            >
                                {{ articulo.descripcion }} - ${{
                                    articulo.precio
                                }}
                            </option>
                        </Field>
                        <ErrorMessage
                            name="idArticulo"
                            class="errorValidacion"
                        />
                    </div>

                    <div class="mb-3 text-primary">
                        Cliente
                        <Field
                            name="idCliente"
                            as="select"
                            class="form-select"
                            v-model="venta.idCliente"
                        >
                            <option value="">Seleccione un cliente</option>
                            <option
                                v-for="cliente in clientes"
                                :key="cliente.id"
                                :value="cliente.id"
                            >
                                {{ cliente.nombre }} - {{ cliente.correo }}
                            </option>
                        </Field>
                        <ErrorMessage
                            name="idCliente"
                            class="errorValidacion"
                        />
                    </div>
                    <div class="mb-3 text-primary">
                        Cantidad
                        <Field
                            name="cantidad"
                            type="number"
                            class="form-control"
                            v-model="venta.cantidad"
                        />
                        <ErrorMessage name="cantidad" class="errorValidacion" />
                    </div>
                    <div class="mb-3 text-primary">
                        Precio
                        <Field
                            name="precio"
                            type="number"
                            class="form-control"
                            v-model="venta.precio"
                        />
                        <ErrorMessage name="precio" class="errorValidacion" />
                    </div>
                    <div class="mb-3 text-primary">
                        IVA
                        <Field
                            name="IVA"
                            type="number"
                            class="form-control"
                            v-model="venta.IVA"
                            disabled
                        />
                        <ErrorMessage name="IVA" class="errorValidacion" />
                    </div>
                    <div class="mb-3 text-primary">
                        Subtotal
                        <Field
                            name="subtotal"
                            type="number"
                            class="form-control"
                            v-model="venta.subtotal"
                            disabled
                        />
                        <ErrorMessage name="subtotal" class="errorValidacion" />
                    </div>
                    <div class="mb-3 text-primary">
                        Total
                        <Field
                            name="total"
                            type="number"
                            class="form-control"
                            v-model="venta.total"
                            disabled
                        />
                        <ErrorMessage name="total" class="errorValidacion" />
                    </div>
                    <div class="mb-3 text-primary">
                        Fecha de venta
                        <Field
                            name="fechaCompra"
                            type="date"
                            class="form-control"
                            v-model="venta.fechaVenta"
                            disabled
                        />
                        <ErrorMessage
                            name="fechaCompra"
                            class="errorValidacion"
                        />
                    </div>
                    <div class="mb-3">
                        <button
                            class="btn btn-primary"
                            type="submit"
                            @click="onTodoBien"
                        >
                            Agregar
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import type { VentaNueva } from "../interfaces/ventas-interface";
import useVentas from "../controladores/useVentas";
const { agregarVenta, mensaje, modificarCantidad } = useVentas();
import useArticulos from "../../articulos/controladores/useArticulos";
const { articulos, traeArticulos } = useArticulos();
import useClientes from "../../clientes/controladores/useClientes";
const { clientes, traeClientes } = useClientes();

import { VentaSchema } from "../schemas/VentaSchema";
import { Field, Form, ErrorMessage } from "vee-validate";
import type { Articulo } from "../../articulos/interfaces/articulos-interfaces";
import { onMounted } from "vue";
const clientesM = [];
onMounted(async () => {
    await traeArticulos();
    await traeClientes();
});

let venta = ref<VentaNueva>({
    idArticulo: 0,
    idCliente: 0,
    cantidad: 0,
    precio: 0,
    IVA: 0.16,
    subtotal: 0,
    total: 0,
    fechaVenta: new Date().toISOString().slice(0, 10),
});

const onTodoBien = async () => {
    try {
        const resultado = await agregarVenta(venta.value);
        let articulo = ref<Articulo>({
            id: venta.value.idArticulo,
            descripcion: "......",
            precio: 1000,
            cantidadEnAlmacen: venta.value.cantidad,
            fechaCaducidad: "2024-01-01",
        });
        const resultado2 = await modificarCantidad(articulo.value);
    } catch (error) {
        console.error("Error en onTodoBien:", error);
    }
};

watch(
    [() => venta.value.cantidad, () => venta.value.idArticulo],
    async ([newCantidad, newIdArticulo]) => {
        const articuloSeleccionado = articulos.value.find(
            (articulo) => articulo.id === newIdArticulo,
        );
        if (articuloSeleccionado) {
            venta.value.precio = articuloSeleccionado.precio;
        }
        // Calculamos el subtotal
        venta.value.subtotal = Number(
            (newCantidad * venta.value.precio).toFixed(2),
        );

        // Calculamos el monto del IVA
        const montoIVA = Number(
            (venta.value.subtotal * venta.value.IVA).toFixed(2),
        );

        // Calculamos el total (subtotal + IVA)
        venta.value.total = Number(
            (venta.value.subtotal + montoIVA).toFixed(2),
        );
    },
);
</script>

<style scoped>
.errorValidacion {
    color: red;
    font-weight: bold;
}
</style>
