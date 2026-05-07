import { ref, watch, computed } from 'vue'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'portfolio-theme'

const theme = ref<Theme>(getInitialTheme())

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'

  // Check localStorage first
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored

  // Check system preference
  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light'
  }

  return 'dark'
}

export function useTheme() {
  const isDark = computed(() => theme.value === 'dark')
  const isLight = computed(() => theme.value === 'light')

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
  }

  watch(
    () => theme.value,
    (newTheme) => {
      localStorage.setItem(STORAGE_KEY, newTheme)

      if (newTheme === 'dark') {
        document.documentElement.classList.remove('light-mode')
        document.documentElement.classList.add('dark-mode')
      } else {
        document.documentElement.classList.remove('dark-mode')
        document.documentElement.classList.add('light-mode')
      }
    },
    { immediate: true }
  )

  return {
    theme: computed(() => theme.value),
    isDark,
    isLight,
    toggleTheme,
    setTheme,
  }
}
