import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@desktop': fileURLToPath(new URL('./src/components/desktop', import.meta.url)),
            '@mobile': fileURLToPath(new URL('./src/components/mobile', import.meta.url)),
            '@hybrid': fileURLToPath(new URL('./src/components/hybrid', import.meta.url)),
            '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
            '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
            '@common': fileURLToPath(new URL('./src/common', import.meta.url))
        }
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000', // ottol-server(로컬)
                changeOrigin: true, //CORS 방지
                //api root 해당경로로 재탐색
                rewrite: (path) => path.replace(/^\/api/, '/api')
            }
        }
    }
})
