// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightVideos from "starlight-videos";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      favicon: "/favicon.ico",
      plugins: [starlightVideos()],
      title: "商密知识库",
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
          ],
        },
        {
          label: "全国标准",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "政务信息系统密码应用与安全性评估工作指南", slug: "guidelines/government-it-crypto-guidelines" },
          ],
        },
      ],
    }),
  ],
});
