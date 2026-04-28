<template>
  <header class="header header-animate">
    <div class="logo-wrapper">
      <a href="#" class="logo" @click.prevent="scrollTo('inicio')">
        <img src="/img/logo.png" alt="Conversa" class="logo-img" />
      </a>
    </div>
    <nav class="nav">
      <a href="#inicio" @click.prevent="scrollTo('inicio')">Inicio</a>
      <a href="#servicios" @click.prevent="scrollTo('servicios')">Servicios</a>
      <a href="#proceso" @click.prevent="scrollTo('proceso')">Sobre nosotros</a>
      <a href="#portafolio" @click.prevent="scrollTo('portafolio')">Portafolio</a>
    </nav>
    <div class="header-cta">
      <a href="#contacto" class="btn-secondary" @click.prevent="scrollTo('contacto')">Iniciar proyecto</a>
    </div>
    <div class="mobile-menu-btn-wrapper">
      <button @click="toggleMobileMenu" class="mobile-menu-btn">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </header>

  <!-- Mobile Menu -->
  <div :class="['mobile-menu', { active: mobileMenuOpen }]">
    <button @click="toggleMobileMenu" class="mobile-menu-close">
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <a href="#inicio" @click.prevent="scrollTo('inicio'); toggleMobileMenu()">Inicio</a>
    <a href="#servicios" @click.prevent="scrollTo('servicios'); toggleMobileMenu()">Servicios</a>
    <a href="#proceso" @click.prevent="scrollTo('proceso'); toggleMobileMenu()">Sobre nosotros</a>
    <a href="#portafolio" @click.prevent="scrollTo('portafolio'); toggleMobileMenu()">Portafolio</a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.header-animate {
  animation: headerSlideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes headerSlideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.logo-wrapper {
  transition: transform 0.3s ease;
}

.logo-wrapper:hover {
  transform: scale(1.05);
}
</style>
