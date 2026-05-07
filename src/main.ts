import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)

app.directive('reveal', {
  mounted(el, binding) {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    const delay =
      typeof binding.value === 'number'
        ? binding.value
        : typeof binding.value === 'object' && binding.value && typeof binding.value.delay === 'number'
          ? binding.value.delay
          : 0

    el.classList.add('reveal')

    if (prefersReducedMotion) {
      el.classList.add('reveal--show')
      return
    }

    if (delay) {
      el.style.transitionDelay = `${delay}ms`
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--show')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(el)
  },
})

app.use(router).mount('#app')
