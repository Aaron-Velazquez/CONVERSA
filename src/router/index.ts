import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import ContactsView from '../views/ContactsView.vue'
import DashboardLayout from '../layouts/DashboardLayout.vue'
import { authAPI } from '../composables/useAuth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Conversa | Diseño Web Estratégico'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: {
        title: 'Iniciar Sesión | Conversa'
      }
    },
    {
      path: '/dashboard',
      component: DashboardLayout,
      meta: {
        requiresAuth: true,
        title: 'Dashboard | Conversa'
      },
      children: [
        {
          path: '',
          name: 'DashboardHome',
          component: DashboardView,
          meta: {
            title: 'Dashboard | Conversa'
          }
        },
        {
          path: 'contacts',
          name: 'DashboardContacts',
          component: ContactsView,
          meta: {
            title: 'Contactos | Conversa'
          }
        }
      ]
    }
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

// Guard de autenticación
router.beforeEach(async (to, from, next) => {
  // Aplicar título de la página
  if (to.meta.title) {
    document.title = to.meta.title as string
  } else {
    document.title = 'Conversa | Diseño Web Estratégico'
  }

  // Verificar si la ruta requiere autenticación
  if (to.meta.requiresAuth) {
    const { data } = await authAPI.getSession()
    if (!data.session) {
      return next('/login')
    }
  }
  next()
})

export default router
