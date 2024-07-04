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
  lang: 'fr-FR',
  srcDir: 'src',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      {
        text: 'Sujets',
        items: [
          {
            text: 'Web',
            items: [
              { text: 'Epitech Clicker', link: '/subject/epitech-clicker' },
            ],
          },
          {
            text: 'Python',
            items: [{ text: 'Tek Shooter', link: '/subject/tek-shooter' }],
          },
          {
            text: 'C',
            items: [{ text: 'Petit Bain', link: '/subject/petit-bain' }],
          },
        ],
      },
      { text: 'Guides', items: [{ text: 'Langage C', link: '/guides/c' }] },
    ],

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
    theme: {
      dark: 'dark-plus',
      light: 'light-plus',
    },
  },
});
