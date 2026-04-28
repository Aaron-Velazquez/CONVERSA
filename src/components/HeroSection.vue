<template>
  <main id="inicio" class="hero">
    <p class="hero-subtitle">D I S E Ñ O &nbsp; W E B &nbsp; E S T R A T É G I C O</p>
    <h1 class="hero-title">
      Tu página web que convierte<br />
      visitantes en<br />
      <span class="thick-underline">clientes reales</span>
    </h1>
    <p class="hero-description">
      Diseñamos sitios web que no solo se ven bien, sino que venden.<br />
      Posicionamos tu marca en Google y te conectamos con quienes buscan lo que ofrecés.<br />
      <span>Es hora de que tu negocio trabaje para vos, incluso mientras dormís.</span>
    </p>
    <div class="hero-cta">
      <a href="#contacto" class="btn-primary" @click.prevent="scrollToContact">Quiero mi sitio web</a>
    </div>
    <div class="hero-features">
      <div class="hero-feature">
        <span class="feature-dot"></span>
        <span>Primeras posiciones en Google</span>
      </div>
      <div class="hero-feature">
        <span class="feature-dot"></span>
        <span>Consultas automatizadas</span>
      </div>
      <div class="hero-feature">
        <span class="feature-dot"></span>
        <span>Ventas sin límites geográficos</span>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const scrollToContact = () => {
  const element = document.getElementById('contacto')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
