import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import "./styles/index.scss"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from "pinia";
const pinia = createPinia()


createApp(App).use(ElementPlus).use(pinia).mount('#app')
