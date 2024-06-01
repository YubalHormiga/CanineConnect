<script setup>
import { RouterView } from "vue-router";
import Header from "../src/share/Header.vue";
import Footer from "../src/share/Footer.vue";
import MainNavigation from "./share/MainNavigation.vue";
</script>

<template>
  <div class="wrapper">
    <div class="image">
      <MainNavigation />
      <Header />
      <div class="navigation container"></div>
    </div>
    <div class="router-container">
      <div class="container">
        <RouterView />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.image {
  background-image: url("/images/dogs.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 33%;
}
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.router-container {
  flex: 1;
  margin-bottom: 1rem;
}

.container {
  text-align: justify;
}
/* @media (min-width: 767px) {
  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 2rem
  }
} */
.navigation {
  border-radius: 3px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}
</style>
