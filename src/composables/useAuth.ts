// API Base URL - Actualizar con tu dominio de cPanel
const API_URL = '/api'

export const authAPI = {
  // Login
  async login(email: string, password: string) {
    try {
      const response = await fetch(`${API_URL}/auth.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al iniciar sesión')
      }

      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  },

  // Verificar sesión
  async getSession() {
    try {
      const response = await fetch(`${API_URL}/auth.php`, {
        method: 'GET',
        credentials: 'include'
      })

      const data = await response.json()

      if (data.authenticated) {
        return {
          data: {
            session: {
              user: data.user
            }
          },
          error: null
        }
      }

      return { data: { session: null }, error: null }
    } catch (error) {
      return { data: { session: null }, error }
    }
  },

  // Logout
  async signOut() {
    try {
      const response = await fetch(`${API_URL}/auth.php`, {
        method: 'DELETE',
        credentials: 'include'
      })

      const data = await response.json()
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }
}

export const contactsAPI = {
  // Obtener todos los contactos
  async getAll() {
    try {
      const response = await fetch(`${API_URL}/contacts.php`, {
        method: 'GET',
        credentials: 'include'
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al obtener contactos')
      }

      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  },

  // Crear contacto (público - desde formulario)
  async create(contactData: { name: string; email: string; phone?: string; message?: string }) {
    try {
      const response = await fetch(`${API_URL}/contacts.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al crear contacto')
      }

      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  },

  // Eliminar contacto
  async delete(id: number) {
    try {
      const response = await fetch(`${API_URL}/contacts.php?id=${id}`, {
        method: 'DELETE',
        credentials: 'include'
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al eliminar contacto')
      }

      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }
}
