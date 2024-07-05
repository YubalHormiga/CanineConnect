<script setup>
/* Definición de propiedades (props) */
const props = defineProps({
  story: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="card-container">
    <h3 class="story-title">{{ story.storyTitle }}</h3>
    <div>
      <img
        :src="story.image"
        :alt="story.storyTitle"
        class="story-image"
        loading="lazy"
      />
      <p>{{ story.overcomingFear }}</p>
    </div>
  </div>
</template>
<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin-bottom: 2rem;
  border-radius: 0.625rem;
  box-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
h2 {
  display: inline-block;
}
.story-image {
  width: 10rem;
  height: 10rem;
  float: left;
  border-radius: 50%;
  margin: 0 10px 0 0; /* Agrega espacio alrededor de la imagen */
}
</style>
