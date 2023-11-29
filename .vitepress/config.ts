import { getPosts, getPostLength } from "./theme/serverUtils";
// import { defineConfig } from 'vitepress'
// import { buildBlogRSS } from "./theme/rss";

async function config() {
  return {
    lang: "en-US",
    title: "2024 WTF?",
    description: "WTF 2024?",
    sitemap: {
      hostname: 'https://wtf.2024'
    },
    head: [
      [
        "link",
        {
          rel: "icon",
          type: "image/svg",
          href: "/logo.svg",
        },
      ],
      [
        "meta",
        {
          name: "author",
          content: "tr1pwyr",
        },
      ],
      [
        "meta",
        {
          property: "og:title",
          content: "WTF 2024?",
        },
      ],
      [
        "meta",
        {
          property: "og:description",
          content: "WTF 2024?",
        },
      ],
    ],
    lastUpdated: false,
    themeConfig: {
      logo: "/tr1pwyr.webp",
      banner:'/banner.jpg',
      search: {
        provider: 'local'
      },
      docsDir: "/",
      posts: await getPosts(),
      pageSize: 10,
      postLength: await getPostLength(),
      nav: [
        {
          text: "Home",
          link: "/",
        },
        {
          text: "Tags",
          link: "/tags",
        },
        {
          text: "Archives",
          link: "/archives",
        },
        // {
        //   text: "RSS",
        //   link: "https://wyr.world/posts/feed.xml",
        // },
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/tr1pwyr" },
        { icon: "twitter", link: "https://twitter.com/tr1pwyr" },
        {
          icon: {
            svg: `<svg role="img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20">
            <path d="M874.666667 375.189333V746.666667a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V375.189333l266.090667 225.6a149.333333 149.333333 0 0 0 193.152 0L874.666667 375.189333zM810.666667 213.333333a64.789333 64.789333 0 0 1 22.826666 4.181334 63.616 63.616 0 0 1 26.794667 19.413333 64.32 64.32 0 0 1 9.344 15.466667c2.773333 6.570667 4.48 13.696 4.906667 21.184L874.666667 277.333333v21.333334L553.536 572.586667a64 64 0 0 1-79.893333 2.538666l-3.178667-2.56L149.333333 298.666667v-21.333334a63.786667 63.786667 0 0 1 35.136-57.130666A63.872 63.872 0 0 1 213.333333 213.333333h597.333334z" ></path>
            </svg>`,
          },
          link: "mailto:tr1p@tr1pwyr.com",
        },
      ],
      aside: false,
    },
    // buildEnd: buildBlogRSS,
  };
}
export default config();
