<script setup lang="ts">
interface Props {
  type?: 'card' | 'text' | 'image' | 'avatar' | 'button' | 'project'
  count?: number
}

withDefaults(defineProps<Props>(), {
  type: 'card',
  count: 1,
})
</script>

<template>
  <div v-if="type === 'card'" :key="`skeleton-card-${count}`" class="space-y-4">
    <div v-for="i in count" :key="`card-${i}`" class="animate-pulse">
      <div class="h-48 bg-gray-700 rounded-lg"></div>
      <div class="h-4 bg-gray-700 rounded mt-4"></div>
      <div class="h-4 bg-gray-700 rounded mt-2 w-5/6"></div>
      <div class="h-10 bg-gray-700 rounded mt-4"></div>
    </div>
  </div>

  <div v-else-if="type === 'text'" :key="`skeleton-text-${count}`" class="space-y-3">
    <div v-for="i in count" :key="`text-${i}`" class="animate-pulse">
      <div class="h-4 bg-gray-700 rounded"></div>
      <div class="h-4 bg-gray-700 rounded mt-2 w-5/6"></div>
      <div class="h-4 bg-gray-700 rounded mt-2 w-4/6"></div>
    </div>
  </div>

  <div v-else-if="type === 'image'" :key="`skeleton-image`" class="animate-pulse">
    <div class="h-64 bg-gray-700 rounded-lg w-full"></div>
  </div>

  <div v-else-if="type === 'avatar'" :key="`skeleton-avatar`" class="animate-pulse flex items-center gap-3">
    <div class="h-12 w-12 bg-gray-700 rounded-full flex-shrink-0"></div>
    <div class="flex-1">
      <div class="h-4 bg-gray-700 rounded w-3/4"></div>
      <div class="h-3 bg-gray-700 rounded mt-2 w-1/2"></div>
    </div>
  </div>

  <div v-else-if="type === 'button'" :key="`skeleton-button`" class="animate-pulse">
    <div class="h-12 bg-gray-700 rounded-lg w-full"></div>
  </div>

  <div v-else-if="type === 'project'" :key="`skeleton-project-${count}`" class="space-y-6">
    <div v-for="i in count" :key="`project-${i}`" class="animate-pulse">
      <div class="h-48 bg-gray-700 rounded-xl"></div>
      <div class="h-6 bg-gray-700 rounded mt-4"></div>
      <div class="h-4 bg-gray-700 rounded mt-2 w-5/6"></div>
      <div class="flex gap-2 mt-4">
        <div class="h-8 bg-gray-700 rounded-full w-20"></div>
        <div class="h-8 bg-gray-700 rounded-full w-20"></div>
        <div class="h-8 bg-gray-700 rounded-full w-20"></div>
      </div>
      <div class="flex gap-3 mt-4">
        <div class="h-10 bg-gray-700 rounded flex-1"></div>
        <div class="h-10 bg-gray-700 rounded flex-1"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
