<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Top Section: Heading & CTA -->
      <div class="footer-top">
        <div class="footer-heading fade-up">
          <h2>¿Listo para tener <br/> tu página web?</h2>
          <!-- <a href="#" class="footer-cta-link">
            <span>Empezar mi proyecto</span>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a> -->
        </div>

        <!-- Contact concise info -->
        <div class="footer-contact fade-up" style="transition-delay: 0.1s;">
          <p>Alto Paraná, Paraguay</p>
          <p>contacto@conversa.com.py</p>
          <p>+595 973 236 438</p>
        </div>
      </div>

      <!-- Divider -->
      <div class="footer-divider"></div>

      <!-- Bottom Section: Navigation & Copyright -->
      <div class="footer-links">
        <!-- Brand Column -->
        <div class="footer-brand">
          <a href="#" class="logo">
            <img src="/img/logo.png" alt="Conversa" class="logo-img footer-logo-img" />
          </a>
          <p>Transformamos negocios en marcas digitales que atraen clientes y generan resultados medibles.</p>
        </div>

        <!-- Menu Links -->
        <!-- <div class="footer-column">
          <h4>Explora</h4>
          <ul>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Portafolio</a></li>
            <li><a href="#">Carreras</a></li>
          </ul>
        </div> -->

        <!-- Social Links -->
        <div class="footer-column">
          <h4>Social</h4>
          <ul>
            <li><a href="https://www.facebook.com/profile.php?id=61553693372809" target="_blank">Facebook</a></li>
            <li><a href="https://www.instagram.com/conversa.py" target="_blank">Instagram</a></li>
            <li><a href="https://wa.me/595973236438" target="_blank">WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p>&copy; 2024 Conversa Agency. Todos los derechos reservados.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useScrollAnimation } from '../composables/useScrollAnimation'
useScrollAnimation()
</script>
