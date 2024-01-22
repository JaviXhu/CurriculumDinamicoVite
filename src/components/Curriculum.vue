<script setup>
import { ref } from 'vue';

// Definición de un objeto "Persona" con información personal
let Persona = {
  Nombre: 'Javier',
  Apellido1: 'Ramos',
  Apellido2: 'Acosta',
  ciudad: 'El Paso',
  email: 'javierrm.cn@gmail.com',
  experienciasLaborales: [
    {
      empresa: 'ACICANARIAS',
      ciudad: 'El Paso',
      pais: 'España',
      inicio: 2022,
      fin: null, //null si aún trabajas o  el año de finalización
      titulo: 'Desarrollador Web',
    },
  ],
  codigoPostal: '38750',
  fechaNac: '16_01_2002',
  educacion: [
    {
      centro: 'IES EL PASO',
      titulo: 'Bachillerato',
      inicio: 2018,
      fin: 2020,
    },
    {
      centro: 'IES JOSÉ MARÍA PÉREZ PULIDO',
      titulo: 'Desarrollador Web',
      inicio: 2022,
      fin: 2024, // O null si aún estás estudiando
    },
  ],
  titulo: 'Desarrollador Web',
  habilidades: [
    'CSS3',
    'HTML5',
    'JavaScript',
    'Java',
    'Python',
    'Laravel',
    'PHP',
  ],
  telefono: '+34 697 31 76 91',
  pais: 'España',
  saludo: function () {
    console.log('Hola mundo, soy un estudiante de desarrollo web');
  },
};
</script>

<template>
  <body>
    <!-- Encabezado que muestra el nombre y el título de la persona -->
    <header>
      <h1>{{ Persona.Nombre }}</h1>
      <p>{{ Persona.titulo }}</p>
    </header>

    <!-- Sección de Experiencia Laboral -->
    <section>
      <h2>Experiencia Laboral</h2>
      <ul>
        <li
          v-for="experiencia in Persona.experienciasLaborales"
          :key="experiencia.empresa"
        >
          <strong>{{ experiencia.empresa }}</strong> - {{ experiencia.ciudad }},
          {{ experiencia.pais }}<br />
          <em>Posición:</em> {{ experiencia.titulo }}<br />
          <em>Inicio:</em> {{ experiencia.inicio }} -
          {{ experiencia.fin || 'Actualidad' }}<br />
        </li>
      </ul>
    </section>

    <!-- Sección de Educación -->
    <section>
      <h2>Educación</h2>
      <ul>
        <li
          v-for="educacionItem in Persona.educacion"
          :key="educacionItem.centro"
        >
          <strong>{{ educacionItem.centro }}</strong
          ><br />
          <em>Título:</em> {{ educacionItem.titulo }}<br />
          <em>Fecha:</em> {{ educacionItem.inicio }} -
          {{ educacionItem.fin || 'Actualidad' }}<br />
        </li>
      </ul>
    </section>

    <!-- Sección de Habilidades Técnicas -->
    <section>
      <h2>Habilidades Técnicas</h2>
      <ul>
        <li>{{ Persona.habilidades.join(', ') }}</li>
      </ul>
    </section>

    <!-- Sección de Información de Contacto -->
    <section class="contacto">
      <h2>Información de Contacto</h2>
      <p>Email: {{ Persona.email }}</p>
      <p>Teléfono: {{ Persona.telefono }}</p>
    </section>
  </body>
</template>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  margin: ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222;
  color: #ddd;
  padding: 20px;
}

header,
section,
footer {
  margin-bottom: 20px;
  background-color: #333;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}

h1,
h2 {
  color: #fff;
}

h2 {
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

.contacto {
  margin-top: 20px;
  background-color: #444;
  padding: 15px;
  border-radius: 8px;
}

.contacto p {
  margin: 8px 0;
}

/* Agregando estilos para enlaces */
a {
  color: #4caf50;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
