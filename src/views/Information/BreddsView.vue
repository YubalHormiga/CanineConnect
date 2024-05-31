<script setup>
import { onMounted } from "vue";
import { useDogBreedsSore } from "@/stores/dogBreedsStore";

const dogs = useDogBreedsSore();

onMounted(async () => {
  await dogs.fetchDogBreedsData();
});
</script>
<template>
  <div class="container">
    <div class="card-container" v-for="dog in dogs.dogBreedsData" :key="dog.id">
      <div class="card">
        <img :src="dog.image.url" alt="Dog image" class="dog-image" />
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
.container {
  display: flex;
  flex-wrap: wrap;
}
.card-container {
  width: 300px;
  height: 400px;
  perspective: 1000px;
  margin: 3rem auto;
}

.card {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: transform 0.5s;
}

.card:hover .dog-image {
  height: 40%;
}

.card:hover .info {
  opacity: 1;
}

.dog-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: height 0.5s;
}

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

.info h2 {
  margin: 10px 0;
}

.info p {
  margin: 5px 0;
}
</style>
