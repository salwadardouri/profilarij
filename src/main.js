import { createApp } from 'vue'
import App from './App.vue'
//import css file in main.js
import './assets/css/app.css'
//import router file in main.js
import router from './router' 
const app = createApp(App)
app.use(router)
app.mount('#app')
