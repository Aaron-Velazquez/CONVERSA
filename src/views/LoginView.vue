<template>
  <main class="login-container">
    <div class="login">
      <img src="/img/logo.png" alt="Conversa" class="logo" />
      <h1>Panel de Control</h1>
      <form @submit.prevent="login">
        <input type="text" placeholder="Correo electrónico" id="email" v-model="email" required />
        <input type="password" placeholder="Contraseña" id="password" v-model="password" required />
        <button type="submit" :disabled="loading">
          {{ loading ? 'Ingresando...' : 'Ingresar' }}
        </button>
      </form>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { authAPI } from '../composables/useAuth'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const loading = ref(false)

const router = useRouter()

const login = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const { data, error } = await authAPI.login(email.value, password.value)

    if (error) {
      errorMessage.value = (error as Error).message
      return
    }

    router.push('/dashboard/contacts')
  } catch (err) {
    errorMessage.value = 'Error al iniciar sesión'
    console.error(err)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-container {
  width: 100%;
  min-height: 100vh;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.logo {
  width: 180px;
  height: auto;
  margin-bottom: 30px;
}

.login h1 {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 40px;
  font-weight: 600;
}

.login form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.login input {
  width: 100%;
  padding: 14px 18px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.login input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.login input:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.1);
}

.login button {
  width: 100%;
  padding: 14px;
  background-color: white;
  color: #1a1a1a;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.login button:hover:not(:disabled) {
  background-color: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
}

.login button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.error-message {
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.1);
  padding: 12px;
  border-radius: 8px;
  margin-top: 1rem;
  font-size: 0.9rem;
  border: 1px solid rgba(255, 107, 107, 0.3);
}

@media (max-width: 480px) {
  .login {
    padding: 1.5rem;
  }

  .logo {
    width: 140px;
  }

  .login h1 {
    font-size: 1.25rem;
  }
}
</style>
