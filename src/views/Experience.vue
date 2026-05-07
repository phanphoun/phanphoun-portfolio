<script setup lang="ts">
const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'PN Cambodia',
    location: 'Phnom Penh, Cambodia',
    period: '2025 - Present',
    type: 'Full-time',
    description: 'Spearheading the development of robust web applications using Vue.js and Node.js. Focused on creating scalable architectures and high-performance user interfaces.',
    achievements: [
      'Architected and implemented a high-performance dashboard using Vue 3 and TypeScript.',
      'Optimized backend API response times by 40% through efficient database indexing and caching.',
      'Led a small team of junior developers in successfully delivering a client project ahead of schedule.'
    ],
    color: 'bg-lime-400'
  },
  {
    title: 'Junior Web Developer',
    company: 'Tech Startup',
    location: 'Remote',
    period: '2023 - 2024',
    type: 'Internship',
    description: 'Contributed to the development of several client websites, focusing on responsive design and seamless integration with RESTful services.',
    achievements: [
      'Built 10+ responsive landing pages with pixel-perfect accuracy and cross-browser compatibility.',
      'Integrated Stripe payment gateway and AWS S3 for secure file uploads.',
      'Collaborated closely with designers to implement complex animations using GSAP and CSS.'
    ],
    color: 'bg-blue-500'
  }
]
</script>

<template>
  <div class="min-h-screen bg-[#050713] text-white selection:bg-lime-400/30 overflow-hidden">
    <!-- Background Glow -->
    <div class="fixed inset-0 pointer-events-none">
      <div class="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-lime-400/5 blur-[120px] rounded-full"></div>
    </div>

    <div class="container relative mx-auto px-6 py-20 md:py-32">
      <!-- Header -->
      <div v-reveal class="max-w-3xl mx-auto text-center mb-24">
        <h2 class="text-lime-400 font-bold tracking-widest uppercase text-sm mb-4">Journey</h2>
        <h1 class="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
          Work Experience.
        </h1>
        <p class="text-white/50 text-lg leading-relaxed">
          My professional journey has been a continuous path of learning and growth. 
          Here's a snapshot of the roles where I've contributed and expanded my expertise.
        </p>
      </div>

      <!-- Timeline -->
      <div class="max-w-5xl mx-auto relative">
        <!-- Vertical Line -->
        <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-lime-400/50 via-white/10 to-transparent transform md:-translate-x-1/2"></div>

        <div class="space-y-24">
          <div 
            v-for="(exp, index) in experiences" 
            :key="index"
            v-reveal="150 + index * 100"
            class="relative flex flex-col md:flex-row items-center gap-12"
          >
            <!-- Timeline Node -->
            <div class="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#050713] border-2 border-lime-400 z-10 transform -translate-x-1/2 shadow-[0_0_15px_rgba(163,230,53,0.5)]"></div>

            <!-- Content Card -->
            <div 
              class="w-full md:w-[45%] group"
              :class="index % 2 === 0 ? 'md:mr-auto text-left' : 'md:ml-auto text-left'"
            >
              <div class="relative p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-2">
                <!-- Decorative Glow -->
                <div 
                  class="absolute -inset-2 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  :class="exp.color"
                ></div>

                <div class="relative z-10">
                  <div class="flex flex-wrap items-center gap-3 mb-6">
                    <span class="px-3 py-1 bg-white/5 text-white/40 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/5">{{ exp.period }}</span>
                    <span class="px-3 py-1 bg-lime-400/10 text-lime-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-lime-400/20">{{ exp.type }}</span>
                  </div>

                  <h3 class="text-2xl font-bold text-white mb-1 group-hover:text-lime-400 transition-colors">{{ exp.title }}</h3>
                  <p class="text-lg font-medium text-white/80 mb-4">{{ exp.company }}</p>
                  
                  <div class="flex items-center gap-2 text-white/30 text-xs mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{{ exp.location }}</span>
                  </div>

                  <p class="text-white/50 text-sm leading-relaxed mb-8">{{ exp.description }}</p>

                  <div class="space-y-4">
                    <div 
                      v-for="(achievement, aIndex) in exp.achievements" 
                      :key="aIndex"
                      class="flex items-start gap-4 text-sm text-white/70"
                    >
                      <div class="mt-1 flex-shrink-0 w-5 h-5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p>{{ achievement }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Connector for wide screens (only visible on MD+) -->
            <div class="hidden md:block absolute left-1/2 w-8 h-[1px] bg-white/10 -translate-x-1/2" :class="index % 2 === 0 ? '-ml-4' : 'ml-4'"></div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div v-reveal="500" class="mt-40 text-center">
        <h3 class="text-2xl font-bold text-white mb-6">Want to work together?</h3>
        <router-link 
          to="/contact" 
          class="inline-flex items-center gap-3 bg-lime-400 text-[#050713] px-10 py-5 rounded-2xl font-black transition-all hover:bg-lime-300 hover:shadow-[0_0_30px_rgba(163,230,53,0.3)] transform hover:scale-105"
        >
          <span>Get In Touch</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
