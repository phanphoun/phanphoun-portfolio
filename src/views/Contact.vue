<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitted = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  submitted.value = true
  form.value = { name: '', email: '', subject: '', message: '' }
  
  setTimeout(() => {
    submitted.value = false
  }, 5000)
}

const contactInfo = [
  {
    label: 'Email',
    value: 'phanphoun855@gmail.com',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    link: 'mailto:phanphoun855@gmail.com'
  },
  {
    label: 'Location',
    value: 'Phnom Penh, Cambodia',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    link: 'https://maps.google.com/?q=Phnom+Penh+Cambodia'
  },
  {
    label: 'Phone',
    value: '+855713266899',
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    link: 'tel:+855713266899'
  }
]

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/phan-phoun-73baa2352/', color: 'hover:text-blue-400' },
  { name: 'GitHub', url: 'https://github.com/phanphoun', color: 'hover:text-gray-400' },
  { name: 'Telegram', url: 'https://t.me/thoeutthine', color: 'hover:text-sky-400' },
  { name: 'Facebook', url: 'https://www.facebook.com/Jemokasakh', color: 'hover:text-blue-600' }
]
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-white selection:bg-lime-400/30">
    <!-- Background Glow -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-lime-400/10 blur-[120px] rounded-full"></div>
      <div class="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
    </div>

    <div class="container relative mx-auto px-6 py-16 md:py-24">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div v-reveal class="text-center mb-16 md:mb-24">
          <h2 class="text-lime-400 font-bold tracking-widest uppercase text-sm mb-4">Contact</h2>
          <h1 class="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Let's Start a <br class="hidden md:block" /> Conversation.
          </h1>
          <p class="text-white/60 text-lg max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div class="grid lg:grid-cols-12 gap-12 items-start">
          <!-- Left: Contact Info -->
          <div class="lg:col-span-5 space-y-12">
            <div v-reveal="100" class="space-y-8">
              <div v-for="info in contactInfo" :key="info.label" class="group flex items-start gap-6">
                <div class="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-lime-400/50 group-hover:bg-lime-400/10">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="info.icon" />
                  </svg>
                </div>
                <div>
                  <p class="text-white/40 text-sm font-medium uppercase tracking-wider mb-1">{{ info.label }}</p>
                  <a :href="info.link" class="text-xl font-semibold hover:text-lime-300 transition-colors">
                    {{ info.value }}
                  </a>
                </div>
              </div>
            </div>

            <div v-reveal="200" class="pt-8 border-t border-white/5">
              <p class="text-white/40 text-sm font-medium uppercase tracking-wider mb-6">Social Profiles</p>
              <div class="flex flex-wrap gap-4">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  class="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                  :class="social.color"
                >
                  {{ social.name }}
                </a>
              </div>
            </div>
          </div>

          <!-- Right: Contact Form -->
          <div class="lg:col-span-7" v-reveal="300">
            <div class="relative group">
              <!-- Form Glow Effect -->
              <div class="absolute -inset-0.5 bg-gradient-to-r from-lime-400/20 to-blue-500/20 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              
              <div class="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">
                <form @submit.prevent="handleSubmit" class="space-y-6">
                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                      <label class="text-sm font-medium text-white/60 ml-1">Full Name</label>
                      <input
                        v-model="form.name"
                        type="text"
                        required
                        placeholder="John Doe"
                        class="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/20 focus:border-lime-400/50 transition-all placeholder:text-white/10"
                      />
                    </div>
                    <div class="space-y-2">
                      <label class="text-sm font-medium text-white/60 ml-1">Email Address</label>
                      <input
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        class="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/20 focus:border-lime-400/50 transition-all placeholder:text-white/10"
                      />
                    </div>
                  </div>

                  <div class="space-y-2">
                    <label class="text-sm font-medium text-white/60 ml-1">Subject</label>
                    <input
                      v-model="form.subject"
                      type="text"
                      required
                      placeholder="How can I help you?"
                      class="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/20 focus:border-lime-400/50 transition-all placeholder:text-white/10"
                    />
                  </div>

                  <div class="space-y-2">
                    <label class="text-sm font-medium text-white/60 ml-1">Message</label>
                    <textarea
                      v-model="form.message"
                      required
                      rows="5"
                      placeholder="Your message here..."
                      class="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/20 focus:border-lime-400/50 transition-all placeholder:text-white/10 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="group relative w-full overflow-hidden rounded-xl bg-lime-400 px-8 py-4 font-bold text-slate-950 transition-all hover:bg-lime-300 hover:shadow-[0_0_20px_rgba(163,230,53,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span class="relative z-10 flex items-center justify-center gap-2">
                      {{ isSubmitting ? 'Sending Message...' : 'Send Message' }}
                      <svg v-if="!isSubmitting" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>

                  <Transition
                    enter-active-class="transition duration-300 ease-out"
                    enter-from-class="transform -translate-y-2 opacity-0"
                    enter-to-class="transform translate-y-0 opacity-100"
                    leave-active-class="transition duration-200 ease-in"
                    leave-from-class="transform translate-y-0 opacity-100"
                    leave-to-class="transform -translate-y-2 opacity-0"
                  >
                    <div v-if="submitted" class="p-4 bg-lime-400/10 border border-lime-400/20 rounded-xl text-lime-400 text-center font-medium">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  </Transition>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom animations if needed */
</style>
