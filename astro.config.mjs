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
            { label: "丽水市本级政府投资信息化项目管理办法", slug: "lishui-style/lishui-xinxihua-xiangmu-guanli" },
          ],
        },
        {
          label: "行业标准",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "商用密码应用安全性评估 FAQ (第三版)", slug: "hangye-biaozhun/shangyong-mima-pinggu-faq-v3" },
          ],
        },
      ],
    }),
  ],
});
