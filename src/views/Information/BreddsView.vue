<!-- BreddsView OK -->
<script setup>
import { onMounted } from "vue";
import { useDogBreedsStore } from "@/stores/dogBreedsStore"; 

// Inicializamos el store de razas de perros
const dogs = useDogBreedsStore();

// Usamos el lifecycle hook onMounted para obtener los datos de las razas de perros cuando el componente se monta
onMounted(async () => {
  await dogs.fetchDogBreedsData();
});
</script>

<template>
  <!-- Contenedor principal para las tarjetas de perros -->
  <div class="container">
    <!-- Recorremos los datos de las razas de perros y creamos una tarjeta para cada una -->
    <div class="card-container" v-for="dog in dogs.dogBreedsData" :key="dog.id">
      <div class="card">
        <!-- Imagen del perro -->
        <img :src="dog.image.url" alt="Dog image" class="dog-image" />
        <!-- Información del perro -->
        <div class="info">
          <h2>{{ dog.name }}</h2>
          <p><strong>Origen:</strong> {{ dog.origin }}</p>
          <p><strong>Destinado a:</strong> {{ dog.bred_for }}</p>
          <p><strong>Temperamento:</strong> {{ dog.temperament }}</p>
          <p><strong>Altura:</strong> {{ dog.height.metric }} cm</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos para el contenedor principal */
.container {
  display: flex;
  flex-wrap: wrap;
}

/* Estilos para el contenedor de cada tarjeta */
.card-container {
  width: 300px;
  height: 400px;
  perspective: 1000px;
  margin: 3rem auto;
}

/* Estilos para la tarjeta */
.card {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: transform 0.5s;
}

/* Estilos para la imagen del perro */
.dog-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: height 0.5s;
}

/* Estilos para la información del perro */
.info {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60%;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 0.5s;
}

/* Estilos para el hover de la tarjeta */
.card:hover .dog-image {
  height: 40%;
}

.card:hover .info {
  opacity: 1;
}

/* Estilos para los encabezados en la información del perro */
.info h2 {
  margin: 10px 0;
}

/* Estilos para los párrafos en la información del perro */
.info p {
  margin: 5px 0;
}
</style>
