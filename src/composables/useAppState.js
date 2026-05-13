import { ref, computed } from 'vue'

const isDark = ref(false)
const windowWidth = ref(window.innerWidth)

window.addEventListener('resize', () => {
  windowWidth.value = window.innerWidth
})

const introPlayed = ref(false)

export function useIntroAnimation() {
  return {
    introPlayed
  }
}

const isMobile = computed(() => windowWidth.value <= 450)

export function useAppState() {
  return {
    isDark,
    isMobile,
    windowWidth
  }
}