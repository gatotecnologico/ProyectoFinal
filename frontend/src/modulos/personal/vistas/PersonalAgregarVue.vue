<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header text-primary">
                <h4>Agregar personal</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success text-success" role="alert">
                Datos agregador con exito
            </div>
            <div class="card-body ">
                <Form :validation-schema="PersonalSchema" @submit="onTodoBien">
                    <div class="mb-3 text-primary">
                        Nombre
                        <Field name="nombre" type="text" class="form-control" v-model="personal.nombre"/>
                        <ErrorMessage name="nombre" class="errorValidacion"/>
                    </div>
                    <div class="mb-3 text-primary">
                        Direccion
                        <Field name="direccion" type="text" class="form-control" v-model="personal.direccion"/>
                        <ErrorMessage name="direccion" class="errorValidacion"/>
                    </div>
                    <div class="mb-3 text-primary">
                        Telefono
                        <Field name="telefono" type="text" class="form-control" v-model="personal.telefono"/>
                        <ErrorMessage name="telefono" class="errorValidacion"/>
                    </div>
                    <div class="mb-3 text-primary">
                        Estatus
                        <Field name="estatus" type="text" class="form-control" v-model="personal.estatus"/>
                        <ErrorMessage name="estatus" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-primary" type="submit">
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
import type { PersonalAgregar } from '../interfaces/personal-interface';
import usePersonal from '../controladores/usePersonal';
const { agregarPersonal, mensaje } = usePersonal()
import { PersonalSchema } from '../schemas/PersonalSchema';
import { Field, Form, ErrorMessage } from 'vee-validate'
    let personal = ref<PersonalAgregar>({
        nombre: '',
        direccion: '',
        telefono: '',
        estatus: 0
    })

    const onTodoBien = async () => {
        await agregarPersonal(personal.value)
    }
</script>

<style scoped>
.errorValidacion{
    color: red;
    font-weight: bold;
}
</style>