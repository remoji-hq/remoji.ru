import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Remoji',
  tagline: 'Теория ремонта',
  favicon: 'img/favicon.ico',
  url: 'https://remoji.ru',
  baseUrl: '/',
  organizationName: 'remoji-hq',
  projectName: 'remoji.ru',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    }
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: './docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'Remoji Logo',
        src: 'img/logo.svg',
        srcDark: "img/logo-dark.svg",
      },
      items: [
        {
          type: 'doc',
          docId: 'general/index',
          position: 'left',
          label: 'Общее',
        },
        {
          type: 'doc',
          docId: 'electricity/index',
          position: 'left',
          label: 'Электрика',
        },
        {
          type: 'doc',
          docId: 'plumbing/index',
          position: 'left',
          label: 'Водопровод',
        },
        {
          href: 'https://github.com/remoji-hq/remoji.ru',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Remoji. Лицензия <a target="_blank" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
