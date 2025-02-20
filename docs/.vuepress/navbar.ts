import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/', icon: '' },
  { text: '关于', link: '/about/', icon: '' },
  { text: '社群', link: '/groups.html', icon: '' },
  { text: '文档', link: '/docs.html', icon: '' },
  { text: '赞助', link: '/sponsor.html', icon: '' },
  { text: '角色广场', link: 'https://avatars.kourichat.com/', icon: '' },
  { text: 'API开放平台', link: 'https://api.kourichat.com/', icon: '' },
  { text: '代码仓库', link: 'https://github.com/KouriChat/KouriChat/', icon: '' },
  { text: '下载最新版', link: 'https://pan.quark.cn/s/c55dd13218ea', icon: '' }
])
