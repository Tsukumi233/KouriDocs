import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  theme: plumeTheme({
    // 其他主题配置...
    heroTextRender: (text) => {
      if (typeof text === 'object' && text.type === 'typewriter') {
        // 直接返回内容，不需要包装成组件字符串
        return text.content
      }
      return text
    }
  })
}) 