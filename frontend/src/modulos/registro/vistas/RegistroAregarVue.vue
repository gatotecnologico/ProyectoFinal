<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header text-primary">
                <h4>Agregar registro</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success text-success" role="alert">
                Datos agregados con exito
            </div>
            <div class="card-body ">
                <Form :validation-schema="registroSchema">
                    <div class="mb-3 text-primary">
                        Clave Personal
                        <Field name="idPersonal" type="number" class="form-control" v-model="registro.idPersonal"/>
                        <ErrorMessage name="idPersonal" class="errorValidacion"/>
                    </div>
                    <div class="mb-3 text-primary">
                        Fecha
                        <Field name="fecha" type="date" class="form-control" v-model="registro.fecha"/>
                        <ErrorMessage name="fecha" class="errorValidacion"/>
                    </div>
                    <div class="mb-3 text-primary">
                        Hora
                        <Field name="hora" type="text" class="form-control" v-model="registro.hora"/>
                        <ErrorMessage name="hora" class="errorValidacion"/>
                    </div>
                    <div class="mb-3 text-primary">
                        Movimiento
                        <Field name="movimiento" type="text" class="form-control" v-model="registro.movimiento"/>
                        <ErrorMessage name="movimiento" class="errorValidacion"/>
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
import type { RegistroNuevo } from '../interfaces/registro-interface';
import useRegistro from '../controladores/useRegistro';
const { agregarRegistro, mensaje } = useRegistro()
import { registroSchema } from '../schemas/RegistroSchema';
import { Field, Form, ErrorMessage } from 'vee-validate'
    let registro = ref<RegistroNuevo>({
        idPersonal: 0,
        fecha: "",
        hora: "",
        movimiento: ""
    })

    const onTodoBien = async () => {
        await agregarRegistro(registro.value)
    }
</script>

<style scoped>
.errorValidacion{
    color: red;
    font-weight: bold;
}
</style>