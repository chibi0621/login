import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';

const app = createApp(App).use(router).mount('#app');
app.use(router);
app.use(VueAxios, axios);
app.use(VueResource);
app.mount('#app');
