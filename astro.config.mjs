// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
// https://astro.build/config
export default defineConfig({
  // ← 빌드 결과를 docs 폴더로 지정
  outDir: './docs',

  // base: '/tantara/',        // 루트 경로에서 배포 (또는 '/레포명/'으로 수정)
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), mdx()]
});