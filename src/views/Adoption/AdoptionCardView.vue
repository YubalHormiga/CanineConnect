<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  adoption: {
    type: Object,
    require: true,
  },
});

const moreInformation = () => {};
</script>
<template>
  <div class="list-dogs">
    <div class="card-container">
      <div class="image-container">
        <img :src="adoption.image" :alt="adoption.name" />
      </div>
      <div class="text-container">
        <p class="name">{{ adoption.dogName }}</p>
        <p class="waiting">{{ adoption.adoptionStatus }}</p>
        <p class="needs">{{ adoption.title }}</p>
      </div>
      <div class="button-container">
        <RouterLink
          :to="{ name: 'dog-information', params: { id: adoption.id } }"
          class="more-info"
          >Más informacion</RouterLink
        >

      </div>
    </div>
  </div>
</template>
<style scoped>
.gender {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.card-container {
  width: 25rem;
  overflow: hidden;
  box-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
  margin-bottom: 1rem;
  text-align: center;
}
.image-container {
}
.image-container img {
  width: 100%;
  height: 20rem;
  display: block;
  object-fit: cover;
}
.text-container {
}
.name {
}
.waiting {
}
.needs {
}
.button-container {
  background-color: var(--bg-100);
  padding: 0.5rem;
}
.more-info {
  color: var(--bg-0);
  text-decoration: none
}
</style>
