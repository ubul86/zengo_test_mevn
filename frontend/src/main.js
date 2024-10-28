import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import  vuetify from './plugins/vuetify.js'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';



const app = createApp(App);
app.use(createPinia());
app.use(vuetify);
app.use(Toast);
app.mount('#app');