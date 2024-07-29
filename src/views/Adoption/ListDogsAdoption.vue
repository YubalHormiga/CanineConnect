<script setup>
import { useAdoptionStore } from "@/stores/adoptionStore";
import AdoptionCardView from "./AdoptionCardView.vue";
import { ref, computed } from "vue";

const adoptionStore = useAdoptionStore();

const selectedGender = ref("indifferent");
const selectedCategory = ref("En adopción");

const sexSelect = (e) => {
  selectedGender.value = e.target.value;
};

const categorySelect = (e) => {
  selectedCategory.value = e.target.value;
};

const filteredAdoptions = computed(() => {
  // Filtrar por género
  const genderFiltered =
    selectedGender.value === "indifferent"
      ? adoptionStore.adoptionsCollection
      : adoptionStore.adoptionsCollection.filter(
          (adoption) => adoption.sex === selectedGender.value
        );

  // Filtrar por categoría
  const categoryFiltered = genderFiltered.filter(
    (adoption) => adoption.adoptionStatus === selectedCategory.value
  );

  return categoryFiltered;
});
</script>

<template>
  <div class="adoption-container">
    <div class="section">
      <section class="categories-container">
        <h2>Selecciona categoría</h2>
        <div class="categories">
          <div>
            <label>
              <input
                type="radio"
                name="category"
                value="En adopción"
                @change="categorySelect"
                checked
              />
              En adopción
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="category"
                value="Adopciones dobles"
                @change="categorySelect"
              />
              Adopciones dobles
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="category"
                value="En acogida"
                @change="categorySelect"
              />
              En acogida
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="category"
                value="Casos especiales"
                @change="categorySelect"
              />
              Casos especiales
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="category"
                value="Adoptados"
                @change="categorySelect"
              />
              Adoptados
            </label>
          </div>
        </div>
      </section>
      <section class="gender-container">
        <h2>Selecciona sexo</h2>
        <div class="gender">
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="indifferent"
                @change="sexSelect"
                checked
              />
              Indiferente
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Macho"
                @change="sexSelect"
              />
              Masculino
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Hembra"
                @change="sexSelect"
              />
              Femenino
            </label>
          </div>
        </div>
      </section>
    </div>
    <div class="adoptionCardView">
      <AdoptionCardView
        v-for="adoption in filteredAdoptions"
        :key="adoption.id"
        :adoption="adoption"
      />
    </div>
  </div>
</template>

<style scoped>
.section {
  margin: 0 2rem 2rem 0;
}
.adoptionCardView {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}
@media (min-width: 640px) {
  .adoption-container {
    display: flex;
  }
}

.categories-container {
}
.categories {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
