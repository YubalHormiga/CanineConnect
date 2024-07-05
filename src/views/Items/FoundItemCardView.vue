<!-- FoundItemCardView OK -->
<script setup>
/* Importaciones de bibliotecas externas */
import { RouterLink } from "vue-router";
import { ref, computed } from "vue";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

/* Importaciones de stores */
import { useItemsStore } from "@/stores/itemsStore";
import { useAuthStore } from "@/stores/authStore";

/* Importaciones de composable */
import useLocationMap from "@/composables/useLocationMap";

/* Definición de propiedades (props) */
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

/* Usamos el store de items */
const items = useItemsStore();
const authStore = useAuthStore();

const { zoom, pin } = useLocationMap();

/* Propiedad computada para verificar si el usuario actual es el propietario del objeto */
const isOwner = computed(() => props.item.userId === authStore.userData?.uid);

/* Estado reactivo para controlar la visibilidad de la información de contacto */
const showContactInfo = ref(false);

/* Función para alternar la visibilidad de la información de contacto */
const toggleContactInfo = () => {
  showContactInfo.value = !showContactInfo.value;
};

/* Propiedad computada para cambiar dinámicamente el texto del botón */
const buttonText = computed(() =>
  showContactInfo.value ? "Cerrar Contacto" : "Reclamar"
);
</script>

<template>
  <div class="card">
    <!-- Contenedor de la imagen del objeto -->
    <div class="card-image-container">
      <img :src="item.image" alt="Imagen del objeto perdido" class="card-img" />
    </div>
    <!-- Contenido de la tarjeta -->
    <div class="card-content">
      <div class="card-content-inner">
        <h2 class="card-title">{{ item.name }}</h2>
        <p class="card-description">{{ item.description }}</p>
        <div class="card-details">
          <div class="map-container">
            <LMap
              ref="map"
              v-model:zoom="zoom"
              :center="[item.map[0], item.map[1]]"
              :use-global-leaflet="false"
            >
              <LMarker
                :lat-lng="[item.map[0], item.map[1]]"
                draggable
                @moveend="pin"
              />
              <LTileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              ></LTileLayer>
            </LMap>
          </div>
          <p class="card-text"><span>Fecha:</span> {{ item.date }}</p>
          <p class="card-text"><span>Teléfono:</span> {{ item.phone }}</p>
          <p class="card-text"><span>Email:</span> {{ item.email }}</p>
          <p class="card-text-content">
            <span>Observaciones: </span> {{ item.observations }}
          </p>

          <div class="card-header" v-if="isOwner">
            <div class="button-container">
              <router-link
                :to="{ name: 'edit-item-found', params: { id: item.id } }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-pencil"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffbf00"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"
                  />
                  <path d="M13.5 6.5l4 4" />
                </svg>
              </router-link>
            </div>
            <div class="button-container">
              <button type="button" @click="items.deleteItem(item.id)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-trash"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffbf00"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 7l16 0" />
                  <path d="M10 11l0 6" />
                  <path d="M14 11l0 6" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor Mapa */
.map-container {
  height: 20rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1rem;
  color: white;
  margin-bottom: 1rem;
  margin: 0;
}

/* Estilos generales de la tarjeta */
.card {
  position: relative;
  width: 100vw;
  max-width: 25rem;
  height: 50rem;
  overflow: hidden;
  border-radius: 0.625rem;
  box-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.3s ease;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
}

.card-image-container {
  width: 100%;
  height: 66%;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30%; /* Ajuste del alto del contenido visible */
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 0%, 0.2) 0%,
    hsla(0, 0%, 0%, 0.5) 10%,
    hsl(0, 0%, 0%, 0.8) 100%
  );
  color: #fff;
  padding: 1rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transform: translateY(0);
}

.card:hover .card-content {
  height: 100%; /* Ocupa el 100% de la tarjeta al hacer hover */
}

.card-content-inner {
  opacity: 1;
}

.card-title {
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 0.5rem;
}

.card-description {
  margin-bottom: 1rem;
}

.card-details {
  display: none;
  flex-direction: column;
  transition: opacity 0.3s ease;
}
.card-details span {
  font-weight: 700;
  text-decoration: underline;
  color: var(--accent-100);
}

.card:hover .card-details {
  display: flex;
}

.card-text {
  margin: 0.5rem 0;
}

.card-text-content {
  max-height: 8rem;
  overflow-y: auto;
}

.card-header {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

/* Estilos del botón de reclamar/cerrar contacto */
.claim-button {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f8f8f8;
  cursor: pointer;
  transition: background-color 0.3s;
}

.claim-button:hover {
  background-color: #e0e0e0;
}

/* Botón sin estilos específicos */
button {
  border: none;
  background: none;
  cursor: pointer;
}
button:hover {
  border: none;
  background: none;
  cursor: pointer;
}
</style>
