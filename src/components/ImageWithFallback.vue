<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  src: string
  alt: string
  fallbackSrc?: string
  class?: string
  loading?: 'lazy' | 'eager'
  decoding?: 'async' | 'sync' | 'auto'
}

const props = withDefaults(defineProps<Props>(), {
  fallbackSrc: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23333" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23999"%3EImage not available%3C/text%3E%3C/svg%3E',
  loading: 'lazy',
  decoding: 'async',
})

const imageSrc = ref(props.src)
const hasError = ref(false)

const handleError = () => {
  if (!hasError.value) {
    hasError.value = true
    imageSrc.value = props.fallbackSrc || ''
  }
}

const handleLoad = () => {
  hasError.value = false
}
</script>

<template>
  <img
    :src="imageSrc"
    :alt="alt"
    :class="class"
    :loading="loading"
    :decoding="decoding"
    @error="handleError"
    @load="handleLoad"
  />
</template>

<style scoped>
</style>
