import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toggleBg from './directives/v-toggle-bg'

const app = createApp(App)

app.use(store)
app.use(router)

app.directive('toggle-bg', toggleBg)

app.mount('#app')
