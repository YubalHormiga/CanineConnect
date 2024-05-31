<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="call-to-action-section">
    <h2 class="cta-heading">¿Quieres ayudar?<span> en Construcción</span></h2>
    <ul class="cta-list">
      <li class="cta-item">
        <router-link :to="{ name: 'adoption' }" class="cta-link"
          >Adopta un perro</router-link
        >
      </li>
      <li class="cta-item">
        <router-link :to="{ name: 'donate' }" class="cta-link"
          >Dona para ayudar a los perros sin hogar</router-link
        >
      </li>
      <li class="cta-item">
        <a href="#" class="cta-link">Sé voluntario</a>
      </li>
      <li class="cta-item">
        <a href="#" class="cta-link">Comparte esta página web</a>
      </li>
    </ul>
  </section>
</template>
<style scoped>
.cta-item {
  list-style: none;
}

.cta-link {
  text-decoration: none;
}
span{
  color: red;
}
</style>
