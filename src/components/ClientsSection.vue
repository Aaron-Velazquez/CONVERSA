<template>
  <section id="portafolio" class="clients-section">
    <h2 class="clients-title fade-up">ALGUNOS DE NUESTROS CLIENTES</h2>

    <div class="clients-slider fade-up" style="transition-delay: 0.2s;">
      <div class="slider-container">
        <div class="slider-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div class="slide" v-for="(client, index) in clients" :key="index">
            <div class="slide-content">
              <img :src="client.mockup" :alt="client.name" class="slide-bg" />
              <div class="client-info">
                <div class="logo-box">
                  <img :src="client.logo" :alt="client.name" class="client-logo" />
                </div>
                <p class="client-description" v-html="client.description"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="slider-indicators">
        <button
          v-for="(client, index) in clients"
          :key="index"
          :class="['indicator', { active: currentSlide === index }]"
          @click="goToSlide(index)"
          :aria-label="`Ver proyecto ${client.name}`"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

useScrollAnimation()

interface Client {
  name: string
  mockup: string
  logo: string
  description: string
}

const clients: Client[] = [
  {
    name: 'Ellaphant',
    mockup: '/img/ellaphant(1).webp',
    logo: '/img/-_ellaphant.svg',
    description: 'Agencia de <strong>marketing digital y branding</strong>'
  },
  {
    name: 'Ore Mbae',
    mockup: '/img/ore-mbae(1).webp',
    logo: '/img/-_ore-mbae.svg',
    description: '<strong>Biblioteca virtual</strong> con miles de poemas y canciones'
  },
  {
    name: 'Control Verde',
    mockup: '/img/control-verde(1).webp',
    logo: '/img/-_Control-verde.svg',
    description: 'Empresa de <strong>fumigación y control de plagas</strong>'
  },
  {
    name: 'Nubetec',
    mockup: '/img/nubetec(1).webp',
    logo: '/img/-_nubetec.svg',
    description: 'Soluciones en <strong>tecnología y cloud computing</strong>'
  },
  {
    name: 'Instachat',
    mockup: '/img/instachat(1).webp',
    logo: '/img/-_instachat.svg',
    description: 'Plataforma de <strong>mensajería empresarial</strong>'
  }
]

const currentSlide = ref(0)
let autoplayInterval: number | null = null

const goToSlide = (index: number) => {
  currentSlide.value = index
  resetAutoplay()
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % clients.length
}

const resetAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
  autoplayInterval = setInterval(nextSlide, 5000)
}

onMounted(() => {
  resetAutoplay()
})

onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
})
</script>

<style scoped>
.clients-section {
  padding: 80px 20px;
  background: #ffffff;
  overflow: hidden;
}

.clients-title {
  font-family: var(--font-display);
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
  color: #1a1a1a;
}

.clients-slider {
  max-width: 1200px;
  margin: 0 auto;
}

.slider-container {
  overflow: hidden;
  border-radius: 24px;
}

.slider-track {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide {
  min-width: 100%;
}

.slide-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 650px;
  border-radius: 24px;
  overflow: hidden;
}

.slide-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.client-info {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 12px;
  padding: 60px;
  padding-bottom: 120px;
  width: 40%;
}

.logo-box {
  background: #1a1a1a;
  border-radius: 10px;
  height: fit-content;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.client-logo {
  width: 100%;
}

.client-description {
  font-family: var(--font-sans);
  font-size: 22px;
  color: #333;
  line-height: 1.2;
}

.client-description :deep(strong) {
  font-weight: 700;
}

.slider-indicators {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: #d1d1d1;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.indicator:first-child {
  width: 28px;
  height: 8px;
  border-radius: 4px;
}

.indicator.active:first-child {
  background: #1a1a1a;
}

.indicator:not(:first-child).active {
  background: #f5c518;
}

.indicator:hover {
  transform: scale(1.2);
}

.slide-content {
  transition: transform 0.4s ease;
}

.logo-box {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.logo-box:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

@media (max-width: 900px) {
  .slide-content {
    min-height: 400px;
    justify-content: center;
    background-position: left center;
  }

  .client-info {
    width: 50%;
    padding: 30px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 16px;
    margin: 20px;
  }

  .logo-box {
    padding: 12px 20px;
  }

  .client-logo {
    max-width: 100px;
    max-height: 40px;
  }

  .client-description {
    font-size: 16px;
  }
}

@media (max-width: 600px) {
  .slide-content {
    min-height: 350px;
  }

  .client-info {
    width: 70%;
    padding: 20px;
  }
}
</style>
