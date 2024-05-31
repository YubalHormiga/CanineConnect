<script setup>
import { reactive } from "vue";
import { useLostDogsStore } from "@/stores/lostDogsStore";
import Link from "@/components/Link.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const lostDogsStore = useLostDogsStore();

const formData = reactive({
  name: "",
  phone: "",
  email:'',
  location: "",
  date: "",
});

const handleSubmit = async (data) => {
  try {
    await lostDogsStore.addLostDog(data);
    console.log(data);
    router.push({ name: "lost-dogs" });
  } catch (error) {
    console.log(error);
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
      <!-- <FormKit
        type="file"
        label="Añade una imagen"
        name="image"
        placeholder="Imagen"
        v-model="formData.image"
      /> -->
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
        type="text"
        label="Ubicación"
        name="location"
        placeholder="Lugar donde se encontró la mascota"
        validation="required"
        :validation-messages="{
          required: 'La ubicación es Obligatoria',
        }"
        v-model="formData.location"
      />
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
</style>
