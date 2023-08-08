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
  if (to.meta.someKey) {
    console.log('Needs auth!');
  }

  console.log('Global beforeEach is always first!!!');

  next();
  // next(false);
  // if (to.path === '/users') {
  //   next({ name: 'teams' })
  //   // next('/teams');
  // } else {
  //   next();
  // }
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  //good for sending some analytics data to the server after the page was routed
  console.log('Global afterEach');
});

const app = createApp(App);

app
  .use(router)
  .mount('#app');
