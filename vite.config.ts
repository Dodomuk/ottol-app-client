import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default (mode: string) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
    return defineConfig({
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
                    target: process.env.VITE_API_HOST, // ottol-server
                    changeOrigin: true, //CORS 방지
                    //api root 해당경로로 재탐색
                    rewrite: (path) => path.replace(/^\/api/, '/api')
                }
            }
        }
    })
}
