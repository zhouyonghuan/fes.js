import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/zh/guide/': [
    {
      isGroup: true,
      text: '介绍',
      children: [
        '/zh/guide/README.md',
        '/zh/guide/getting-started.md', 
      ],
    },
    {
      isGroup: true,
      text: '基础',
      children: [
      ]
    },
    {
      isGroup: true,
      text: '进阶',
      children: [
      ]
    },
    "/zh/guide/contributing.md",
    "/zh/guide/faq.md"
  ],
  '/zh/reference/config/': [
    '/zh/reference/config/README.md'
  ],
  '/zh/reference/api/': [
    '/zh/reference/api/README.md'
  ],
  '/zh/reference/plugin/': [
    {
      isGroup: true,
      text: '指南',
      children: [
        '/zh/reference/plugin/README.md',
      ],
    },
    {
      isGroup: true,
      text: 'Presets',
      children: [
      ],
    },
    {
      isGroup: true,
      text: 'Plugins',
      children: [
        '/zh/reference/plugin/plugins/access.md',
        '/zh/reference/plugin/plugins/enums.md',
        '/zh/reference/plugin/plugins/icon.md',
        '/zh/reference/plugin/plugins/jest.md',
        '/zh/reference/plugin/plugins/layout.md',
        '/zh/reference/plugin/plugins/locale.md',
        '/zh/reference/plugin/plugins/model.md',
        '/zh/reference/plugin/plugins/request.md',
        '/zh/reference/plugin/plugins/vuex.md',
      ],
    },
    {
      isGroup: true,
      text: '插件开发',
      children: [
        '/zh/reference/plugin/api.md'
      ],
    },
  ],
  '/zh/reference/cli/': [
    '/zh/reference/cli/README.md',
  ],
}
