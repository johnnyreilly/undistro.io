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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "UnDistro",
          src: "img/logoUnDistroLight.svg",
          srcDark: "img/logoUnDistroDark.svg",
          width: 132,
        },
        items: [],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "UnDistro",
                to: "/docs",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discussions",
                href: "https://github.com/getupio-undistro/undistro/discussions",
              },
              {
                label: "Issues",
                href: "https://github.com/getupio-undistro/undistro/issues"
              },
              {
                label: "GitHub",
                href: "https://github.com/getupio-undistro/undistro",
              },
            ],
          },
          {
            title: "Follow Us",
            items: [
              {
                label: "Instagram",
                href: "https://instagram.com/undistro.io",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/undistro",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UnDistro. Backed by Getup.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
