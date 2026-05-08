<script setup lang="ts">
import { ref } from 'vue'
import { testimonials } from '@/config/testimonials'
import { personalInfo, stats, interests, profileImages, institution , value } from '@/config/about'
const currentImgIndex = ref(0)

const nextImg = () => {
  currentImgIndex.value = (currentImgIndex.value + 1) % profileImages.length
}

const prevImg = () => {
  currentImgIndex.value = (currentImgIndex.value - 1 + profileImages.length) % profileImages.length
}
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-white selection:bg-lime-400/30 overflow-hidden">
    <!-- Background Glow -->
    <div class="fixed inset-0 pointer-events-none">
      <div class="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-lime-400/5 blur-[120px] rounded-full"></div>
      <div class="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
    </div>

    <div class="container relative mx-auto px-6 py-20 md:py-32">
      <!-- Hero Section -->
      <div class="grid lg:grid-cols-12 gap-16 items-center mb-24">
        <div v-reveal class="lg:col-span-7">
          <h2 class="text-lime-400 font-bold tracking-widest uppercase text-sm mb-4">Discovery</h2>
          <h1 class="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent leading-tight">
            The Person Behind <br /> The Code.
          </h1>
          <div class="space-y-6 text-white/60 text-lg leading-relaxed max-w-2xl">
            <p>
              I am a passionate software developer based in Phnom Penh, Cambodia. My journey in the digital world began with a simple curiosity about how things work behind the screen, which soon evolved into a full-fledged career in building modern <span class="text-lime-300">Full Stack</span> applications.
            </p>
            <p>
              Currently studying at <a :href="institution.url" target="_blank" class="text-lime-300 hover:underline">{{ institution.name }}</a>, I focus on creating seamless user experiences using <span class="text-lime-300">Vue</span>, <span class="text-lime-300">TypeScript</span>, and <span class="text-lime-300">Tailwind CSS</span>. I believe that great software is not just about writing code, but about solving real-world problems.
            </p>
          </div>
          
          <div class="mt-10 flex flex-wrap gap-6">
            <div v-for="info in personalInfo" :key="info.label" class="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="info.icon" />
              </svg>
              <span class="text-xs font-bold text-white/80">{{ info.value }}</span>
            </div>
          </div>
        </div>

        <!-- Redesigned Image Slider -->
        <div v-reveal="200" class="lg:col-span-5 relative group">
          <div class="absolute -inset-4 bg-gradient-to-tr from-lime-400/20 to-blue-500/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>
          <div class="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] border border-white/10 p-4 bg-white/5 backdrop-blur-xl">
             <div class="w-full h-full rounded-[2rem] overflow-hidden relative group/slider">
                <!-- Transition for Images -->
                <transition-group name="fade">
                  <img 
                    v-for="(img, idx) in profileImages"
                    v-show="currentImgIndex === idx"
                    :key="img"
                    :src="img" 
                    alt="Phoun Phan" 
                    class="absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                </transition-group>
                
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                <!-- Navigation Arrows -->
                <div class="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
                  <button 
                    @click="prevImg"
                    class="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-lime-400 hover:text-slate-950 transition-all transform hover:scale-110"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    @click="nextImg"
                    class="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-lime-400 hover:text-slate-950 transition-all transform hover:scale-110"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <!-- Slide Indicators -->
                <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  <div 
                    v-for="(_, idx) in profileImages" 
                    :key="idx"
                    class="h-1 rounded-full transition-all duration-300"
                    :class="currentImgIndex === idx ? 'w-8 bg-lime-400' : 'w-2 bg-white/20'"
                  ></div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div v-reveal="300" class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        <router-link
          v-for="stat in stats"
          :key="stat.label"
          :to="(stat as any).route || '/about'"
          class="relative group p-8 rounded-3xl bg-white/[0.03] border border-white/5 transition-all hover:bg-white/[0.06] hover:border-lime-400/30 overflow-hidden cursor-pointer block"
        >
          <div class="absolute -right-4 -bottom-4 text-white/[0.02] transform group-hover:scale-110 transition-transform duration-700">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="stat.icon" />
             </svg>
          </div>
          <p class="text-4xl font-black text-lime-400 mb-2">{{ stat.value }}</p>
          <p class="text-white/40 text-sm font-bold uppercase tracking-widest">{{ stat.label }}</p>
        </router-link>
      </div>
      <div class="flex items-center gap-4 mb-12">
        <h3 class="text-2xl font-bold text-white whitespace-nowrap">Core Values</h3>
        <div class="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent"></div>
      </div>
      <!-- Core Values -->
      <div v-reveal="400" class="grid md:grid-cols-3 gap-8 mb-32">
        <div class="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-lime-400/30 transition-all">
          <div class="w-12 h-12 bg-lime-400/10 rounded-2xl flex items-center justify-center text-lime-400 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">{{ value.efficiency.title }}</h3>
          <p class="text-white/40 text-sm leading-relaxed">{{ value.efficiency.description }}</p>
        </div>
        <div class="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-lime-400/30 transition-all">
          <div class="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">{{ value.userCentric.title }}</h3>
          <p class="text-white/40 text-sm leading-relaxed">{{ value.userCentric.description }}</p>
        </div>
        <div class="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-lime-400/30 transition-all">
          <div class="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">{{ value.continuousLearning.title }}</h3>
          <p class="text-white/40 text-sm leading-relaxed">{{ value.continuousLearning.description }}</p>
        </div>
      </div>

      <!-- Testimonials -->
      <!-- <div v-reveal="500" class="mb-32">
        <div class="flex items-center gap-4 mb-12">
          <h3 class="text-2xl font-bold text-white whitespace-nowrap">What People Say</h3>
          <div class="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent"></div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
           <div v-for="t in testimonials" :key="t.name" class="p-8 rounded-3xl bg-white/[0.03] border border-white/10 relative group">
              <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-8 right-8 h-10 w-10 text-lime-400 opacity-10 group-hover:opacity-20 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.899 14.918 16 16.017 16H19.017V13H15.017C14.464 13 14.017 12.553 14.017 12V6C14.017 5.447 14.464 5 15.017 5H21.017C21.57 5 22.017 5.447 22.017 6V13C22.017 15.111 21.008 17.067 19.341 18.257C18.667 18.739 18.017 19.341 18.017 21H14.017ZM3.017 21L3.017 18C3.017 16.899 3.918 16 5.017 16H8.017V13H4.017C3.464 13 3.017 12.553 3.017 12V6C3.017 5.447 3.464 5 4.017 5H10.017C10.57 5 11.017 5.447 11.017 6V13C11.017 15.111 10.008 17.067 8.341 18.257C7.667 18.739 7.017 19.341 7.017 21H3.017Z" />
              </svg>
              <p class="text-white/60 italic mb-8 relative z-10 leading-relaxed text-lg">"{{ t.content }}"</p>
              <div class="flex items-center gap-4">
                 <img :src="t.avatar" :alt="t.name" class="w-12 h-12 rounded-full border-2 border-lime-400/30" />
                 <div>
                    <p class="text-white font-bold">{{ t.name }}</p>
                    <p class="text-white/30 text-xs">{{ t.role }}</p>
                 </div>
              </div>
           </div>
        </div>
      </div> -->

      <!-- Interests -->
      <div v-reveal="600">
        <div class="flex items-center gap-4 mb-12">
          <h3 class="text-2xl font-bold text-white whitespace-nowrap">Interests & Hobbies</h3>
          <div class="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent"></div>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div 
            v-for="interest in interests" 
            :key="interest.name"
            class="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/20 transition-all text-center group"
          >
            <div class="text-3xl mb-4 group-hover:scale-125 transition-transform duration-500">{{ interest.icon }}</div>
            <p class="text-xs font-bold text-white/80 uppercase tracking-widest">{{ interest.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
