<script setup>
import Link from "@/components/Link.vue";
import FoundDogCardView from "./FoundDogCardView.vue";
import { useLostDogsStore } from "@/stores/lostDogsStore";
import UnderConstructionPage from "@/components/UnderConstructionPage.vue";
UnderConstructionPage
const lostDogsStore = useLostDogsStore();
</script>

<template>
 <UnderConstructionPage/> 
  <div class="lostDog-container">
    <h3>Bienvenido a la Sección de Mascota Perdida</h3>
    <p>
      Por favor, utiliza este formulario para proporcionar información sobre la
      mascota que has encontrado. Completa todos los campos obligatorios para
      ayudarnos a reunir al animal con su dueño. Asegúrate de incluir detalles
      precisos y una imagen clara de la mascota.
    </p>
    <div class="report-link-container">
      <Link @click="" to="found-dogs" class="report-link">
        Reportar Mascota
      </Link>
    </div>
    <h3 class="list-title">Lista Mascotas Perdidas</h3>
    <div class="found-dog">
      <ul class="dog-list">
        <FoundDogCardView
          v-for="lostDog in lostDogsStore.lostDogsCollection"
          :lostDog = 'lostDog'
        />
      </ul>
    </div>
  </div>
</template>
<style scoped>
h3 {
  text-align: center;
}
.lostDog-container {
  padding: 2rem;
}
/* Estilos para la sección de objetos encontrados */
.found-dog {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.dog-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
