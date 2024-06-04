<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

import Link from "@/components/Link.vue";

import { useLostDogsStore } from "@/stores/lostDogsStore";
import { useAuthStore } from "@/stores/authStore.js";

import useImage from "@/composables/useImage";
import Spinner from "@/components/Spinner.vue";

const { url, onFileChange, isImageUploaded, spinner } = useImage("lostDogs_images");

const router = useRouter();

const lostDogsStore = useLostDogsStore();
const authStore = useAuthStore();

const formData = reactive({
  image: "",
  name: "",
  phone: "",
  email: "",
  location: "",
  date: "",
});

const handleSubmit = async (data) => {
  const { image, ...values } = data;
  try {
    await lostDogsStore.addLostDog({
      ...values,
      userId: authStore.userData.uid,
      image: url.value,
    });

    router.push({ name: "lost-dogs" });
  } catch (error) {
    console.log(error);
  }
};

const limitCharacters = (field, maxLength) => {
  if (formData[field].length >= maxLength) {
    formData[field] = formData[field].substring(0, maxLength);
  }
};
</script>

<template>
  <div class="container">
    <h4 class="gratitude-note">
      ¡Gracias por tu ayuda en la reunificación de mascotas perdidas!
    </h4>
    <p>
      Si has encontrado una mascota y deseas reportarlo para que su dueño pueda
      recuperarla, por favor sigue estos pasos: Completa el siguiente formulario
      con la información requerida sobre la mascota que encontraste. Asegúrate
      de proporcionar detalles precisos, como la descripción de la mascota, la
      ubicación donde la encontraste y cualquier otra información relevante.
      Adjunta una foto de la mascota para ayudar a identificarla más fácilmente.
      Una vez enviada la información se agregará a la sección de "Se Busca" para
      que los propietarios puedan buscar y reclamar a sus mascotas perdidas.
      Gracias por tu colaboración en la reunificación y devolución de mascotas
      perdidas.
    </p>
    <!-- Enlace para volver a la lista de objetos perdidos -->
    <Link to="lost-dogs">Volver a Se Busca</Link>
    <p class="gratitude-note">
      ¡Tu ayuda es fundamental para reunificación de mascotas perdidas!
    </p>
  </div>
  <div class="form">
    <FormKit type="form" submit-label="Enviar" @submit="handleSubmit">
      <FormKit
        type="file"
        label="Añade una imagen y espera a que se cargue"
        name="image"
        placeholder="Imagen"
        validation="required"
        :validation-messages="{
          required: 'La imagen es obligatoria',
        }"
        @change="onFileChange"
        v-model.trim="formData.image"
      />
      <!-- Spinner y previsualización de la imagen -->
      <div v-if="spinner" class="spinner">
        <Spinner />
      </div>
      <div v-else-if="isImageUploaded" class="image-container">
        <img :src="url" alt="Nueva imagen producto" class="image" />
      </div>
      <FormKit
        class="message-input"
        type="date"
        label="Fecha del hallazgo"
        name="date"
        format="DD MM YY"
        placeholder="Fecha en que se encontró la mascota"
        validation="required"
        :validation-messages="{
          required: 'La fecha es obligatoria',
        }"
        v-model.trim="formData.date"
      />
      <FormKit
        type="text"
        label="Nombre"
        name="name"
        placeholder="Nombre"
        validation="required"
        :validation-messages="{
          required: 'El nombre es Obligatorio',
        }"
        v-model.trim="formData.name"
      />
      <FormKit
        type="tel"
        label="Teléfono"
        name="phone"
        placeholder="Número de teléfono"
        validation="required"
        :validation-messages="{
          required: 'El Teléfono es Obligatorio',
        }"
        v-model.trim="formData.phone"
      />
      <FormKit
        type="email"
        label="Email"
        name="email"
        placeholder="Dirección de email"
        validation="required"
        :validation-messages="{
          required: 'El email es Obligatorio',
        }"
        v-model.trim="formData.email"
      />
      <FormKit
        type="textarea"
        label="Ubicación y detalles"
        name="location"
        placeholder="Dónde se encontró y cualquier detalle relevante"
        :help="`${formData.location.length} / 200`"
        validation="required | length:0,200"
        :validation-messages="{
          required: 'La ubicación es obligatoria',
          length: 'La ubicación no puede tener más de 120 caracteres.',
        }"
        validation-visibility="blur"
        v-model="formData.location"
        @imput="limitCharacters('location', 200)"
      />

    </FormKit>
  </div>
</template>
<style scoped>
.container {
  padding: 2rem;
}
.lostDog-container {
  padding: 2rem;
}
.gratitude-note {
  text-align: center;
}
/* Estilo del formulario */
.form {
  display: flex;
  justify-content: center; /* Centrar horizontalmente */
  margin-top: 2rem;
  align-items: center; /* Centrar verticalmente */
  min-height: 50vh; /* Altura mínima para centrar verticalmente */
}

.form > * {
  max-width: 40rem; /* Ancho máximo del formulario */
  width: 100%; /* Hace que el formulario ocupe todo el ancho disponible */
  margin: 0 auto;
  margin-bottom: 1rem; /* Espaciado entre elementos del formulario */
}

/* Estilo para el spinner */
.spinner {
  display: flex;
  justify-content: space-around;
  margin-top: 6rem;
}
/* Contenedor para la imagen */
.image-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

/* Estilo de la imagen */
.image {
  max-width: 20rem; /* Ajusta el ancho de la imagen */
  height: auto; /* Mantiene la proporción de la imagen */
  max-height: 20rem; /* Limita la altura máxima de la imagen */
}
</style>
