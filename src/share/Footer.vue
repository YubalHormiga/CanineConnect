
<!-- Footer -->
<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="footer-container">
    <div>
      <p class="footer-text">Copyright &copy; 2024 Yubal Hormiga</p>
    </div>
    <div class="footer-links">
      <div class="links">
        <a href="contact.html">Contact</a>
      </div>
      <div>
        <RouterLink :to="{name:'privacy-policy'}">Privacy Policy</RouterLink>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer-container {
  display: flex;
  flex-direction: column;
}

@media (min-width: 767px) {
  .footer-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
  }
}
.footer-text {
  margin: 0;
  text-align: center;
}
.footer-links {
  list-style-type: none;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 5rem;
}

.footer-links a {
  text-decoration: none;
  color: black; /* Cambia el color de los enlaces a negro */
}

.footer-links a:hover {
  text-decoration: underline; /* Opción adicional para subrayar al pasar el cursor */
}
</style>
