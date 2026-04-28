<template>
  <div class="contacts-container">
    <div class="header">
      <h2>Gestión de Contactos</h2>
      <div class="search-bar">
        <input
          type="text"
          v-model="searchTerm"
          placeholder="Buscar contactos..."
          class="search-input"
        >
      </div>
    </div>

    <!-- Mensajes -->
    <transition name="fade">
      <div v-if="errorMessage" class="message error">
        <span class="message-icon">⚠️</span>
        {{ errorMessage }}
      </div>
    </transition>
    <transition name="fade">
      <div v-if="successMessage" class="message success">
        <span class="message-icon">✓</span>
        {{ successMessage }}
      </div>
    </transition>

    <!-- Tabla para desktop -->
    <div class="table-container desktop-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Mensaje</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in filteredContacts" :key="contact.id">
            <td>{{ contact.id }}</td>
            <td>{{ contact.name }}</td>
            <td>{{ contact.email }}</td>
            <td>{{ contact.phone || 'N/A' }}</td>
            <td class="mensaje">{{ contact.message || 'Sin mensaje' }}</td>
            <td>{{ formatDate(contact.created_at) }}</td>
            <td class="actions">
              <button
                @click="confirmDelete(contact.id)"
                class="btn-icon delete"
                title="Eliminar"
              >
                🗑️
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Vista de tarjetas para móviles -->
    <div class="cards-container mobile-cards">
      <div
        v-for="contact in filteredContacts"
        :key="contact.id"
        class="contact-card"
      >
        <div class="card-header">
          <div class="contact-name">
            <h3>{{ contact.name }}</h3>
            <span class="contact-id">ID: {{ contact.id }}</span>
          </div>
          <div class="card-actions">
            <button
              @click="confirmDelete(contact.id)"
              class="btn-card delete"
              title="Eliminar"
            >
              🗑️
            </button>
          </div>
        </div>
        <div class="card-body">
          <div class="card-field">
            <strong>Email:</strong>
            <span>{{ contact.email }}</span>
          </div>
          <div class="card-field" v-if="contact.phone">
            <strong>Teléfono:</strong>
            <span>{{ contact.phone }}</span>
          </div>
          <div class="card-field" v-if="contact.message">
            <strong>Mensaje:</strong>
            <p>{{ contact.message }}</p>
          </div>
          <div class="card-field">
            <strong>Fecha:</strong>
            <span>{{ formatDate(contact.created_at) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Estado vacío -->
    <div v-if="filteredContacts.length === 0 && !loading" class="empty-state">
      <p>No hay contactos para mostrar</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { contactsAPI } from '../composables/useAuth'

interface Contact {
  id: number
  name: string
  email: string
  phone?: string
  message?: string
  created_at: string
}

const contacts = ref<Contact[]>([])
const searchTerm = ref('')
const errorMessage = ref('')
const successMessage = ref('')
const loading = ref(true)

const filteredContacts = computed(() => {
  return contacts.value.filter(contact => {
    const searchLower = searchTerm.value.toLowerCase()
    return (
      contact.name.toLowerCase().includes(searchLower) ||
      contact.email.toLowerCase().includes(searchLower) ||
      (contact.phone && contact.phone.toLowerCase().includes(searchLower)) ||
      (contact.message && contact.message.toLowerCase().includes(searchLower))
    )
  })
})

const formatDate = (dateString: string) => {
  if (!dateString) return 'N/A'
  return new Date(dateString).toLocaleDateString('es-PY', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const showMessage = (type: 'error' | 'success', text: string) => {
  if (type === 'error') {
    errorMessage.value = text
    setTimeout(() => (errorMessage.value = ''), 3000)
  } else {
    successMessage.value = text
    setTimeout(() => (successMessage.value = ''), 3000)
  }
}

const loadContacts = async () => {
  loading.value = true
  try {
    const { data, error } = await contactsAPI.getAll()

    if (error) {
      showMessage('error', (error as Error).message)
    } else if (data) {
      contacts.value = data
    }
  } catch (err) {
    showMessage('error', 'Error al cargar los contactos')
    console.error(err)
  } finally {
    loading.value = false
  }
}

const deleteContact = async (id: number) => {
  try {
    const { error } = await contactsAPI.delete(id)

    if (error) {
      showMessage('error', (error as Error).message)
    } else {
      showMessage('success', 'Contacto eliminado exitosamente')
      await loadContacts()
    }
  } catch (error) {
    showMessage('error', 'Error al eliminar el contacto')
  }
}

const confirmDelete = (id: number) => {
  if (window.confirm('¿Estás seguro de eliminar este contacto?')) {
    deleteContact(id)
  }
}

onMounted(() => {
  loadContacts()
})
</script>

<style scoped>
.contacts-container {
  background-color: #fff;
  width: 100%;
  padding: 1rem 0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.header h2 {
  font-size: 1.8rem;
  color: #1a1a1a;
  margin: 0;
}

.search-bar {
  width: 300px;
}

.search-input {
  width: 100%;
  padding: 0.7rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #1a1a1a;
  box-shadow: 0 0 0 3px rgba(26, 26, 26, 0.1);
}

.message {
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.message-icon {
  margin-right: 0.5rem;
}

.error {
  background-color: #fff5f5;
  color: #c53030;
  border: 1px solid #feb2b2;
}

.success {
  background-color: #f0fff4;
  color: #2f855a;
  border: 1px solid #9ae6b4;
}

.table-container {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow-x: auto;
}

table {
  width: 100%;
  min-width: 800px;
  border-collapse: separate;
  border-spacing: 0;
}

th {
  background-color: #f8f8f8;
  color: #1a1a1a;
  font-weight: 600;
  padding: 1rem;
  text-align: left;
  font-size: 0.9rem;
  border-bottom: 2px solid #e0e0e0;
}

td {
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
  color: #333;
  font-size: 0.9rem;
}

tr:last-child td {
  border-bottom: none;
}

tr:hover {
  background-color: #fafafa;
}

.actions {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.btn-icon {
  padding: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.btn-icon:hover {
  background-color: #f5f5f5;
}

.delete:hover {
  color: #e53e3e;
}

.mensaje {
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  color: #666;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Mobile cards - hidden on desktop */
@media (min-width: 769px) {
  .mobile-cards {
    display: none !important;
  }
}

@media (max-width: 768px) {
  .desktop-table {
    display: none;
  }

  .mobile-cards {
    display: block !important;
  }

  .header {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .header h2 {
    font-size: 1.4rem;
    text-align: center;
  }

  .search-bar {
    width: 100%;
  }
}

.cards-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #e0e0e0;
  overflow: hidden;
}

.card-header {
  background: #f8f8f8;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
}

.contact-name h3 {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
  color: #1a1a1a;
}

.contact-id {
  font-size: 0.8rem;
  color: #666;
}

.card-actions {
  display: flex;
  gap: 0.5rem;
}

.btn-card {
  padding: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 6px;
  font-size: 1.2rem;
  transition: background-color 0.2s;
}

.btn-card:hover {
  background-color: #eee;
}

.card-body {
  padding: 1rem;
}

.card-field {
  margin-bottom: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.card-field:last-child {
  margin-bottom: 0;
}

.card-field strong {
  font-size: 0.85rem;
  color: #666;
  font-weight: 600;
}

.card-field span {
  color: #333;
}

.card-field p {
  margin: 0;
  color: #333;
  line-height: 1.5;
}
</style>
