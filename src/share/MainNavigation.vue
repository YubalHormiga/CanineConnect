<!-- MainNavigation.vue -->
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import { storeToRefs } from "pinia";

// Definición de los elementos de navegación
const navItems = [
  { text: "Inicio", to: "/" },
  { text: "Información", to: { name: "care" } },
  { text: "Adopción", to: { name: "adoption" } },
  { text: "Recursos", to: { name: "resources" } },
  { text: "Blog", to: { name: "blog" } },
  { text: "Objetos Perdidos", to: { name: "lost-items" } },
  { text: "Donar", to: { name: "donate" } },
  { text: "Se Busca", to: { name: "lost-dogs" } },
  { text: "Chat", to: { name: "chat" } },
];

// Uso del store de autenticación
const authStore = useAuthStore();
const route = useRoute();
const { isLoggedIn, userData } = storeToRefs(authStore);
const { logoutUser } = authStore;
const isMenuOpen = ref(false);

// Función para alternar el menú
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Función para cerrar el menú al hacer clic fuera de él
const closeMenu = (event) => {
  if (!event.target.closest(".navigation")) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeMenu);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", closeMenu);
});
</script>

<template>
  <div class="nav-container">
    <nav class="navigation">
      <!-- Sección izquierda: Menú hamburguesa -->
      <div class="left-section">
        <div class="hamburger-menu" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
      <!-- Sección central: Elementos de navegación -->
      <div :class="['nav-items', { open: isMenuOpen }]">
        <div class="nav-item" v-for="(item, index) in navItems" :key="index">
          <router-link
            active-class="active-link"
            class="nav-link"
            :to="item.to"
            >{{ item.text }}</router-link
          >
        </div>
      </div>
      <!-- Sección derecha: Bienvenida y cierre de sesión -->
      <div class="center-section" v-if="isLoggedIn && route.name !== 'login'">
        <div class="welcome-content">
          Bienvenid@ <span>{{ userData?.displayName ?? "Usuario" }}</span>
        </div>
      </div>
      <div class="right-section">
        <div v-if="isLoggedIn && route.name !== 'login'" class="logout-link">
          <router-link
            class="logoutUser"
            @click="logoutUser"
            :to="{ name: 'home' }"
            >Cerrar Sesión</router-link
          >
        </div>
        <div
          v-else-if="route.name !== 'login' && route.name !== 'register'"
          class="login-container"
        >
          <router-link :to="{ name: 'login' }" class="login-link">
            <div class="identity">
              <p class="identify-text">Inicia Sesión</p>
            </div>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
/* Contenedor principal de la navegación */
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem
}

/* Navegación */
.navigation {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10000;
}

/* Secciones */
.left-section,
.center-section,
.right-section {
  display: flex;
  align-items: center;
}

.center-section {
  flex: 1;
  justify-content: center;
  text-align: center;
}

.right-section {
  justify-content: flex-end;
  padding-right: 1rem;
}

.welcome-content,
.logout-link,
.login-container {
  margin-left: 1rem;
}

.logout-link,
.login-container {
  display: flex;
}

/* Menú hamburguesa */
.hamburger-menu {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger-menu .bar {
  width: 30px;
  height: 3px;
  background-color: #506a85;
  margin: 4px 0 4px 2px;
  transition: 0.4s;
}

.hamburger-menu:hover .bar {
  background-color: rgba(184, 89, 89, 0.7);
}

/* Elementos de navegación */
.nav-items {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.nav-item {
  text-align: center;
}

.nav-link {
  text-decoration: none;
  color: #333;
  padding: 1rem;
}

.active-link {
  color: rgba(184, 89, 89, 0.7);
  font-weight: 700;
}

/* Media Queries para diferentes tamaños de pantalla */
@media (max-width: 640px) {
  .hamburger-menu {
    display: flex;
  }

  .nav-items {
    position: absolute;
    top: 100%;
    left: 0;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    display: none;
    transition: max-height 0.3s ease;
    overflow: hidden;
    max-height: 0;
  }

  .nav-items.open {
    display: flex;
    max-height: 500px; /* Valor arbitrario grande para permitir el contenido */
  }

  .nav-item {
    width: 100%;
    text-align: left;
    padding: 1rem;
    border-bottom: 1px solid #ccc;
  }

  .left-section,
  .right-section,
  .center-section {
    flex: 1;
  }

  .center-section {
    justify-content: center;
  }

  .right-section {
    justify-content: flex-end;
  }

  .welcome-content,
  .logout-link,
  .login-container {
    margin-left: 0;
    margin-right: 1rem;
  }
}

@media (min-width: 641px) {
  .nav-items {
    flex: 1;
    justify-content: center;
  }

  .left-section {
    display: none;
  }

  .center-section {
    display: none;
  }

  .right-section {
    flex: none;
  }
}

/* Estilos para el enlace de inicio de sesión */
.login-link {
  text-decoration: none;
  color: #333;
}

.login-link:hover {
  text-decoration: underline;
  color: rgba(184, 89, 89, 0.7);
}

.identify-text {
  margin: 0 2rem 0 0;
}

/* Estilos para el enlace de cerrar sesión */
.logoutUser {
  text-decoration: none;
  color: #333;
}

.logoutUser:hover {
  text-decoration: underline;
  color: rgba(184, 89, 89, 0.7);
}
</style>
