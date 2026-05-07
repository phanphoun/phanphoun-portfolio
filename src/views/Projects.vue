<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { projects as projectsData } from '@/config/projects'
import ImageWithFallback from '@/components/ImageWithFallback.vue'
import SkeletonLoader from '@/components/SkeletonLoader.vue'
import { useLoadingState } from '@/composables/useLoadingState'

type Project = typeof projectsData[0]

const { isLoading, simulateLoading } = useLoadingState(true)
const projects = ref<Project[]>([])
const searchQuery = ref('')

onMounted(async () => {
  await simulateLoading(800)
  projects.value = projectsData
})

const filteredProjects = computed(() => {
  if (!searchQuery.value) return projects.value
  
  const query = searchQuery.value.toLowerCase().trim()
  return projects.value.filter(p => 
    p.title.toLowerCase().includes(query) || 
    p.description.toLowerCase().includes(query) ||
    p.techStack.some(tech => tech.toLowerCase().includes(query))
  )
})

const selectedProject = ref<Project | null>(null)
const isModalOpen = ref(false)

const openModal = (project: Project) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
}
</script>

<template>
  <div class="min-h-screen bg-[#050713]">
    <div class="container mx-auto px-6 py-16 md:py-24">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div v-reveal class="text-center mb-16">
          <h2 class="text-lime-400 font-bold tracking-widest uppercase text-sm mb-4">Portfolio</h2>
          <h1 class="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Featured Projects.
          </h1>
          <p class="text-white/50 text-lg max-w-2xl mx-auto">
            A curated selection of my work, ranging from complex web applications to experimental personal projects.
          </p>
        </div>

        <!-- Search Bar -->
        <div v-reveal="100" class="max-w-2xl mx-auto mb-16 relative group">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-lime-400/20 to-blue-500/20 rounded-2xl blur opacity-30 group-focus-within:opacity-100 transition duration-500"></div>
          <div class="relative flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-5 h-5 w-5 text-white/30 group-focus-within:text-lime-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search by title, technology, or description..."
              class="w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/20 focus:border-lime-400/50 transition-all placeholder:text-white/20"
            />
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <template v-if="isLoading">
            <SkeletonLoader type="project" :count="4" />
          </template>
          <template v-else-if="filteredProjects.length > 0">
            <div
              v-for="(project, index) in filteredProjects"
              :key="project.id"
              v-reveal="150 + index * 50"
              class="group relative bg-white/[0.03] backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] flex flex-col"
            >
              <!-- Project Image/Banner -->
              <div :class="`relative h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`">
                <ImageWithFallback 
                  v-if="project.image"
                  :src="project.image" 
                  :alt="project.imageAlt || project.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div v-else class="w-full h-full flex items-center justify-center opacity-20">
                  <span class="text-8xl font-black text-white">{{ project.title.charAt(0) }}</span>
                </div>
                
                <!-- Overlay Shadow -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                <!-- Tags (Floating) -->
                <div class="absolute bottom-4 left-6 flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.techStack.slice(0, 3)"
                    :key="tech"
                    class="bg-black/40 backdrop-blur-md text-white/90 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-white/10"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div class="p-8 flex flex-col flex-1">
                <div class="flex items-center gap-2 text-white/30 text-[10px] font-bold uppercase tracking-widest mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{{ project.startDate }} — {{ project.endDate }}</span>
                </div>
                <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-lime-300 transition-colors">{{ project.title }}</h3>
                <p class="text-white/50 mb-8 line-clamp-2 text-sm leading-relaxed">{{ project.description }}</p>

                <div class="mt-auto flex items-center gap-4">
                  <button
                    @click="openModal(project)"
                    class="flex-1 bg-white/5 hover:bg-lime-400 hover:text-[#050713] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 border border-white/10 hover:border-lime-400"
                  >
                    View Details
                  </button>
                  <a
                    :href="project.githubUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all duration-300 border border-white/10"
                    title="View Source"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </template>
          
          <!-- No Results -->
          <div v-else v-reveal class="col-span-full py-20 text-center">
            <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 mb-6 text-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">No projects found</h3>
            <p class="text-white/40">Try searching for a different keyword or technology.</p>
            <button @click="searchQuery = ''" class="mt-8 text-lime-400 font-bold hover:text-lime-300 transition-colors underline underline-offset-8">Clear Search</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal (Redesigned for Premium look) -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isModalOpen"
        class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 md:p-10"
        @click.self="closeModal"
      >
        <Transition
          enter-active-class="transition-all duration-500 ease-out"
          leave-active-class="transition-all duration-300 ease-in"
          enter-from-class="opacity-0 scale-95 translate-y-10"
          leave-to-class="opacity-0 scale-95 translate-y-10"
        >
          <div
            v-if="isModalOpen && selectedProject"
            class="bg-[#0b0f1f] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row"
          >
            <!-- Modal Left: Image -->
            <div :class="`md:w-1/2 bg-gradient-to-br ${selectedProject.gradient} relative overflow-hidden flex items-center justify-center`">
              <ImageWithFallback 
                v-if="selectedProject.image"
                :src="selectedProject.image" 
                :alt="selectedProject.title"
                class="w-full h-full object-cover opacity-90"
              />
              <span v-else class="text-9xl font-black text-white/10 uppercase">{{ selectedProject.title.charAt(0) }}</span>
              
              <button
                @click="closeModal"
                class="absolute top-6 left-6 bg-black/40 hover:bg-black/60 text-white p-2.5 rounded-xl backdrop-blur-md border border-white/10 transition-all md:hidden"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Modal Right: Content -->
            <div class="md:w-1/2 p-8 md:p-12 overflow-y-auto relative">
              <button
                @click="closeModal"
                class="absolute top-8 right-8 text-white/40 hover:text-white transition-colors hidden md:block"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div class="mb-10">
                <div class="flex items-center gap-3 mb-4">
                   <span class="px-3 py-1 bg-lime-400/10 text-lime-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-lime-400/20">Featured</span>
                   <span class="text-white/30 text-xs font-medium">{{ selectedProject.startDate }} — {{ selectedProject.endDate }}</span>
                </div>
                <h2 class="text-3xl md:text-4xl font-bold text-white leading-tight">{{ selectedProject.title }}</h2>
              </div>

              <div class="space-y-10">
                <div>
                  <h3 class="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">The Challenge</h3>
                  <p class="text-white/60 leading-relaxed text-sm">{{ selectedProject.fullDescription }}</p>
                </div>

                <div>
                  <h3 class="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Built With</h3>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tech in selectedProject.techStack"
                      :key="tech"
                      class="bg-white/5 text-white/80 px-4 py-2 rounded-xl text-xs font-semibold border border-white/5"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 class="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Core Features</h3>
                  <ul class="grid grid-cols-1 gap-3">
                    <li
                      v-for="feature in selectedProject.features"
                      :key="feature"
                      class="flex items-start text-white/60 text-sm bg-white/[0.02] p-3 rounded-xl border border-white/5"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-lime-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {{ feature }}
                    </li>
                  </ul>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 pt-6">
                  <a
                    v-if="selectedProject.liveUrl"
                    :href="selectedProject.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 flex items-center justify-center gap-3 bg-lime-400 hover:bg-lime-300 text-[#050713] px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-lime-400/10"
                  >
                    <span>Visit Site</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    :href="selectedProject.githubUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all border border-white/10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.overflow-y-auto::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.overflow-y-auto {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
