<template>
    <nav class="navbar navbar-expand-lg bg-white">
        <div class="container-fluid">
            <a class="navbar-brand text-primary tienda" href="#">Tienda</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon bg-white"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item margin">
                      <RouterLink class="nav-link item" to="/clientes">Clientes</RouterLink>
                    </li>
                    
                    <li class="nav-item margin">
                        <RouterLink class="nav-link item" to="/articulos">Articulos</RouterLink>
                    </li>
                    <li class="nav-item margin">
                        <RouterLink class="nav-link item" to="/ventas">Ventas</RouterLink>
                    </li>
                    <li class="nav-item margin">
                      <RouterLink class="nav-link item" to="/personal">Personal</RouterLink>
                    </li>
                    <li class="nav-item margin">
                      <RouterLink class="nav-link item" to="/compras">Compras</RouterLink>
                    </li>
                    <li class="nav-item margin">
                        <RouterLink class="nav-link item" to="/clientes/registro">Registro</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
    nav {
        border: 1px solid #0D6EFD;
        border-radius: 5px;
    }

    .tienda {
        font-weight: 600;
    }
</style>