<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    @click="toggleTheme"
    class="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 p-3 transition-all duration-300 backdrop-blur"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <!-- Moon icon (shown in dark mode) -->
    <svg
      v-if="isDark"
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 text-lime-400 transition-transform duration-300"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>

    <!-- Sun icon (shown in light mode) -->
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 text-yellow-400 transition-transform duration-300"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fill-rule="evenodd"
        d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-1.414-1.414a2 2 0 021.414-3.414 4 4 0 010 5.656 2 2 0 01-1.414-3.414l1.414-1.414zM12 6a2 2 0 100-4 2 2 0 000 4z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
</template>

<style scoped>
</style>
