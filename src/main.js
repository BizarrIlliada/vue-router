import { createApp } from 'vue';
import { createRouter } from 'vue-router';

import { routsObject } from './router';

import App from './App.vue';


const router = createRouter(routsObject);

router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  // console.dir(next);

  // if (to.path === '/teams' || to.path === '/users') {
  //   next();
  // } else {
  //   console.log('Not allowed to switch page!');
  // }

  next();
  // next(false);
  // if (to.path === '/users') {
  //   next({ name: 'teams' })
  //   // next('/teams');
  // } else {
  //   next();
  // }
});

const app = createApp(App);

app
  .use(router)
  .mount('#app');
