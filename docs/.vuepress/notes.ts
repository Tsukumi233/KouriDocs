import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const documents = defineNoteConfig({
  dir: 'documents',
  link: '/documents/',
  sidebar: [
    {
      text: '简介',
      link: '/documents/intro/'
    },
    {
      text: '快速开始',
      link: '/documents/quickstart/'
    },
    {
      text: '部署指南',
      link: '/documents/deployment/'
    },
    {
      text: '基础配置',
      link: '/documents/basic-config/'
    },
    {
      text: '高级配置',
      link: '/documents/advanced-config/'
    },
    {
      text: '项目结构',
      link: '/documents/structure/'
    },
    {
      text: '角色广场',
      link: '/documents/character-plaza/'
    },
    {
      text: '常见问题',
      link: '/documents/faq/'
    },
    {
      text: '报错汇总',
      link: '/documents/problem/'
    }
  ]
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [documents]
})