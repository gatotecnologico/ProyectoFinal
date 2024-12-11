<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header text-primary">
                <h4>Agregar compra</h4>
            </div>
            <div
                v-if="mensaje == 1"
                class="alert alert-success text-success"
                role="alert"
            >
                Compra agregada con exito
            </div>
            <div class="card-body">
                <Form :validation-schema="CompraSchema" @submit="onTodoBien">
                    <div class="mb-3 text-primary">
                        Artículo
                        <Field
                            name="idArticulo"
                            as="select"
                            class="form-select"
                            v-model="compra.idArticulo"
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
                        Cantidad
                        <Field
                            name="cantidad"
                            type="number"
                            class="form-control"
                            v-model="compra.cantidad"
                        />
                        <ErrorMessage name="cantidad" class="errorValidacion" />
                    </div>
                    <div class="mb-3 text-primary">
                        Precio
                        <Field
                            name="precio"
                            type="number"
                            class="form-control"
                            v-model="compra.precio"
                        />
                        <ErrorMessage name="precio" class="errorValidacion" />
                    </div>
                    <div class="mb-3 text-primary">
                        IVA
                        <Field
                            name="IVA"
                            type="number"
                            class="form-control"
                            v-model="compra.IVA"
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
                            v-model="compra.subtotal"
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
                            v-model="compra.total"
                            disabled
                        />
                        <ErrorMessage name="total" class="errorValidacion" />
                    </div>
                    <div class="mb-3 text-primary">
                        Fecha de Compra
                        <Field
                            name="fechaCompra"
                            type="date"
                            class="form-control"
                            v-model="compra.fechaCompra"
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
import type { CompraNueva } from "../interfaces/compras-interface";
import type { Articulo } from "../../articulos/interfaces/articulos-interfaces";
import useCompras from "../controladores/useCompras";
const { agregarCompra, mensaje, modificarCantidad } = useCompras();
import useArticulos from "../../articulos/controladores/useArticulos";
const { articulos, traeArticulos } = useArticulos();
import { onMounted } from "vue";

import { CompraSchema } from "../schemas/ComprasSchema";
import { Field, Form, ErrorMessage } from "vee-validate";
let compra = ref<CompraNueva>({
    idArticulo: 0,
    cantidad: 0,
    precio: 0,
    IVA: 0.16,
    subtotal: 0,
    total: 0,
    fechaCompra: new Date().toISOString().slice(0, 10),
});
onMounted(async () => {
    await traeArticulos();
});

const onTodoBien = async () => {
    try {
        const resultado = await agregarCompra(compra.value);
        let articulo = ref<Articulo>({
            id: compra.value.idArticulo,
            descripcion: "......",
            precio: 1000,
            cantidadEnAlmacen: compra.value.cantidad,
            fechaCaducidad: "2024-01-01",
        });
        const resultado2 = await modificarCantidad(articulo.value);
    } catch (error) {
        console.error("Error en onTodoBien:", error);
    }
};

watch(
    [() => compra.value.cantidad, () => compra.value.idArticulo],
    ([newCantidad, newidArticulo]) => {
        const articuloSeleccionado = articulos.value.find(
            (art) => art.id === newidArticulo,
        );
        const newPrecio = articuloSeleccionado
            ? articuloSeleccionado.precio
            : 0;
        compra.value.precio = newPrecio;
        // Calculamos el subtotal
        compra.value.subtotal = Number((newCantidad * newPrecio).toFixed(2));

        // Calculamos el monto del IVA
        const montoIVA = Number(
            (compra.value.subtotal * compra.value.IVA).toFixed(2),
        );

        // Calculamos el total (subtotal + IVA)
        compra.value.total = Number(
            (compra.value.subtotal + montoIVA).toFixed(2),
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
