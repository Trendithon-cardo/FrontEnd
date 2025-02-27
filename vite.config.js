import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';
import fs from 'fs';

import dotenv from 'dotenv';

dotenv.config();

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    base: '/',
    plugins: [
      react(),
      // PWA 플러그인 설정 수정
      VitePWA({
        registerType: 'autoUpdate', // 서비스 워커 자동 업데이트
        includeAssets: ['/icons/pwa-192.png', '/icons/pwa-512.png'], // 로컬 경로의 이미지 참조
        manifest: {
          name: 'My Vite PWA App', // PWA 애플리케이션의 전체 이름
          short_name: 'VitePWA', // 홈 화면에 표시될 이름
          description: 'This is my Vite PWA application', // 설명
          theme_color: '#ffffff', // 테마 색상
          background_color: '#ffffff', // 배경 색상
          display: 'standalone', // 브라우저 요소 제거
          scope: '/', // PWA가 적용될 URL 범위
          start_url: '/', // 애플리케이션의 시작 URL
          icons: [
            {
              src: '/icons/pwa-192.png', // 로컬 경로의 192x192 아이콘
              sizes: '192x192', // 아이콘 크기
              type: 'image/png'
            },
            {
              src: '/icons/pwa-512.png', // 로컬 경로의 512x512 아이콘
              sizes: '512x512', // 아이콘 크기
              type: 'image/png'
            },
            {
              src: '/icons/pwa-512.png', // 로컬 경로의 마스크 가능 아이콘
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable' // 마스크 가능 속성 추가
            }
          ]
        }
      })
    ],
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "index.html")
        }
      }
    },
    server: process.env.NODE_ENV === 'development' ? {
      https:
        {
        key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
        cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem')),
        }
        ,
      port: 5173,        // 강제로 5173 포트를 사용
      strictPort: true,
      proxy: {
        "/api": {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          secure: false, // HTTPS 강제 변환 방지
        }
      },
    } : {
      proxy: {
        "/api": {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          secure: false, // HTTPS 강제 변환 방지
        }
      },
    },
    resolve: {
      alias: {
        '@atoms': path.resolve(__dirname, 'src/atoms'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@constants': path.resolve(__dirname, 'src/constant'),
        '@contexts': path.resolve(__dirname, 'src/contexts'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@routes': path.resolve(__dirname, 'src/routes'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@public': path.resolve(__dirname, 'public'),
      },
    },
  }
});