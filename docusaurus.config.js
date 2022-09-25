// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "UnDistro",
  tagline: "Backed by Getup",
  url: "https://undistro.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "getupio-undistro", // Usually your GitHub org/user name.
  projectName: "undistro", // Usually your repo name.
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/getupio-undistro/undistro/tree/main/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/getupio-undistro/undistro/tree/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    async function tailwindcss(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: "UnDistro",
          src: "img/logo.svg",
          srcDark: "img/logoUnDistroDark.svg",
          width: 132,
        },
        items: [
          {to: '/', label: 'Home'},
          {to: '#zora', label: 'Zora'},
          {to: '#milestones', label: 'Milestone'},
          {to: '#community', label: 'Community'},
          {to: 'contact', label: 'Contact'},
          {
            type: 'localeDropdown',
            position: 'left',
            
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} UnDistro. Backed by Getup.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  /** @type {import('@docusaurus/types')} */
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
        label: 'EN',
      },
      pt: {
        htmlLang: 'pt-BR',
        label: 'PT',
      }
    },
  },
};

module.exports = config;
