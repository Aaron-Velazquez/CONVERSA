<template>
  <div class="dashboard-layout">
    <!-- Toggle button para móviles -->
    <button class="sidebar-toggle" :class="{ 'active': sidebarOpen }" @click="toggleSidebar" v-show="showToggle">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>

    <!-- Overlay para cerrar sidebar en móvil -->
    <div class="sidebar-overlay" v-if="sidebarOpen && showToggle" @click="closeSidebar"></div>

    <div class="sidebar" :class="{ 'sidebar-open': sidebarOpen }">
      <div class="sidebar-container">
        <figure>
          <img src="/img/logo.png" alt="Conversa">
        </figure>
        <ul>
          <li><router-link to="/dashboard/contacts" @click="closeSidebar">Contactos</router-link></li>
        </ul>
      </div>
      <div class="sidebar-footer">
        <p>{{ userEmail }}</p>
        <button @click="logout">Cerrar sesión</button>
      </div>
    </div>

    <div class="content">
      <div class="navbar">
        <div class="saludo">
          <h1>Dashboard</h1>
          <p>Bienvenido {{ userEmail }}</p>
        </div>
        <button onclick="window.location.href='/'">Volver al inicio</button>
      </div>
      <div class="linea"></div>

      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { authAPI } from '../composables/useAuth'
import { useRouter } from 'vue-router'

const router = useRouter()

const userEmail = ref('')
const sidebarOpen = ref(false)
const showToggle = ref(false)

const checkScreenSize = () => {
  showToggle.value = window.innerWidth <= 600
  if (window.innerWidth > 600) {
    sidebarOpen.value = false
  }
}

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const closeSidebar = () => {
  sidebarOpen.value = false
}

onMounted(async () => {
  const { data } = await authAPI.getSession()
  if (data?.session?.user) {
    userEmail.value = data.session.user.email
  }

  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})

const logout = async () => {
  await authAPI.signOut()
  router.push('/login')
}
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  min-height: 100vh;
  background: #fff;
}

.sidebar {
  display: flex;
  height: 100vh;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  background: #1a1a1a;
  padding: 1rem;
  color: #fff;
  z-index: 1000;
}

.sidebar-container {
  display: flex;
  flex-direction: column;
  height: 60%;
}

.sidebar figure {
  text-align: center;
  margin: 20px auto 2rem;
  padding: 15px;
  width: 160px;
}

.sidebar img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.sidebar ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar li {
  margin-bottom: 0.5rem;
}

.sidebar a {
  display: block;
  padding: 0.75rem 12px;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.sidebar a:hover,
.sidebar a.router-link-active {
  background: rgba(255, 255, 255, 0.1);
}

.sidebar-footer p {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 10px;
  word-break: break-all;
}

.sidebar-footer button {
  width: 100%;
  background: #e53935;
  color: #fff;
  border: none;
  padding: 0.6rem 1rem;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.sidebar-footer button:hover {
  background: #c62828;
}

.content {
  margin-left: 250px;
  width: 100%;
  padding: 1.5rem;
}

.navbar {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.saludo {
  color: #1a1a1a;
}

.saludo h1 {
  font-size: 2rem;
  margin: 0;
}

.saludo p {
  font-size: 1rem;
  margin: 0;
  color: #666;
}

.navbar button {
  background: #1a1a1a;
  color: #fff;
  padding: 0.6rem 1.2rem;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.navbar button:hover {
  background: #333;
}

.linea {
  width: 100%;
  height: 1px;
  background: #e0e0e0;
  margin: 1rem 0;
}

/* Toggle button */
.sidebar-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 44px;
  height: 44px;
  background: #1a1a1a;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  z-index: 1002;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.hamburger-line {
  width: 22px;
  height: 2px;
  background: #fff;
  border-radius: 1px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.sidebar-toggle.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.sidebar-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.sidebar-toggle.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.sidebar-toggle:hover {
  background: #333;
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

/* Responsive */
@media (max-width: 900px) {
  .sidebar {
    width: 200px;
  }

  .content {
    margin-left: 200px;
  }

  .sidebar figure {
    width: 130px;
  }
}

@media (max-width: 600px) {
  .sidebar {
    position: fixed;
    left: -260px;
    top: 0;
    width: 250px;
    height: 100vh;
    transition: left 0.3s ease;
    z-index: 1001;
  }

  .sidebar.sidebar-open {
    left: 0;
  }

  .sidebar-toggle {
    display: flex;
  }

  .content {
    margin-left: 0;
    width: 100%;
    padding: 1rem;
  }

  .navbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding-top: 50px;
  }

  .saludo h1 {
    font-size: 1.5rem;
  }

  .navbar button {
    align-self: flex-start;
  }
}
</style>
