<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
  floatingIcons,
  credibilityBadges,
  services,
} from '@/config/home'

const getIconGlow = (name: string) => {
  const glows: Record<string, string> = {
    'Vue': 'shadow-emerald-500/20 group-hover:shadow-emerald-500/40',
    'TypeScript': 'shadow-blue-500/20 group-hover:shadow-blue-500/40',
    'Tailwind': 'shadow-sky-400/20 group-hover:shadow-sky-400/40',
    'Node': 'shadow-green-500/20 group-hover:shadow-green-500/40'
  }
  return glows[name] || 'shadow-white/20'
}

// Image Slider Logic
const heroImages = [
  '/images/phounphan.png',
  '/images/sam.jpg',
  '/images/source.jpg',
  '/images/thine.jpg'
]
const currentImgIndex = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

const startSlider = () => {
  timer = setInterval(() => {
    currentImgIndex.value = (currentImgIndex.value + 1) % heroImages.length
  }, 5000)
}

onMounted(() => {
  startSlider()
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="space-y-24 py-10 md:py-20">
    <section class="container mx-auto px-6">
      <div v-reveal class="relative overflow-hidden rounded-[3rem] border border-white/5 bg-[#0b0f1f]/60 backdrop-blur-3xl shadow-2xl">
        <div class="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-lime-400/10 blur-[100px]"></div>
        <div class="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-emerald-400/10 blur-[100px]"></div>

        <div class="relative grid items-center gap-16 px-8 py-16 md:grid-cols-2 md:px-16">
          <div class="z-10">
            <p v-reveal class="text-lime-400 font-bold tracking-widest uppercase text-sm mb-6">Available for Projects</p>
            <p v-reveal="100" class="text-white/60 text-lg mb-4">Hello, I’m</p>
            <h1 v-reveal="200" class="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.1] text-white tracking-tight mb-8">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/30 animate-shimmer">Phoun Phan</span>
            </h1>
            <h2 v-reveal="400" class="text-2xl sm:text-4xl font-bold text-white/90 flex items-center gap-4 mb-8">
              <span class="h-1 w-12 bg-lime-400 rounded-full"></span>
              Software Developer
            </h2>

            <p v-reveal="600" class="text-white/50 text-lg leading-relaxed max-w-xl mb-12">
              Building next-generation web applications with precision code and modern aesthetics. Specializing in <span class="text-white font-medium">Vue.js</span> and <span class="text-white font-medium">Full-stack solutions</span>.
            </p>

            <div v-reveal="800" class="flex flex-wrap items-center gap-6">
              <router-link
                to="/contact"
                class="group relative inline-flex items-center justify-center rounded-2xl bg-lime-400 px-10 py-5 font-black text-slate-950 transition-all hover:bg-lime-300 hover:shadow-[0_0_40px_rgba(163,230,53,0.3)] transform hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span class="relative z-10">Let's Talk</span>
                <div class="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-white/20 transition-transform duration-500"></div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-3 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </router-link>
              <router-link
                to="/projects"
                class="inline-flex items-center justify-center rounded-2xl border-2 border-white/10 bg-white/5 px-10 py-5 font-bold text-white transition-all hover:bg-white/10 hover:border-white/20 transform hover:scale-105 active:scale-95"
              >
                View Work
              </router-link>
            </div>
          </div>

          <div class="relative flex items-center justify-center lg:justify-end">
            <!-- Image Portal -->
            <div class="relative hero-orbit group">
              <!-- Background Glow Rings -->
              <div class="absolute inset-[-40px] rounded-full border border-white/5 animate-[spin_20s_linear_infinite]"></div>
              <div class="absolute inset-[-80px] rounded-full border border-white/[0.02] animate-[spin_30s_linear_infinite_reverse]"></div>
              
              <!-- Main Image Container -->
              <div class="relative z-10 h-[450px] w-72 sm:h-[580px] sm:w-[420px] rounded-[3.5rem] bg-gradient-to-tr from-white/10 to-white/5 p-4 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(163,230,53,0.1)]">
                <div class="h-full w-full rounded-[2.8rem] overflow-hidden bg-slate-950 relative">
                   <!-- Slider Images -->
                   <TransitionGroup name="fade">
                      <img
                        v-for="(img, idx) in heroImages"
                        v-show="currentImgIndex === idx"
                        :key="img"
                        :src="img"
                        alt="Phoun Phan"
                        class="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                      />
                   </TransitionGroup>

                  <!-- Inner Shadow Overlay -->
                  <div class="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.4)] pointer-events-none"></div>
                  
                  <!-- Slider Indicators -->
                  <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    <div 
                      v-for="(_, idx) in heroImages" 
                      :key="idx"
                      class="h-1 rounded-full transition-all duration-300"
                      :class="currentImgIndex === idx ? 'w-8 bg-lime-400' : 'w-2 bg-white/20'"
                    ></div>
                  </div>
                </div>
              </div>

              <!-- Floating Tech Icons -->
              <div
                v-for="(i, index) in floatingIcons"
                :key="i.name"
                class="absolute z-20 group/icon"
                :class="[
                   index === 0 ? '-top-6 -left-6' : 
                   index === 1 ? 'top-10 -right-8' : 
                   index === 2 ? 'bottom-20 -right-10' : 
                   '-bottom-6 left-10'
                ]"
              >
                <div class="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-500 hover:scale-125 hover:-rotate-12 hover:bg-white/10 animate-float" :style="{ animationDelay: index * 0.5 + 's' }">
                  <div class="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500" :class="getIconGlow(i.name)"></div>
                  <img :src="i.src" :alt="i.name" class="h-8 w-8 relative z-10" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Credibility Section -->
      <div v-reveal="200" class="mt-20 flex flex-wrap items-center justify-center gap-6">
        <div
          v-for="b in credibilityBadges"
          :key="b"
          class="group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-3 transition-all hover:bg-white/[0.06] hover:border-white/10"
        >
          <div class="w-1.5 h-1.5 rounded-full bg-lime-400 group-hover:scale-150 transition-transform"></div>
          <span class="text-sm font-bold text-white/40 group-hover:text-white/80 transition-colors uppercase tracking-widest">{{ b }}</span>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="container mx-auto px-6">
       <div v-reveal="300" class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-lime-400 font-bold tracking-widest uppercase text-sm mb-4">Services</h2>
          <h3 class="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Solving Problems with <br/> Code & Design.</h3>
          <p class="text-white/40 text-lg">I build real products with clean UI, strong APIs, and solid performance.</p>
       </div>

       <div class="grid gap-8 md:grid-cols-3">
          <div
            v-for="(s, index) in services"
            :key="s.title"
            v-reveal="400 + index * 100"
            class="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-lime-400/30 transition-all duration-500 hover:-translate-y-2"
          >
            <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-lime-400 group-hover:text-slate-950 transition-all duration-500">
               <span class="text-2xl">{{ index === 0 ? '💻' : index === 1 ? '⚡' : '📱' }}</span>
            </div>
            <h4 class="text-2xl font-bold text-white mb-4">{{ s.title }}</h4>
            <p class="text-white/40 leading-relaxed">{{ s.description }}</p>
          </div>
       </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

.animate-shimmer {
  background-size: 200% auto;
  animation: shimmer 8s linear infinite;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
