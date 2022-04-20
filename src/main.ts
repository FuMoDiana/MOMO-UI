import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import momo from './components/momo.vue';
import momo2 from './components/momo2.vue';
import {createWebHashHistory,createRouter} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:momo},
        {path:'/xxx',component:momo2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
