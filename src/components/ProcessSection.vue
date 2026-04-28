<template>
  <section id="proceso" class="process-section">
    <!-- Header Text Area -->
    <div class="process-header fade-up">
      <p class="process-subtitle">N U E S T R O &nbsp; P R O C E S O</p>
      <h2>TU PRESENCIA DIGITAL EN 4 PASOS</h2>
      <p class="process-description">
        Un proceso claro, sin sorpresas. Vos te enfocás en tu negocio, nosotros en llevarlo al mundo digital.
      </p>
      <a href="#contacto" class="btn-dark">Empezar ahora</a>
    </div>

    <!-- Steps and Image Container -->
    <div class="process-content">
      <!-- Steps Row -->
      <div class="process-steps">
        <div class="process-step stagger-item">
          <h3>Descubrimiento</h3>
          <p>Conocemos tu negocio, tus clientes ideales y tus objetivos comerciales. Definimos juntos la estrategia.</p>
        </div>
        <div class="process-step stagger-item">
          <h3>Diseño estratégico</h3>
          <p>Creamos una experiencia visual que transmite profesionalismo y guía al usuario hacia la conversión.</p>
        </div>
        <div class="process-step stagger-item">
          <h3>Desarrollo optimizado</h3>
          <p>Construimos con tecnología moderna: velocidad de carga rápida, adaptable a móviles y preparado para SEO.</p>
        </div>
        <div class="process-step stagger-item">
          <h3>Lanzamiento y soporte</h3>
          <p>Publicamos tu sitio y te acompañamos. Capacitación incluida para que puedas gestionar tu contenido.</p>
        </div>
      </div>

      <!-- Background Image -->
      <div class="process-image scale-in">
        <img src="/img/proceso-bg.svg" alt="Proceso" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollAnimation } from '../composables/useScrollAnimation'
useScrollAnimation()
</script>
