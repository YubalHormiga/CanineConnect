<!-- MissingDogView OK -->
<template>
  <div class="pet-carousel">
    <!-- Iteración sobre las imágenes para crear las tarjetas de mascotas -->
    <div
      class="pet-card"
      :class="{ active: index === currentIndex }"
      v-for="(image, index) in images"
      :key="index"
      :style="{ backgroundImage: `url(${image})` }"
    >
      <div class="pet-description">
        <p class="pet-lost">Se Busca</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"; 

// Lista de imágenes para el carrusel
const images = ref([
  "/images/dog1.jpg",
  "/images/dog2.jpg",
  "/images/dog3.jpg",
  // Agrega aquí todas tus imágenes
]);

const currentIndex = ref(0); // Índice de la imagen actual

// Función para avanzar a la siguiente imagen
const nextImage = () => {
  currentIndex.value++;
  if (currentIndex.value >= images.value.length) {
    currentIndex.value = 0;
  }
};

// Función para retroceder a la imagen anterior (por si se necesita en el futuro)
const prevImage = () => {
  currentIndex.value--;
  if (currentIndex.value < 0) {
    currentIndex.value = images.value.length - 1;
  }
};

// Ciclo de vida del componente para iniciar el carrusel
onMounted(() => {
  setInterval(() => {
    nextImage();
  }, 5000); // Cambia el intervalo de cambio de imagen según tus preferencias
});
</script>

<style scoped>
/* Estilo del contenedor del carrusel */
.pet-carousel {
  position: relative;
  max-width: 100%;
  height: 40rem;
  overflow: hidden;
}

/* Estilo de las tarjetas de mascotas */
.pet-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: none;
  box-shadow: 0px 0px 36px 62px rgba(255, 255, 255, 0.89) inset;
  -webkit-box-shadow: 0px 0px 36px 62px rgba(255, 255, 255, 0.89) inset;
  -moz-box-shadow: 0px 0px 36px 62px rgba(255, 255, 255, 0.89) inset;
}

/* Mostrar la tarjeta activa */
.pet-card.active {
  display: block;
}

/* Estilo de la descripción de las mascotas */
.pet-description {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Estilo del texto 'Se Busca' */
.pet-lost {
  text-transform: uppercase;
  font-size: clamp(4.2rem, 5vw + 1.5rem, 15.25rem);
  font-weight: 900;
  color: red;
  opacity: 0.4;
  letter-spacing: 10px;
  margin: 0;
}
</style>
