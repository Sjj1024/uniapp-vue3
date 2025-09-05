import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        server: {
            host: '0.0.0.0',
            allowedHosts: ['localhost', '192.168.1.100'],
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                '~': path.resolve(__dirname, '.'),
            },
        },
        plugins: [uni()],
    }
})
