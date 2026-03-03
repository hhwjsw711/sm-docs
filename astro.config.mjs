// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightVideos from "starlight-videos";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import starlightScrollToTop from 'starlight-scroll-to-top';
import starlightCoolerCredit from 'starlight-cooler-credit'

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    starlight({
      favicon: "/favicon.ico",
      plugins: [starlightVideos(), starlightScrollToTop({
        position: 'right',
        showTooltip: true,
        smoothScroll: true,
        threshold: 10,
        svgPath: 'M12 4L6 10H9V16H15V10H18L12 4M9 16L12 20L15 16',
        svgStrokeWidth: 2,
        borderRadius: '20',
        showProgressRing: true,
        showOnHomepage: true,
        tooltipText: '回到顶部',
      }), starlightCoolerCredit({
        credit: {
          title: "商密小助手",
          href: "https://hhwjsw711-1--modal-voice-assistant-serve-frontend.modal.run/",
          description: "商用密码知识问答，法规标准尽在掌握。",
        },
      })],
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
            { label: "丽水市本级政府投资信息化项目管理办法", slug: "lishui/lishui-government-investment-it-project-management-measures" },
            { label: "信息系统商用密码应用成本测算指南", slug: "lishui/commercial-crypto-cost-estimation-guide-for-information-systems" },
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
