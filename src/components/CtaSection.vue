<template>
  <section id="contacto" class="cta-section">
    <div class="cta-background">
      <svg class="cta-waves" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="rgba(255,255,255,0.03)" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <svg class="cta-waves cta-waves-2" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="rgba(255,255,255,0.02)" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>

    <div class="cta-container">
      <div class="cta-content fade-left">
        <p class="cta-subtitle">¿Listo para empezar?</p>
        <h2 class="cta-title">Comienza tu Proyecto con Nosotros</h2>
        <p class="cta-description">
          Contanos sobre tu negocio y te ayudamos a crear la página web que necesitás para aumentar tus ventas y visibilidad. Sin compromiso, sin letra chica.
        </p>
      </div>

      <div class="cta-form-wrapper fade-right" style="transition-delay: 0.2s;">
        <form class="cta-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Nombre<span class="required">*</span></label>
            <input type="text" id="name" v-model="form.name" placeholder="Tu nombre" required />
          </div>

          <div class="form-group">
            <label for="email">Email<span class="required">*</span></label>
            <input type="email" id="email" v-model="form.email" placeholder="tu@email.com" required />
          </div>

          <div class="form-group">
            <label for="phone">Teléfono</label>
            <input type="tel" id="phone" v-model="form.phone" placeholder="+595 981 123 456" />
          </div>

          <div class="form-group">
            <label for="message">Mensaje</label>
            <textarea id="message" v-model="form.message" placeholder="Contanos sobre tu proyecto..." rows="4"></textarea>
          </div>

          <div v-if="submitMessage" :class="['submit-message', { error: submitError }]">
            {{ submitMessage }}
          </div>

          <div class="form-buttons">
            <button type="submit" class="btn-submit" :disabled="isSubmitting">
              {{ isSubmitting ? 'Enviando...' : 'Enviar' }}
            </button>
            <button type="reset" class="btn-reset" @click="resetForm" :disabled="isSubmitting">Reset</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { contactsAPI } from '../composables/useAuth'
import { useScrollAnimation } from '../composables/useScrollAnimation'

useScrollAnimation()

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitError = ref(false)

const handleSubmit = async () => {
  if (isSubmitting.value) return

  isSubmitting.value = true
  submitMessage.value = ''
  submitError.value = false

  try {
    const { data, error } = await contactsAPI.create(form.value)

    if (error) {
      submitError.value = true
      submitMessage.value = (error as Error).message || 'Error al enviar el mensaje'
    } else {
      submitMessage.value = 'Mensaje enviado correctamente. Nos pondremos en contacto pronto.'
      resetForm()
    }
  } catch (err) {
    submitError.value = true
    submitMessage.value = 'Error al enviar el mensaje. Intenta de nuevo.'
  } finally {
    isSubmitting.value = false
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  }
}

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }
}
</script>

<style scoped>
.cta-section {
  width: 80%;
  max-width: 1400px;
  margin: 5vh auto;
  border-radius: 30px;
  position: relative;
  background: #1a1a1a;
  padding: 0px 20px;
}

.cta-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.cta-waves {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ctaWaveMove 10s ease-in-out infinite;
}

.cta-waves-2 {
  transform: scaleX(-1);
  opacity: 0.5;
  animation: ctaWaveMove 12s ease-in-out infinite reverse;
}

@keyframes ctaWaveMove {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px);
  }
}

.cta-waves-2 {
  animation-name: ctaWaveMove2;
}

@keyframes ctaWaveMove2 {
  0%, 100% {
    transform: scaleX(-1) translateX(0);
  }
  50% {
    transform: scaleX(-1) translateX(-20px);
  }
}

.cta-container {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  height: 500px;
}

.cta-content {
  flex: 1;
  max-width: 550px;
}

.cta-subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  margin-bottom: 16px;
}

.cta-title {
  color: #ffffff;
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 24px;
}

.cta-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  line-height: 1.6;
}

.cta-form-wrapper {
  flex-shrink: 0;
  width: 400px;
}

.cta-form {
  border: #999 solid 1px;
  height: 100%;
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.required {
  color: #e53935;
  margin-left: 2px;
}

.form-group input,
.form-group textarea {
  padding: 12px 0;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  font-size: 18px;
  color: #333;
  background: transparent;
  transition: border-color 0.3s ease;
  outline: none;
}

.form-group input:focus,
.form-group textarea:focus {
  border-bottom-color: #1a1a1a;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #999;
}

.form-group textarea {
  resize: none;
}

.form-buttons {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}

.btn-submit {
  background: #1a1a1a;
  color: #ffffff;
  border: none;
  padding: 14px 32px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.btn-submit::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s;
}

.btn-submit:hover::before {
  left: 100%;
}

.btn-submit:hover {
  background: #333;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn-reset {
  background: transparent;
  color: #1a1a1a;
  border: 2px solid #1a1a1a;
  padding: 14px 32px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-reset:hover {
  background: #1a1a1a;
  color: #ffffff;
  transform: translateY(-2px);
}

.btn-submit:disabled,
.btn-reset:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-message {
  padding: 12px;
  border-radius: 8px;
  background: #e8f5e9;
  color: #2e7d32;
  font-size: 14px;
  text-align: center;
}

.submit-message.error {
  background: #ffebee;
  color: #c62828;
}

@media (max-width: 900px) {
  .cta-section {
    width: 90%;
    padding: 40px 20px;
  }

  .cta-container {
    flex-direction: column;
    text-align: center;
    height: auto;
    gap: 40px;
  }

  .cta-content {
    max-width: 100%;
  }

  .cta-form-wrapper {
    width: 100%;
    max-width: 450px;
  }

  .cta-form {
    border: none;
  }
}

@media (max-width: 500px) {
  .cta-section {
    width: 95%;
    padding: 30px 15px;
    border-radius: 20px;
  }

  .cta-container {
    gap: 30px;
  }

  .cta-title {
    font-size: 28px;
  }

  .cta-description {
    font-size: 16px;
  }

  .cta-form {
    padding: 24px;
    border-radius: 12px;
  }

  .form-buttons {
    flex-direction: column;
  }

  .btn-submit,
  .btn-reset {
    width: 100%;
  }
}
</style>
