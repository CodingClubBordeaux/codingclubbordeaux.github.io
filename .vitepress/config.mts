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
            text: 'Camps',
            items: [
              {
                text: 'Winter Camp',
                link: 'https://epitechcontent.notion.site/Winter-Camp-68c8709a60274ec4a00ae853f3240036',
              },
              {
                text: 'Christmas Camp',
                link: 'https://epitechcontent.notion.site/Cadeaux-Clicker-1493675a640380dab16dfd888ecd3df0',
              },
              {
                text: 'Halloween Camp',
                link: 'https://epitechcontent.notion.site/Premiers-pas-Trick-or-Treats-1183675a640380feabd4d79c9badf150',
              },
            ],
          },
          {
            text: 'Web',
            items: [
              { text: 'Epitech Clicker', link: '/subject/epitech-clicker' },
              { text: 'Hack The Dino', link: 'https://epitech-academy.notion.site/hacker-le-jeu-chrome-dino' },
              { text: 'EpiQuest (Halloween Camp 2025)', link: 'https://lab.epitech.academy/discover-linux-starter/' },
            ],
          },
          {
            text: 'Python',
            items: [{ text: 'Tek Shooter', link: '/subject/tek-shooter' },
                    { text: 'TekTris', link: '/subject/tektris' },
            ],
          },
          {
            text: 'C',
            items: [{ text: 'Petit Bain', link: '/subject/petit-bain' }],
          },
        ],
      },
      {
        text: 'Guides',
        items: [
          { text: 'Langage C', link: '/guides/c' },
          { text: 'Langage JavaScript', link: '/guides/javascript' },
          { text: 'Languages HTML/CSS', link: '/guides/html-css' },
        ],
      },
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
