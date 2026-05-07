<script setup lang="ts">
import { skills } from '@/config/skills'
import { computed } from 'vue'

const categories = [
  {
    name: 'Core Technologies',
    skills: ['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON']
  },
  {
    name: 'Frontend & UI',
    skills: ['REACT JS', 'NEXT JS', 'TAILWIND CSS', 'FLUTTER']
  },
  {
    name: 'Backend & Database',
    skills: ['NODE JS', 'MONGO DB']
  },
  {
    name: 'Tools & Design',
    skills: ['GITHUB', 'FIGMA']
  }
]

const categorizedSkills = computed(() => {
  return categories.map(cat => ({
    ...cat,
    items: skills.filter(s => cat.skills.includes(s.name))
  }))
})

const getSkillColor = (name: string) => {
  const colors: Record<string, string> = {
    'HTML': 'shadow-orange-500/10 hover:border-orange-500/50',
    'CSS': 'shadow-blue-500/10 hover:border-blue-500/50',
    'JAVASCRIPT': 'shadow-yellow-400/10 hover:border-yellow-400/50',
    'REACT JS': 'shadow-cyan-400/10 hover:border-cyan-400/50',
    'NODE JS': 'shadow-green-500/10 hover:border-green-500/50',
    'GITHUB': 'shadow-gray-400/10 hover:border-gray-400/50',
    'TAILWIND CSS': 'shadow-sky-400/10 hover:border-sky-400/50',
    'MONGO DB': 'shadow-green-600/10 hover:border-green-600/50',
    'PYTHON': 'shadow-yellow-300/10 hover:border-yellow-300/50',
    'NEXT JS': 'shadow-white/10 hover:border-white/50',
    'FIGMA': 'shadow-pink-400/10 hover:border-pink-400/50',
    'FLUTTER': 'shadow-cyan-300/10 hover:border-cyan-300/50',
  }
  return colors[name] || 'shadow-white/10 hover:border-white/30'
}

const getLevelLabel = (level: number) => {
  if (level >= 95) return 'Expert'
  if (level >= 85) return 'Advanced'
  if (level >= 75) return 'Intermediate'
  return 'Learning'
}

const getLevelColor = (level: number) => {
  if (level >= 90) return 'bg-lime-400'
  if (level >= 80) return 'bg-blue-400'
  return 'bg-purple-400'
}
</script>

<template>
  <div class="min-h-screen bg-[#050713] selection:bg-lime-400/30 overflow-hidden">
    <!-- Background Elements -->
    <div class="fixed inset-0 pointer-events-none">
      <div class="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-lime-400/5 blur-[120px] rounded-full"></div>
    </div>

    <div class="container relative mx-auto px-6 py-20 md:py-32">
      <!-- Header -->
      <div v-reveal class="max-w-3xl mx-auto text-center mb-20">
        <h2 class="text-lime-400 font-bold tracking-widest uppercase text-sm mb-4">Expertise</h2>
        <h1 class="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
          Technical Proficiency.
        </h1>
        <p class="text-white/50 text-lg leading-relaxed">
          Detailed breakdown of my technical skills and current proficiency levels in each technology.
        </p>
      </div>

      <!-- Categories -->
      <div class="space-y-24">
        <div v-for="(cat, catIdx) in categorizedSkills" :key="cat.name" class="space-y-10">
          <div v-reveal="100" class="flex items-center gap-4">
            <h3 class="text-xl font-bold text-white whitespace-nowrap">{{ cat.name }}</h3>
            <div class="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="(skill, index) in cat.items"
              :key="skill.name"
              v-reveal="200 + index * 50"
              class="group relative"
            >
              <!-- Card Glow -->
              <div class="absolute -inset-0.5 bg-white/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              <div 
                class="relative h-full flex flex-col p-8 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/[0.06]"
                :class="getSkillColor(skill.name)"
              >
                <!-- Top Section: Icon & Level -->
                <div class="flex items-start justify-between mb-8">
                  <div 
                    class="w-14 h-14 relative flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                  >
                    <!-- Background Glow for Icon -->
                    <div 
                      class="absolute inset-0 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                      :class="skill.bg"
                    ></div>
                    
                    <img
                      :src="skill.icon"
                      :alt="skill.name"
                      class="w-10 h-10 relative z-10 transition-all duration-500 group-hover:rotate-6"
                      :class="skill.iconClass"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  
                  <div class="text-right">
                    <p class="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">{{ getLevelLabel(skill.level) }}</p>
                    <p class="text-lg font-black text-white group-hover:text-lime-400 transition-colors">{{ skill.level }}%</p>
                  </div>
                </div>

                <!-- Bottom Section: Info -->
                <div class="mt-auto">
                  <h4 class="text-white font-bold text-xs uppercase tracking-[0.2em] mb-4">
                    {{ skill.name }}
                  </h4>
                  
                  <!-- Progress Bar -->
                  <div class="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      class="h-full transition-all duration-1000 ease-out delay-500"
                      :class="getLevelColor(skill.level)"
                      :style="{ width: skill.level + '%' }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Quote -->
      <div v-reveal="400" class="mt-32 text-center p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5">
        <p class="text-xl md:text-2xl font-medium text-white/80 italic">
          "The best way to predict the future is to create it."
        </p>
        <div class="mt-6 flex items-center justify-center gap-4">
          <span class="h-px w-12 bg-lime-400/30"></span>
          <span class="text-lime-400 font-bold uppercase tracking-widest text-xs">Phoun Phan</span>
          <span class="h-px w-12 bg-lime-400/30"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
