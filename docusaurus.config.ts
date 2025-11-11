import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'RegistryAccord',
  tagline: `An open foundation for digital content`,
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.registryaccord.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RegistryAccord', // Usually your GitHub org/user name.
  projectName: 'registryaccord-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/RegistryAccord/registryaccord-docs',
          docItemComponent: '@theme/ApiItem', // Required for OpenAPI

        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/RegistryAccord/registryaccord-docs',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          feeds: {
            specPath: 'openapi/specs/feeds/v1/openapi.yaml',
            outputDir: 'docs/api/feeds',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
          identity: {
            specPath: 'openapi/specs/identity/v1/openapi.yaml',
            outputDir: 'docs/api/identity',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
          content: {
            specPath: 'openapi/specs/content/v1/openapi.yaml',
            outputDir: 'docs/api/content',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
          payments: {
            specPath: 'openapi/specs/payments/v1/openapi.yaml',
            outputDir: 'docs/api/payments',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
          storage: {
            specPath: 'openapi/specs/storage/v1/openapi.yaml',
            outputDir: 'docs/api/storage',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
          revenue: {
            specPath: 'openapi/specs/revenue/v1/openapi.yaml',
            outputDir: 'docs/api/revenue',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
          analytics: {
            specPath: 'openapi/specs/analytics/v1/openapi.yaml',
            outputDir: 'docs/api/analytics',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
        },
      },
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/registryaccord-social-card.png',
    colorMode: {
      defaultMode: 'light',           // ← Light theme by default
      disableSwitch: false,           // ← Keep dark mode toggle available
      respectPrefersColorScheme: false, // ← Don't auto-switch based on system
    },
    navbar: {
      title: 'RegistryAccord',
      logo: {
        alt: 'RegistryAccord Logo',
        src: 'img/logo.svg',
        href: 'https://docs.registryaccord.com/',
        target: '_self'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/api',
          label: 'API Reference',
          position: 'left',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/RegistryAccord/registryaccord-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
            {
              label: 'API Reference',
              to: '/docs/api',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            //{
            //  label: 'Discord',
            //  href: 'https://discordapp.com/invite/registryaccord',
            //},
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/registryaccord',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/RegistryAccord/registryaccord-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RegistryAccord, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
