import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/router.js"
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).
    use(pinia).use(router).use(ElementPlus).mount('#app')
