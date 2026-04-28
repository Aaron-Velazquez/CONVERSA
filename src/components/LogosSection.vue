<template>
  <div class="logos-section">
    <div class="logos-container fade-up">
      <div class="logos-grid">
        <img src="/img/Control-verde.webp" alt="Control Verde" class="client-logo stagger-item" />
        <img src="/img/ellaphant.webp" alt="Ellaphant" class="client-logo stagger-item" />
        <img src="/img/instachat.webp" alt="Instachat" class="client-logo stagger-item" />
        <img src="/img/nubetec.webp" alt="Nubetec" class="client-logo stagger-item" />
        <img src="/img/ore-mbae.webp" alt="Ore Mbae" class="client-logo stagger-item" />
        <img src="/img/paz-global.webp" alt="Paz Global" class="client-logo stagger-item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScrollAnimation } from '../composables/useScrollAnimation'
useScrollAnimation()
</script>
