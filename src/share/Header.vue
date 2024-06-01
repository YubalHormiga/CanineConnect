<!-- Header  -->
<script setup>
import { RouterLink, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/authStore";
import MainNavigation from "../share/MainNavigation.vue";

const authStore = useAuthStore();
const route = useRoute();

// Extraemos las referencias necesarias del store de autenticación
const { isLoggedIn, userData } = storeToRefs(authStore);
const { logoutUser } = authStore;
</script>

<template>
  <header class="header">
    <!-- Nombre del sitio -->
    <div class="site-name">
      <h1 class="name">CanineConnect</h1>
      <h2 class="neighborhood">Sant Martí</h2>
    </div>
  </header>
</template>

<style scoped class="header-styles">
/* Estilos para el encabezado */
.header {

  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  min-height: 25vh; /* Altura mínima del header */
  height: auto; /* Altura ajustable en función del contenido */
  padding: 2rem; /* Añade un padding para mejorar el espacio interno */
}

/* Estilos para el bloque de identificación */
.identity {
  width: 20rem;
  text-align: center;
}
/* Estilos para el texto de identificación */
.identify-text {
  letter-spacing: 0.3px;
  margin: 0;
  color: rgba(184, 89, 89, 0.7);
}

/* Estilos para el nombre del sitio */
.name {
  font-size: clamp(4.5rem, 4vw + 1.5rem, 13.25rem);
  margin: 0;
}
.neighborhood {
  font-size: clamp(0.5rem, 4vw + 1.5rem, 5.25rem);
  margin: 0;
  text-align: center;
  font-family: "Whisper", cursive;
  font-weight: 900;
  font-style: normal;
  margin: 0;
}
</style>
