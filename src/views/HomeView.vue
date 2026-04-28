<script setup lang="ts">
import BackgroundWaves from '../components/BackgroundWaves.vue'
import AppHeader from '../components/AppHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import LogosSection from '../components/LogosSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import ProcessSection from '../components/ProcessSection.vue'
import ClientsSection from '../components/ClientsSection.vue'
import CtaSection from '../components/CtaSection.vue'
import AppFooter from '../components/AppFooter.vue'
</script>

<template>
  <div class="app-wrapper">
    <div class="hero-wrapper">
      <AppHeader />
      <HeroSection />
      <BackgroundWaves />
    </div>
    <div class="gray-container">
      <LogosSection />
      <ServicesSection />
    </div>
    <ProcessSection />
    <ClientsSection />
    <CtaSection />
    <AppFooter />
  </div>
</template>
