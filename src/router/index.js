import { createWebHistory } from 'vue-router';

import TeamsList from '../components/teams/TeamsList.vue';
import TeamMembers from '../components/teams/TeamMembers.vue'
import AddTeam from '../components/teams/AddTeam.vue'
import UsersList from '../components/users/UsersList.vue';
import NotFound from '../components/nav/NotFound.vue';

export const routsObject = {
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    {
      path: '/teams',
      component: TeamsList,
      // alias: '/',
    },
    {
      path: '/teams/new',
      component: AddTeam,
    },
    {
      path: '/teams/:teamId',
      component: TeamMembers,
      props: true,
    },
    {
      path: '/users',
      component: UsersList,
    },
    { path: '/:anything(.*)', component: NotFound },
  ],
  // linkActiveClass: 'active-link',
  // linkExactActiveClass: 'exact-active-link',
}
