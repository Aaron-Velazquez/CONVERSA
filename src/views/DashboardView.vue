<template>
  <main class="dashboard-container">
    <h1>Bienvenido al Dashboard de Conversa</h1>
    <p>Desde aquí puedes gestionar los contactos del formulario de tu sitio web.</p>
    <div class="quick-links">
      <router-link to="/dashboard/contacts" class="quick-link-card">
        <div class="icon">📧</div>
        <h3>Contactos</h3>
        <p>Ver y gestionar mensajes de contacto</p>
      </router-link>
    </div>
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
.dashboard-container {
  width: 100%;
  padding: 2rem;
  color: #1a1a1a;
}

.dashboard-container h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.dashboard-container > p {
  font-size: 1.125rem;
  color: #666;
  margin-bottom: 3rem;
}

.quick-links {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.quick-link-card {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.quick-link-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: #1a1a1a;
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.quick-link-card h3 {
  color: #1a1a1a;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.quick-link-card p {
  color: #666;
  font-size: 0.95rem;
  margin: 0;
}

@media (max-width: 768px) {
  .dashboard-container {
    padding: 1rem;
  }

  .dashboard-container h1 {
    font-size: 1.5rem;
  }

  .dashboard-container > p {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .quick-links {
    grid-template-columns: 1fr;
  }
}
</style>
