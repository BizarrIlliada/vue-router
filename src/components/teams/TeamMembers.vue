<template>
  <section>
    <h2>
      {{ teamName }}
      <router-link to="/">X</router-link>
    </h2>
    <ul>
      <UserItem
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></UserItem>
    </ul>
  </section>
</template>

<script>
  import UserItem from '../users/UserItem.vue';

  export default {
    name: 'TeamMembers',
    components: {
      UserItem
    },
    inject: ['users', 'teams'],
    props: {
      teamId: {
        type: String,
        required: true,
      }
    },

    data() {
      return {
        teamName: 'Test',
        members: [],
      };
    },

    methods: {
      loadTeam(teamId) {
        // console.log(this.$route)
        const team = this.teams.find(team => team.id === teamId);
        this.teamName = team.name;
        this.members = this.users.filter(user => team.members.includes(user.id));
      }
    },

    watch: {
      teamId() {
        this.loadTeam(this.teamId);
      },

      // $route(newVal) {
      //   console.log(newVal.query);
      // },
    },

    created() {
      this.loadTeam(this.teamId);
    },

    beforeRouteUpdate(to, from, next) {
      console.log('Updating route!');
      // this.loadTeam(to.params.teamId) //instead of use watchers logic when the parameters are changing
      //but we cant use params inside of this component

      next();
    },
  };
</script>

<style scoped>
  section {
    margin: 2rem auto;
    max-width: 40rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    border-radius: 12px;
  }

  h2 {
    margin: 0.5rem 0;
    display: flex;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: black;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>