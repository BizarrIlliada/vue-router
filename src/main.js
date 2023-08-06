import { createApp } from 'vue';
import { createRouter } from 'vue-router';

import { routsObject } from './router';

import App from './App.vue';


const router = createRouter(routsObject);

const app = createApp(App);

app
  .use(router)
  .mount('#app');
