import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  let observer: IntersectionObserver | null = null

  const initScrollAnimations = () => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          // Optional: unobserve after animation
          // observer?.unobserve(entry.target)
        }
      })
    }, options)

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.fade-up, .fade-in, .fade-left, .fade-right, .scale-in, .stagger-item'
    )

    animatedElements.forEach((el) => {
      observer?.observe(el)
    })
  }

  onMounted(() => {
    // Small delay to ensure DOM is ready
    setTimeout(initScrollAnimations, 100)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return {
    initScrollAnimations
  }
}
