<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'
import { useChatbot } from '@/composables/useChatbot'

const { messages, isOpen, isTyping, isAiMode, sendMessage, toggle, close } = useChatbot()
const inputText = ref('')
const messagesContainer = ref<HTMLDivElement>()
const inputRef = ref<HTMLInputElement>()

const handleSend = async () => {
  if (!inputText.value.trim() || isTyping.value) return
  const text = inputText.value
  inputText.value = ''
  await sendMessage(text)
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    handleSend()
  }
}

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

watch(() => messages.value.length, scrollToBottom)
watch(isOpen, (open) => {
  if (open) {
    nextTick(() => {
      inputRef.value?.focus()
      scrollToBottom()
    })
  }
})

const formatTime = (date: Date) => {
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
}

const formatMessage = (text: string) => {
  // Convert markdown-style bold to HTML
  let formatted = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-lime-400 hover:text-lime-300 underline underline-offset-2">$1</a>')
    .replace(/`([^`]+)`/g, '<code class="bg-white/10 px-1 py-0.5 rounded text-xs">$1</code>')

  // Convert line breaks
  formatted = formatted.replace(/\n/g, '<br>')

  return formatted
}

const quickQuestions = [
  'What are your skills?',
  'Tell me about your projects',
  'What is your education?',
  'How can I contact you?'
]
</script>

<template>
  <!-- Chat Button -->
  <button
    v-if="!isOpen"
    @click="toggle"
    class="fixed bottom-6 right-6 z-[100] group"
    aria-label="Open chat"
  >
    <div class="absolute -inset-2 bg-lime-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div class="relative w-14 h-14 bg-lime-400 hover:bg-lime-300 text-slate-950 rounded-2xl flex items-center justify-center shadow-lg shadow-lime-400/20 transition-all duration-300 hover:scale-110 hover:shadow-lime-400/40">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    </div>
    <div class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-slate-950 animate-pulse"></div>
  </button>

  <!-- Chat Window -->
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    leave-active-class="transition-all duration-200 ease-in"
    enter-from-class="opacity-0 scale-95 translate-y-4"
    leave-to-class="opacity-0 scale-95 translate-y-4"
  >
    <div
      v-if="isOpen"
      class="fixed bottom-6 right-6 z-[100] w-[380px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-6rem)] flex flex-col bg-slate-900/95 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden"
    >
      <!-- Header -->
      <div class="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-white/[0.02]">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-lime-400 to-green-500 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <h3 class="text-white font-bold text-sm flex items-center gap-2">
              Phoun AI
              <span v-if="isAiMode" class="px-1.5 py-0.5 bg-lime-400/10 text-lime-400 text-[9px] font-bold uppercase tracking-wider rounded border border-lime-400/20">Gemini</span>
              <span v-else class="px-1.5 py-0.5 bg-white/5 text-white/40 text-[9px] font-bold uppercase tracking-wider rounded border border-white/5">Rule</span>
            </h3>
            <p class="text-lime-400 text-[10px] font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse"></span>
              {{ isAiMode ? 'AI Powered' : 'Online' }}
            </p>
          </div>
        </div>
        <button
          @click="close"
          class="p-2 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all"
          aria-label="Close chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Messages -->
      <div
        ref="messagesContainer"
        class="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide"
      >
        <div
          v-for="msg in messages"
          :key="msg.id"
          :class="[
            'flex',
            msg.role === 'user' ? 'justify-end' : 'justify-start'
          ]"
        >
          <div
            :class="[
              'max-w-[85%]',
              msg.role === 'user'
                ? 'bg-lime-400 text-slate-950 rounded-2xl rounded-tr-sm'
                : 'bg-white/[0.05] text-white/90 rounded-2xl rounded-tl-sm border border-white/5'
            ]"
          >
            <div class="px-4 py-3 text-sm leading-relaxed" v-html="formatMessage(msg.text)"></div>
            <div
              :class="[
                'px-4 pb-2 text-[10px] font-medium',
                msg.role === 'user' ? 'text-slate-950/50' : 'text-white/20'
              ]"
            >
              {{ formatTime(msg.timestamp) }}
            </div>
          </div>
        </div>

        <!-- Typing indicator -->
        <div v-if="isTyping" class="flex justify-start">
          <div class="bg-white/[0.05] border border-white/5 rounded-2xl rounded-tl-sm px-4 py-3">
            <div class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-lime-400/60 animate-bounce" style="animation-delay: 0ms"></span>
              <span class="w-2 h-2 rounded-full bg-lime-400/60 animate-bounce" style="animation-delay: 150ms"></span>
              <span class="w-2 h-2 rounded-full bg-lime-400/60 animate-bounce" style="animation-delay: 300ms"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Questions (only when few messages) -->
      <div v-if="messages.length <= 2" class="px-4 pb-2">
        <div class="flex flex-wrap gap-2">
          <button
            v-for="q in quickQuestions"
            :key="q"
            @click="sendMessage(q)"
            class="text-[11px] px-3 py-1.5 rounded-full bg-white/5 text-white/50 hover:bg-lime-400/10 hover:text-lime-400 border border-white/5 hover:border-lime-400/20 transition-all"
          >
            {{ q }}
          </button>
        </div>
      </div>

      <!-- Input -->
      <div class="p-4 border-t border-white/5">
        <div class="flex items-center gap-2 bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-2.5 focus-within:border-lime-400/30 focus-within:bg-white/[0.05] transition-all">
          <input
            ref="inputRef"
            v-model="inputText"
            @keydown="handleKeydown"
            type="text"
            placeholder="Ask me anything about Phoun..."
            class="flex-1 bg-transparent text-white text-sm placeholder:text-white/20 focus:outline-none"
          />
          <button
            @click="handleSend"
            :disabled="!inputText.trim() || isTyping"
            class="p-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-slate-950 disabled:opacity-30 disabled:hover:bg-lime-400 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
</style>
