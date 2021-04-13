import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ypcui from 'ypc-ui'
import 'ypc-ui/dist/ypc-ui.css'


createApp(App).use(router).use(ypcui).mount('#app')
