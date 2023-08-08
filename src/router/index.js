import { createWebHistory } from 'vue-router';

import TeamsList from '../components/teams/TeamsList.vue';
import TeamMembers from '../components/teams/TeamMembers.vue';
import AddTeam from '../components/teams/AddTeam.vue';
import TeamsFooter from '../components/teams/TeamsFooter.vue';
import UsersList from '../components/users/UsersList.vue';
import UsersFooter from '../components/users/UsersFooter.vue';
import NotFound from '../components/nav/NotFound.vue';

export const routsObject = {
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      redirect: '/teams',
    },
    {
      name: 'teams',
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter },
      meta: { someKey: true },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
      // alias: '/',
    },
    {
      name: 'users',
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('When I go to user page!');
        next();
      },
    },
    {
      name: 'add-new-team',
      path: '/teams/new',
      component: AddTeam,
    },
    { path: '/:anything(.*)', component: NotFound },
  ],
  // linkActiveClass: 'active-link',
  // linkExactActiveClass: 'exact-active-link',
  scrollBehavior(to, from, savedPosition) {
    // console.log(to);
    // console.log(from);
    // console.log(savedPosition);

    if (savedPosition) {
      return savedPosition;
    }

    return {
      left: 0,
      top: 0,
    }
  },
}

console.log(routsObject);
