const path = require("path");

module.exports = {
  title: "我是大魔王",
  tagline: "承苏凯的知识库",
  titleDelimiter: "-",
  url: "https://www.zxuqian.cn",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "sukai-cheng", // Usually your GitHub org/user name.
  projectName: "zxuqian.cn", // Usually your repo name.
  stylesheets: ["https://fonts.font.im/css?family=Raleway:500,700"],
  themeConfig: {
    navbar: {
      title: "魔王不造反",
      logo: {
        alt: "魔王不造反",
        src: "img/logo.png",
        srcDark: "img/logo.png",
      },
      items: [
        {
          to: "/",
          label: "博客",
          position: "right",
          items: [
            {
              label: "后端",
              to: "tags/前端",
            },
            {
              label: "职业",
              to: "tags/职业",
            },
            {
              label: "健康",
              to: "tags/健康",
            },
          ],
        },
        {
          label: "关于我",
          position: "right",
          to: "docs/about-me"
        },
        // {
        //   label: "视频",
        //   position: "right",
        //   to: "docs/videos/videos-intro",
        // },
        // {
        //   label: "课程",
        //   position: "right",
        //   items: [
        //     {
        //       label: "React 即时通信 UI 开发实战",
        //       to: "docs/course/react-chat-ui/react-chat-ui",
        //     },
        //   ],
        // },
        // {
        //   label: "教程",
        //   position: "right",
        //   items: [
        //     {
        //       label: "CSS",
        //       to: "docs/css/box-model/box-model",
        //     },
        //   ],
        // },
        {
          label: "资源导航",
          position: "right",
          to: "docs/resources/resources-intro",
        },
        // {
        //   href: "https://www.itnanls.cn",
        //   label: "后端学习",
        //   position: "right",
        // },
        {
          href: "https://github.com/sukai-cheng",
          label: "GitHub",
          position: "right",
        },
        // {
        //   href: "https://github.com/zxuqian/frontend-questions/issues",
        //   label: "提问",
        //   position: "right",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Style Guide",
        //       to: "docs/doc1"
        //     },
        //     {
        //       label: "Second Doc",
        //       to: "docs/doc2"
        //     }
        //   ]
        // },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus"
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus"
        //     }
        //   ]
        // },
        {
          title: "Social",
          items: [
            {
              label: "博客",
              to: "/",
            },
            {
              label: "GitHub",
              href: "https://github.com/sukai-cheng",
            },
          ],
        },
        {
          title: "友情链接",
          items: [
            {
              label: "yuqing521のblog",
              to: "https://yuqing521.github.io/",
            },
            {
              label: "lookroot的个人空间",
              to: "https://www.lookroot.cn/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 峰华 (张旭乾) Built with Docusaurus.<p>冀ICP备14007097号-3</p>`,
    },
    prism: {
      darkTheme: require("prism-react-renderer/themes/vsDark"),
      defaultLanguage: "javascript",
    },
    googleAnalytics: {
      trackingID: "UA-118572241-1",
      anonymizeIP: true, // Should IPs be anonymized?
    },
    gtag: {
      trackingID: "G-6PSESJX0BM",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/zxuqian/zxuqian.cn/tree/master/docs",
        },
        blog: {
          path: "./blog",
          routeBasePath: "/",
          blogSidebarTitle: "近期文章",
          feedOptions: {
            type: "all",
            title: "承苏凯的博客",
            copyright: `Copyright © ${new Date().getFullYear()} 苏凯 (承苏凯sfds) Built with Docusaurus.<p>冀ICsdfsP备14007097号-3</p>`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "daily",
          priority: 0.5,
        },
      },
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    path.resolve(__dirname, "./src/plugin/plugin-baidu-analytics"),
    path.resolve(__dirname, "./src/plugin/plugin-baidu-push"),
    // path.resolve(__dirname, "./src/plugin/plugin-google-adsense"),
  ],
};
