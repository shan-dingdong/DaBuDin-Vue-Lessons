import { createApp } from 'vue'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'
const app = createApp(App);

app.use(vue3GoogleLogin, {
    clientId: '699658367864-9a7u15nl5muvsjo74n7qq3s4l5sqscqv.apps.googleusercontent.com'
  });

app.mount('#app');
