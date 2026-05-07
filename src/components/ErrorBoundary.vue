<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  fallback?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  fallback: true,
})

const hasError = ref(false)
const error = ref<Error | null>(null)

const onError = (err: Error) => {
  hasError.value = true
  error.value = err
  console.error('Error boundary caught:', err)
}

// Vue 3 error handler is managed in main.ts or parent components
</script>

<template>
  <div v-if="hasError && fallback" class="rounded-lg border border-red-500/20 bg-red-500/10 p-6">
    <div class="flex items-center gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4v2m0 4v2m-6-14a9 9 0 1118 0 9 9 0 01-18 0z" />
      </svg>
      <div>
        <p class="text-sm font-medium text-red-400">Something went wrong</p>
        <p class="text-xs text-red-400/70">{{ error?.message || 'An unexpected error occurred' }}</p>
      </div>
    </div>
  </div>
  <div v-else>
    <slot />
  </div>
</template>

<style scoped>
</style>
