<script setup>
import Link from "@/components/Link.vue";

Link;
</script>

<template>
  <Link to="adoption">Volver</Link>
  <header>
    <h1>¡Bienvenidos a CaniniConnect!</h1>
  </header>

  <main>
    <p>
      En CaniniConnect, nuestra misión es encontrar hogares amorosos para cada
      perro que lo necesite. Nos enorgullece colaborar con protectoras y
      refugios para hacer realidad este sueño.
    </p>
    
  </main>
  <section>
    <h2>¿Cómo funciona?</h2>
    <article>
      <h3>Publica Perfiles de Perros:</h3>
      <p>
        Explora nuestra aplicación hoy y descubre cómo puedes cambiar una vida y
        la tuya. Si tienes alguna pregunta o necesitas ayuda, nuestro equipo
        está disponible para asistirte. <br />
      </p>
    </article>
    <article>
      <h3>Conecta con Adoptantes:</h3>
      <p>
        Recibe solicitudes de adopción y gestiona las consultas directamente a
        través de nuestra plataforma.
      </p>
    </article>
    <article>
      <h3>Hacemos el Resto:</h3>
      <p>
        Nosotros nos encargamos de difundir los perfiles y ayudar a encontrar la
        mejor familia para cada uno de tus perros.
      </p>
    </article>
  </section>
  <section>
    <h2>¿Por qué elegir CaniniConnect?</h2>
    <article>
      <h3>Visibilidad Ampliada:</h3>
      <p>
        Nuestra aplicación llega a una amplia audiencia de posibles adoptantes
        comprometidos.
      </p>
    </article>
    <article>
      <h3>Facilidad de Uso:</h3>
      <p>
        Herramientas intuitivas para gestionar perfiles, solicitudes y
        comunicaciones.
      </p>
    </article>
    <article>
      <h3>Soporte Continuo:</h3>
      <p>
        Nuestro equipo está aquí para ayudarte en cada paso del proceso.
        <br />
        <span>¡Únete a nosotros y marca la diferencia! </span>
      </p>
    </article>
  </section>
</template>
<style scoped>
h1 {
  text-align: center;
}
h2,
p {
  margin-bottom: 1rem;
}
span {
  display: block;
  text-align: center;
  color: var(--accent-200);
  font-weight: bold;
}
</style>
