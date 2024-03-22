import { createSSRApp } from 'vue'
import App from './App.vue'
import Vant from 'vant'
// 2. 引入组件样式
import 'vant/lib/index.css';
import { createPinia } from 'pinia'

const Pinia = createPinia()


export function createApp() {
    const app = createSSRApp(App)

    app.use(Pinia)
    app.use(Vant)

    return {
        app,
    }
}
