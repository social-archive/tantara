// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
    outDir: './docs', // ← 빌드 결과를 docs 폴더로 지정
    base: '/',        // 루트 경로에서 배포 (또는 '/레포명/'으로 수정)
    vite: {
      plugins: [tailwindcss()],
    },
  });