import { defineClientConfig } from '@vuepress/client'
import TypeWriter from '../components/TypeWriter.vue'
import HeroText from '../components/HeroText.vue'
import Typed from 'typed.js'

// 添加到全局
declare global {
  interface Window {
    Typed: typeof Typed
  }
}

if (typeof window !== 'undefined') {
  window.Typed = Typed
}

export default defineClientConfig({
  enhance({ app }) {
    app.component('TypeWriter', TypeWriter)
    app.component('HeroText', HeroText)
  },
}) 