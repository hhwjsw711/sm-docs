// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightVideos from "starlight-videos";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    starlight({
      favicon: "/favicon.ico",
      plugins: [starlightVideos()],
      title: "商密知识库",
      components: {
        TableOfContents: './src/components/TableOfContents.astro',
      },
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      logo: {
        src: "./src/assets/convexfs-logo.png",
        alt: "ConvexFS",
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "丽水特色",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "丽水市本级政府投资信息化项目管理办法", slug: "lishui/lishui-gov-it-project-management-rules" },
            { label: "信息系统商用密码应用成本测算指南", slug: "lishui/commercial-crypto-cost-estimation-guide" },
          ],
        },
        {
          label: "全国标准",
          autogenerate: { directory: "guidelines" },
        },
      ],
    }),
  ],
});
