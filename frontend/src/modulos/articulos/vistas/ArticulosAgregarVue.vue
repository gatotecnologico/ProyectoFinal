<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header text-primary">
                <h4>Agregar articulo</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success text-success" role="alert">
                Datos agregados con exito
            </div>
            <div class="card-body ">
                <Form :validation-schema="articulosSchema">
                    <div class="mb-3 text-primary">
                        Descripcion
                        <Field name="descripcion" type="text" class="form-control" v-model="articulo.descripcion"/>
                        <ErrorMessage name="descripcion" class="errorValidacion"/>
                    </div>
                    <div class="mb-3 text-primary">
                        Precio
                        <Field name="precio" type="number" class="form-control" v-model="articulo.precio"/>
                        <ErrorMessage name="precio" class="errorValidacion"/>
                    </div>
                    <div class="mb-3 text-primary">
                        Cantidad en almacen
                        <Field name="cantidadEnAlmacen" type="number" class="form-control" v-model="articulo.cantidadEnAlmacen"/>
                        <ErrorMessage name="cantidadEnAlmacen" class="errorValidacion"/>
                    </div>
                    <div class="mb-3 text-primary">
                        Fecha de caducidad
                        <Field name="fechaCaducidad" type="text" class="form-control" v-model="articulo.fechaCaducidad"/>
                        <ErrorMessage name="fechaCaducidad" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-primary" type="submit" @click="onTodoBien">
                            Agregar
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ArticuloNuevo } from '../interfaces/articulos-interfaces';
import useArticulos from '../controladores/useArticulos';
const { agregarArticulo, mensaje } = useArticulos()
import { articulosSchema } from '../schemas/ArticulosSchema';
import { Field, Form, ErrorMessage } from 'vee-validate'
    let articulo = ref<ArticuloNuevo>({
        descripcion: '',
        precio: 0,
        cantidadEnAlmacen: 0,
        fechaCaducidad: ''
    })

    const onTodoBien = async () => {
        await agregarArticulo(articulo.value)
    }
</script>

<style scoped>
.errorValidacion{
    color: red;
    font-weight: bold;
}
</style>