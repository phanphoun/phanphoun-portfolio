<script setup lang="ts">
const education = [
  {
    degree: 'Software Engineering Associate Degree',
    school: 'PN Cambodia',
    period: '2025 - Present',
    gpa: 'GPA: 3.8/4.0',
    description: 'Intensive program focused on practical software development, algorithm design, and modern web architectures.',
    details: [
      'Specialization in Full Stack Development',
      'Hands-on experience with Agile methodologies',
      'Advanced coursework in Data Structures & Algorithms'
    ],
    icon: '🎓',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQHXv00_EDKOYQ/feedshare-shrink_800/B56Z076hIAG8Ac-/0/1774826689638?e=2147483647&v=beta&t=Nmzbk1i0-77wNH2Vu2ASWrQxzvmcVMTfs1e2OJgBfS4',
    color: 'lime'
  },
  {
    degree: 'General Education',
    school: 'Chea Sim Tbeng Meanchey High School',
    period: '2018 - 2024',
    gpa: 'Grade A',
    description: 'Comprehensive high school curriculum with a strong focus on STEM subjects and technical foundation.',
    details: [
      'Graduated with honors (Grade A)',
      'Leadership role in various school clubs',
      'Solid foundation in Advanced Mathematics'
    ],
    icon: '🏫',
    image: 'https://scontent.fpnh19-1.fna.fbcdn.net/v/t39.30808-6/495024230_1279753910824836_3271634597455411682_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHXxeXQJEp1C-bYR4Za6cgq4NBaqJQi3tXg0FqolCLe1djG0x-o4dOu5owEwAuIufUqSgSOV9-lGMLiezO9_UOE&_nc_ohc=mtckDMDb6YkQ7kNvwH_2epM&_nc_oc=Adq6IDSolOHPEWq6L_oHdf_P4yAq-Kx2o74uj7odADDPj3PGcWqKzm1xV-9uI1bffDs&_nc_zt=23&_nc_ht=scontent.fpnh19-1.fna&_nc_gid=nlyeF8XCoakq0GjQLO_FUQ&_nc_ss=7b2a8&oh=00_Af4j2mOAja2JvO3JShLyFHg0rej_Xx0HS8JbDvgmuymwKA&oe=6A021F6E',
    color: 'blue'
  }
]
</script>

<template>
  <div class="min-h-screen bg-[#050713] text-white selection:bg-lime-400/30 overflow-hidden">
    <!-- Background Elements -->
    <div class="fixed inset-0 pointer-events-none">
      <div class="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-lime-400/5 blur-[120px] rounded-full"></div>
      <div class="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
    </div>

    <div class="container relative mx-auto px-6 py-20 md:py-32">
      <!-- Header -->
      <div v-reveal class="max-w-3xl mx-auto text-center mb-24">
        <h2 class="text-lime-400 font-bold tracking-widest uppercase text-sm mb-4">Academic Journey</h2>
        <h1 class="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
          Education Roadmap.
        </h1>
        <p class="text-white/40 text-lg leading-relaxed">
          Tracing my academic milestones and technical foundation through the years.
        </p>
      </div>

      <!-- Roadmap Timeline Container -->
      <div class="relative max-w-6xl mx-auto px-4 md:px-0">
        
        <!-- Vertical Roadmap Line -->
        <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-lime-400/50 via-white/10 to-transparent transform -translate-x-1/2 hidden md:block"></div>
        <div class="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-lime-400/50 via-white/10 to-transparent md:hidden"></div>

        <div class="space-y-32">
          <div 
            v-for="(edu, index) in education" 
            :key="index"
            class="relative group"
          >
            <!-- Roadmap Milestone Dot -->
            <div 
              class="absolute left-4 md:left-1/2 top-10 w-12 h-12 bg-[#050713] border-4 border-white/10 rounded-2xl transform -translate-x-1/2 flex items-center justify-center z-20 group-hover:border-lime-400 group-hover:scale-110 transition-all duration-500 shadow-2xl"
              :class="index === 0 ? 'md:-translate-x-1/2' : 'md:-translate-x-1/2'"
            >
              <span class="text-xl group-hover:scale-110 transition-transform">{{ edu.icon }}</span>
              <!-- Pulse Effect -->
              <div class="absolute inset-0 rounded-2xl bg-lime-400/20 animate-ping opacity-0 group-hover:opacity-100"></div>
            </div>

            <!-- Content Card -->
            <div 
              class="relative grid md:grid-cols-2 gap-12 items-center"
              v-reveal="150 + index * 100"
            >
              <!-- Side 1: Info (Alternates) -->
              <div :class="index % 2 === 0 ? 'md:order-1 md:text-right' : 'md:order-2 md:text-left'" class="pl-20 md:pl-0">
                 <span class="inline-block px-4 py-1.5 bg-lime-400 text-[#050713] rounded-xl text-xs font-black uppercase tracking-widest mb-4">
                    {{ edu.period }}
                 </span>
                 <h3 class="text-2xl md:text-4xl font-bold text-white mb-2 group-hover:text-lime-300 transition-colors leading-tight">
                    {{ edu.degree }}
                 </h3>
                 <p class="text-xl font-medium text-white/40 mb-6">{{ edu.school }}</p>
                 <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold text-white/60">
                    <span class="w-2 h-2 rounded-full bg-lime-400"></span>
                    {{ edu.gpa }}
                 </div>
              </div>

              <!-- Side 2: Visual (Alternates) -->
              <div :class="index % 2 === 0 ? 'md:order-2' : 'md:order-1'" class="pl-20 md:pl-0">
                 <div class="relative group/image rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-500 group-hover:border-white/20 group-hover:-translate-y-2">
                    <div class="relative aspect-video rounded-[1.8rem] overflow-hidden bg-black">
                       <img 
                          :src="edu.image" 
                          :alt="edu.school"
                          class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
                       />
                       <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                       
                       <!-- Description Overlay on Hover -->
                       <div class="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover/image:opacity-100 transition-all duration-500 flex items-center justify-center p-8 text-center">
                          <p class="text-white/90 text-sm md:text-base leading-relaxed transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-500">
                             {{ edu.description }}
                          </p>
                       </div>

                       <!-- Detail Badges over image -->
                       <div class="absolute bottom-6 left-6 flex flex-wrap gap-2 group-hover/image:opacity-0 transition-opacity">
                          <span v-for="tag in edu.details.slice(0, 2)" :key="tag" class="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-bold text-white/80">
                             {{ tag }}
                          </span>
                       </div>
                    </div>
                 </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      <!-- Footer Action -->
      <div v-reveal="500" class="mt-40 text-center">
         <div class="inline-flex items-center gap-4 px-8 py-4 rounded-[2rem] bg-white/[0.03] border border-white/5">
            <div class="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></div>
            <span class="text-sm font-bold text-white/40 uppercase tracking-widest">Always Learning, Always Growing</span>
         </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
