import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import uuid from "vue-uuid";

const app = createApp(App)
app.mount('#app')

app.use(uuid)

