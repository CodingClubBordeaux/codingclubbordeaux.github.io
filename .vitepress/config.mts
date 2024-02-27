import { defineConfig } from 'vitepress';

// Add new subjects here
const subjects = [
  {
    text: 'Web',
    items: [{ text: 'Epitech Clicker', link: '/subject/epitech-clicker' }],
  },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Coding Club Bordeaux',
  description: "Site du Coding Club d'Epitech Bordeaux",
  srcDir: 'src',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      {
        text: 'Sujets',
        items: subjects,
      },
      { text: 'Guides', link: '/guides' },
    ],

    sidebar: {
      '/subject/': subjects,
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/nbaEnT7Mbt' },
      { icon: 'github', link: 'https://github.com/CodingClubBordeaux' },
    ],
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'robots', content: 'noindex,nofollow' }],
  ],
  markdown: {
    image: { lazyLoading: true },
  },
});
