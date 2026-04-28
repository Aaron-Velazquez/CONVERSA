<template>
  <section id="servicios" class="services-section">
    <div class="services-wrapper">
      <div class="services-container">
        <div class="services-header">
          <div class="services-title-section fade-up">
            <p>Q U É &nbsp; O F R E C E M O S</p>
            <h2>UNA PÁGINA WEB<br/>QUE GENERA<br/>RESULTADOS</h2>
          </div>
          <div class="services-description fade-up" style="transition-delay: 0.1s;">
            <div class="services-description-text">
              No se trata solo de tener un sitio bonito. Se trata de construir una herramienta de ventas que trabaja las 24 horas, los 365 días del año. Cada elemento que diseñamos tiene un objetivo: que más personas te encuentren, confíen en vos y te elijan.
              <br><br>
              <span>Estrategia, diseño y tecnología al servicio de tu crecimiento comercial.</span>
            </div>
          </div>
        </div>
        <div class="services-grid">
          <div class="service-card stagger-item">
            <div class="service-dot blue"></div>
            <h3>Aparecé donde te buscan</h3>
            <p>Optimizamos tu sitio para los motores de búsqueda. Cuando alguien busque lo que vendés en Google, tu negocio va a estar ahí, visible y listo para captar esa oportunidad antes que tu competencia.</p>
          </div>
          <div class="service-card stagger-item">
            <div class="service-dot yellow"></div>
            <h3>Convertí visitas en ventas</h3>
            <p>Un diseño profesional genera confianza instantánea. Estructuramos cada sección para guiar al visitante hacia la acción: que te contacte, que pida presupuesto, que compre. Sin fricciones, sin dudas.</p>
          </div>
          <div class="service-card stagger-item">
            <div class="service-dot light-blue"></div>
            <h3>Expandí tu alcance</h3>
            <p>Rompé las barreras geográficas. Con presencia online, tus productos y servicios llegan a clientes de cualquier parte, a cualquier hora. Tu negocio deja de depender solo del boca a boca local.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollAnimation } from '../composables/useScrollAnimation'
useScrollAnimation()
</script>
