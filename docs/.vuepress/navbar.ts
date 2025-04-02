import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/', icon: '' },
  { text: '关于', link: '/about/', icon: '' },
  { text: '社群', link: '/groups.html', icon: '' },
  {
    text: '文档',
    icon: '',
    items: [
      { text: '简介', link: '/documents/intro/' },
      { text: '快速开始', link: '/documents/quickstart/' },
      { text: '部署指南', link: '/documents/deployment/' },
      { text: '基础配置', link: '/documents/basic-config/' },
      { text: '高级配置', link: '/documents/advanced-config/' },
      { text: '项目结构', link: '/documents/structure/' },
      { text: '角色广场', link: '/documents/character-plaza/' },
      { text: '常见问题', link: '/documents/faq/' },
      { text: '报错汇总', link: '/documents/problem/' }
    ]
  },
  { text: '赞助', link: '/sponsor.html', icon: '' },
  { text: '角色广场', link: 'https://avatars.kourichat.com/', icon: '' },
  { text: 'API开放平台', link: 'https://api.kourichat.com/', icon: '' },
  { text: '代码仓库', link: 'https://github.com/KouriChat/KouriChat/', icon: '' },
  { text: '下载最新版', link: 'https://pan.quark.cn/s/c55dd13218ea', icon: '' }
])
