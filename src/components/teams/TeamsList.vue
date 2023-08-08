<template>
  <router-view></router-view>
  <ul>
    <TeamsItem
      v-for="team in teams"
      :key="team.id"
      :id="team.id"
      :name="team.name"
      :member-count="team.members.length"
    ></TeamsItem>
  </ul>
</template>

<script>
  import TeamsItem from './TeamsItem.vue';

  export default {
    name: 'TeamsList',
    components: {
      TeamsItem,
    },
    inject: ['teams'],

    beforeRouteEnter(to, from, next) {
      console.log('When I go to teams list page');
      // console.log('Team list: ', to, from);

      next();
    },

    mounted() {
      console.log(this.$route.meta);
    }
  };
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>