<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const props = defineProps<{
  drawer?: boolean
  drawerOpen?: boolean
}>()

const emit = defineEmits<{
  (e: 'collapse', value: boolean): void
  (e: 'close'): void
}>()

const route = useRoute()
const isCollapsed = ref(false)

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
  emit('collapse', isCollapsed.value)
}

const isActive = (path: string) => route.path === path

// Close drawer on route change
watch(() => route.path, () => {
  if (props.drawer) {
    emit('close')
  }
})
</script>

<template>
  <nav 
    class="fixed top-0 left-0 h-full bg-[#02040a] border-r border-white/10 transition-all duration-300 z-50 flex flex-col shadow-2xl shadow-black/50"
    :class="[
      drawer ? (drawerOpen ? 'translate-x-0 w-72' : '-translate-x-full w-72') : (isCollapsed ? 'w-20 p-4' : 'w-64 p-6')
    ]"
  >
    <!-- Header/Brand -->
    <div class="flex items-center justify-between mb-10 px-2" :class="drawer ? 'p-6' : ''">
      <h1 
        v-if="!isCollapsed || drawer" 
        class="text-xl font-bold text-white tracking-tight"
      >
        <span class="text-lime-400 font-black">P</span>ortfolio
      </h1>
      
      <!-- Desktop Collapse Button -->
      <button
        v-if="!drawer"
        @click="toggleCollapse"
        class="p-2 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all"
        aria-label="Toggle sidebar"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-5 w-5 transition-transform duration-300"
          :class="isCollapsed ? 'rotate-180' : ''" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </svg>
      </button>

      <!-- Mobile Close Button -->
      <button
        v-if="drawer"
        @click="$emit('close')"
        class="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Navigation Links -->
    <div class="flex-1 overflow-y-auto space-y-2 py-4">
      <ul class="space-y-2">
        <li v-for="item in [
          { path: '/', name: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
          { path: '/about', name: 'About', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
          { path: '/skills', name: 'Skills', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
          { path: '/experience', name: 'Experience', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
          { path: '/projects', name: 'Projects', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2z M10 11l2 2 4-4' },
          { path: '/education', name: 'Education', icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
          { path: '/testimonials', name: 'Testimonials', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
          { path: '/contact', name: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
        ]" :key="item.path">
          <RouterLink
            :to="item.path"
            class="flex items-center transition-all duration-300 group rounded-2xl"
            :class="[
              isActive(item.path) 
                ? 'bg-lime-400 text-slate-950 shadow-lg shadow-lime-400/20' 
                : 'text-white/40 hover:text-white hover:bg-white/5',
              isCollapsed && !drawer ? 'justify-center p-3' : 'gap-4 px-4 py-3.5'
            ]"
          >
            <span class="flex-shrink-0">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
              </svg>
            </span>
            <span 
              v-if="!isCollapsed || drawer" 
              class="font-bold tracking-wide"
            >
              {{ item.name }}
            </span>
          </RouterLink>
        </li>
      </ul>
    </div>

    <!-- User Profile Footer -->
    <div v-if="!isCollapsed || drawer" class="p-6 border-t border-white/5 bg-black/20">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-lime-400/5">
          <img src="/images/phounphan.png" alt="Phoun Phan" class="w-full h-full object-cover" />
        </div>
        <div class="overflow-hidden">
          <p class="text-xs font-bold text-white truncate">Phoun Phan</p>
          <p class="text-[10px] text-white/30 truncate uppercase tracking-widest font-semibold mt-0.5">Software Developer</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.flex-1::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.flex-1 {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
