import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'
require("./assets/main.scss")

const app = createApp(App).use(store)

app.use(store)
app.use(ElementPlus)
app.use(router)
app.mount('#app')