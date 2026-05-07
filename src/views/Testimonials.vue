<script setup lang="ts">
import { testimonials } from '@/config/testimonials'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
    <div class="container mx-auto px-6 py-14">
      <div class="max-w-6xl mx-auto">
        <h1 v-reveal class="text-5xl font-bold text-white mb-4 text-center">What Others Say</h1>
        <p v-reveal="80" class="text-gray-400 text-center mb-12 text-lg">Feedback from colleagues and clients I've worked with</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
            v-reveal="120 + index * 90"
            class="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-lime-400/30 transition-all duration-300 p-8"
          >
            <!-- Stars -->
            <div class="flex gap-1 mb-4">
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
            <p class="text-gray-300 mb-6 leading-relaxed italic">
              "{{ testimonial.content }}"
            </p>

            <!-- Author -->
            <div class="flex items-center gap-3 pt-4 border-t border-gray-700">
              <div v-if="testimonial.image" class="h-10 w-10 rounded-full bg-lime-400/20 flex-shrink-0">
                <img :src="testimonial.image" :alt="testimonial.name" class="h-full w-full object-cover rounded-full" />
              </div>
              <div v-else class="h-10 w-10 rounded-full bg-lime-400/20 flex-shrink-0 flex items-center justify-center">
                <span class="text-lime-400 font-bold">{{ testimonial.name.charAt(0) }}</span>
              </div>
              <div>
                <p class="text-white font-semibold text-sm">{{ testimonial.name }}</p>
                <p class="text-gray-400 text-xs">{{ testimonial.role }} at {{ testimonial.company }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Proof Stats -->
        <div v-reveal="300" class="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div class="text-center p-6 rounded-xl border border-gray-700 bg-gray-800/30">
            <div class="text-3xl font-extrabold text-lime-400">8+</div>
            <p class="text-gray-400 text-sm mt-2">Projects Completed</p>
          </div>
          <div class="text-center p-6 rounded-xl border border-gray-700 bg-gray-800/30">
            <div class="text-3xl font-extrabold text-lime-400">99%</div>
            <p class="text-gray-400 text-sm mt-2">Client Satisfaction</p>
          </div>
          <div class="text-center p-6 rounded-xl border border-gray-700 bg-gray-800/30">
            <div class="text-3xl font-extrabold text-lime-400">1+</div>
            <p class="text-gray-400 text-sm mt-2">Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
