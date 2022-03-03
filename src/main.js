import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import VueScrollTo from 'vue-scrollto'
import "./assets/scss/main.scss";
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).use(VueScrollTo).mount('#app')
