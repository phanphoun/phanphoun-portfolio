import { ref } from 'vue'

export function useLoadingState(initialState = false) {
  const isLoading = ref(initialState)

  const startLoading = () => {
    isLoading.value = true
  }

  const stopLoading = () => {
    isLoading.value = false
  }

  const setLoading = (state: boolean) => {
    isLoading.value = state
  }

  // Simulate loading with a minimum duration
  const simulateLoading = async (duration = 1000) => {
    startLoading()
    await new Promise((resolve) => setTimeout(resolve, duration))
    stopLoading()
  }

  return {
    isLoading,
    startLoading,
    stopLoading,
    setLoading,
    simulateLoading,
  }
}
