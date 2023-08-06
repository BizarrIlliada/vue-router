import { createWebHistory } from 'vue-router';

import TeamsList from '../components/teams/TeamsList.vue';
import TeamMembers from '../components/teams/TeamMembers.vue'
import AddTeam from '../components/teams/AddTeam.vue'
import UsersList from '../components/users/UsersList.vue';

export const routsObject = {
  history: createWebHistory(),
  routes: [
    {
      path: '/teams',
      component: TeamsList,
    },
    {
      path: '/teams/new',
      component: AddTeam,
    },
    {
      path: '/teams/:teamId',
      component: TeamMembers,
    },
    {
      path: '/users',
      component: UsersList,
    },
  ],
  // linkActiveClass: 'active-link',
  // linkExactActiveClass: 'exact-active-link',
}
