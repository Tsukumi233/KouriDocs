<template>
  <div class="hero-text">
    <TypeWriter v-if="type === 'typewriter'"
      :strings="strings"
      :typeSpeed="typeSpeed"
      :backSpeed="backSpeed"
      :loop="loop"
    />
    <span v-else>{{ strings[0] }}</span>
  </div>
</template>

<script setup lang="ts">
import TypeWriter from './TypeWriter.vue'

defineProps<{
  type?: 'typewriter'
  strings: string[]
  typeSpeed?: number
  backSpeed?: number
  loop?: boolean
}>()
</script>

<style scoped>
.hero-text {
  font-size: 1.2em;
  line-height: 1.5;
}
</style> 