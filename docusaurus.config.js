// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Paper Manager',
  tagline: 'Academic publication manager for Joomla! - Component & plugin.',
  url: 'https://papermanager.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'papermanager', // Usually your GitHub org/user name.
  projectName: 'papermanager.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'en-GB',
    locales: ['en-GB']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateTime: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/papermanager/papermanager.github.io/edit/main',
          lastVersion: 'current',
          versions: {
            current: {
              label: '1.x.x (Joomla 4)',
            },
            "0.x.x": {
              label: '0.x.x (Joomla 3)',
            },
          },
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/papermanager/papermanager.github.io/edit/main/...',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-186931777-1',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    metadata: [{name: 'keywords', content: 'paper manager, academic publications joomla, research publications joomla'}],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    docs: {
      sidebar: {
        hideable: true
      }
    },
    navbar: {
      title: 'Paper Manager',
      logo: {
        alt: 'Paper Manager',
        src: 'img/favicon-32x32.png',
      },
      hideOnScroll: true,
      items: [
        {
          type: 'doc',
          docId: 'introduction-to-paper-manager',
          position: 'right',
          label: 'Documentation',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          to: '/download',
          label: 'Download',
          position: 'right'
        },
        // {
        //   href: 'https://github.com/papermanager/papermanager',
        //   label: 'GitHub',
        //   position: 'right',
        // },
        {
          href: 'https://github.com/papermanager/papermanager',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository'
        },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Tutorial',
    //           to: '/docs/intro',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'Twitter',
    //           href: 'https://twitter.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: '/blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/papermanager/papermanager',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} Paper Manager. Built with Docusaurus.`,
    // },
  }),
};

module.exports = config;
