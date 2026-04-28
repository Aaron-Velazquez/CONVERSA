<template>
  <div class="bg-waves">
    <img src="/img/header-pattern.svg" alt="" class="header-pattern" />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.bg-waves {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  z-index: 1;
}

.header-pattern {
  display: block;
  width: 100%;
  height: auto;
  pointer-events: none;
  animation: waveFloat 8s ease-in-out infinite;
}

@keyframes waveFloat {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-10px) scale(1.01);
  }
}
</style>
