import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
const app = createApp(App)

// Google Login
const GOOGLE_CLIENT_ID = '699658367864-9a7u15nl5muvsjo74n7qq3s4l5sqscqv.apps.googleusercontent.com'
app.use(vue3GoogleLogin, {
    clientId: GOOGLE_CLIENT_ID
  });

app.use(router).mount('#app')
