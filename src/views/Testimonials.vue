<script setup lang="ts">
import { testimonials } from '@/config/testimonials'
</script>

<template>
  <div class="min-h-screen bg-slate-950">
    <div class="container mx-auto px-6 py-16 md:py-24">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div v-reveal class="text-center mb-16">
          <h2 class="text-lime-400 font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h2>
          <h1 class="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            What Others Say.
          </h1>
          <p class="text-white/50 text-lg max-w-2xl mx-auto">
            Feedback from colleagues and clients I've worked with throughout my journey.
          </p>
        </div>

        <!-- Testimonials Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
            v-reveal="150 + index * 100"
            class="group relative bg-white/[0.03] backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] p-8"
          >
            <!-- Quote Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-8 right-8 h-10 w-10 text-lime-400 opacity-10 group-hover:opacity-20 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21L14.017 18C14.017 16.899 14.918 16 16.017 16H19.017V13H15.017C14.464 13 14.017 12.553 14.017 12V6C14.017 5.447 14.464 5 15.017 5H21.017C21.57 5 22.017 5.447 22.017 6V13C22.017 15.111 21.008 17.067 19.341 18.257C18.667 18.739 18.017 19.341 18.017 21H14.017ZM3.017 21L3.017 18C3.017 16.899 3.918 16 5.017 16H8.017V13H4.017C3.464 13 3.017 12.553 3.017 12V6C3.017 5.447 3.464 5 4.017 5H10.017C10.57 5 11.017 5.447 11.017 6V13C11.017 15.111 10.008 17.067 8.341 18.257C7.667 18.739 7.017 19.341 7.017 21H3.017Z" />
            </svg>

            <!-- Stars -->
            <div class="flex gap-1 mb-6">
              <svg
                v-for="i in testimonial.rating"
                :key="i"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-lime-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>

            <!-- Quote -->
            <p class="text-white/60 leading-relaxed italic mb-8 relative z-10 text-lg">
              "{{ testimonial.content }}"
            </p>

            <!-- Author -->
            <div class="flex items-center gap-4 pt-6 border-t border-white/5">
              <img
                v-if="testimonial.avatar || testimonial.image"
                :src="testimonial.avatar || testimonial.image"
                :alt="testimonial.name"
                class="w-12 h-12 rounded-full border-2 border-lime-400/30 object-cover"
              />
              <div v-else class="w-12 h-12 rounded-full bg-lime-400/10 flex items-center justify-center border-2 border-lime-400/30">
                <span class="text-lime-400 font-bold text-lg">{{ testimonial.name.charAt(0) }}</span>
              </div>
              <div>
                <p class="text-white font-bold">{{ testimonial.name }}</p>
                <p class="text-white/30 text-xs font-semibold uppercase tracking-widest">{{ testimonial.role }} at {{ testimonial.company }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Proof Stats -->
        <!-- <div v-reveal="300" class="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div class="text-center p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-lime-400/30 transition-all">
            <div class="text-4xl font-black text-lime-400 mb-2">99%</div>
            <p class="text-white/40 text-sm font-bold uppercase tracking-widest">Client Satisfaction</p>
          </div>
          <div class="text-center p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-lime-400/30 transition-all">
            <div class="text-4xl font-black text-lime-400 mb-2">2+</div>
            <p class="text-white/40 text-sm font-bold uppercase tracking-widest">Years Experience</p>
          </div>
          <div class="text-center p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-lime-400/30 transition-all">
            <div class="text-4xl font-black text-lime-400 mb-2">10+</div>
            <p class="text-white/40 text-sm font-bold uppercase tracking-widest">Happy Clients</p>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
