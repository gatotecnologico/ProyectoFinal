<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header text-primary">
                <h4>Agregar clientes</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success text-success" role="alert">
                Datos agregados con exito
            </div>
            <div class="card-body ">
                <Form :validation-schema="clientesSchema" @submit="">
                    <div class="mb-3 text-primary">
                        Nombre
                        <Field name="nombre" type="text" class="form-control" v-model="cliente.nombre"/>
                        <ErrorMessage name="nombre" class="errorValidacion"/>
                    </div>
                    <div class="mb-3 text-primary">
                        Direccion
                        <Field name="direccion" type="text" class="form-control" v-model="cliente.direccion"/>
                        <ErrorMessage name="direccion" class="errorValidacion"/>
                    </div>
                    <div class="mb-3 text-primary">
                        Telefono
                        <Field name="telefono" type="text" class="form-control" v-model="cliente.telefono"/>
                        <ErrorMessage name="telefono" class="errorValidacion"/>
                    </div>
                    <div class="mb-3 text-primary">
                        Correo
                        <Field name="correo" type="text" class="form-control" v-model="cliente.correo"/>
                        <ErrorMessage name="correo" class="errorValidacion"/>
                    </div>
                    <div class="mb-3 text-primary">
                        Ciudad
                        <Field name="ciudad" type="text" class="form-control" v-model="cliente.ciudad"/>
                        <ErrorMessage name="ciudad" class="errorValidacion"/>
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
import type { ClienteNuevo } from '../interfaces/clientes-interfaces';
import useClientes from '../controladores/useClientes';
const { agregarCliente, mensaje } = useClientes()
import { clientesSchema } from '../schemas/ClientesSchema';
import { Field, Form, ErrorMessage } from 'vee-validate'
    let cliente = ref<ClienteNuevo>({
        nombre: '',
        direccion: '',
        telefono: '',
        correo: '',
        ciudad: ''
    })

    const onTodoBien = async () => {
        await agregarCliente(cliente.value)
    }
</script>

<style scoped>
.errorValidacion{
    color: red;
    font-weight: bold;
}
</style>