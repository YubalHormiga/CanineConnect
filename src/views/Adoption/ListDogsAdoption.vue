<script setup></script>

<template>
  <div class="adoption-container">
    <div class="section">
      <section class="categories-container">
        <h2>Selecciona categoría</h2>
        <div class="categories">
          <div>
            <label>
              <input type="radio" name="category" value="InAdoption" /> En
              adopción
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="category" value="DoubleAdoptions" />
              Adopciones dobles
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="category" value="InFosterCare" /> En
              acogida
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="category" value="SpecialCases" /> Casos
              especiales
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="category" value="Adopted" /> Adoptados
            </label>
          </div>
        </div>
      </section>
      <section class="gender-container">
        <h2>Selecciona sexo</h2>
        <div class="gender">
          <div>
            <label>
              <input type="radio" name="category" value="indifferent " />
              Indiferente
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="gender" value="male" /> Masculino
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="gender" value="female" />
              Femenino
            </label>
          </div>
        </div>
      </section>
    </div>
    <div class="list-dogs">
      <div class="card-container">
        <div class="image-container">
          <img src="../../../public/dog1.jpg" alt="perro1" />
        </div>
        <div class="text-container">
          <p class="name">Nombre</p>
          <p class="waiting">Ellos también Esperan</p>
          <p class="needs">Una familia con experiencia</p>
        </div>
        <div class="button-container">
          <button class="more-info">Más Información</button>
        </div>
      </div>
      <div class="card-container">
        <div class="image-container">
          <img src="../../../public/dog2.jpg" alt="perro1" />
        </div>
        <div class="text-container">
          <p class="name">Nombre</p>
          <p class="waiting">Ellos también Esperan</p>
          <p class="needs">Una familia con experiencia</p>
        </div>
        <div class="button-container">
          <button class="more-info">Más Información</button>
        </div>
      </div>
      <div class="card-container">
        <div class="image-container">
          <img src="../../../public/dog3.jpg" alt="perro1" />
        </div>
        <div class="text-container">
          <p class="name">Nombre</p>
          <p class="waiting">Ellos también Esperan</p>
          <p class="needs">Una familia con experiencia</p>
        </div>
        <div class="button-container">
          <button class="more-info">Más Información</button>
        </div>
      </div>
      <div class="card-container">
        <div class="image-container">
          <img src="../../../public/dog4.jpg" alt="perro1" />
        </div>
        <div class="text-container">
          <p class="name">Nombre</p>
          <p class="waiting">Ellos también Esperan</p>
          <p class="needs">Una familia con experiencia</p>
        </div>
        <div class="button-container">
          <button class="more-info">Más Información</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.adoption-container {

}
@media (min-width: 640px) {
  .adoption-container {
    display: flex;
  }
}
.list-dogs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
.categories-container {
}
.categories {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.gender-container {
  margin-bottom: 2rem

    
}
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
}
</style>
