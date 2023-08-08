<template>
  <button @click="confirmInput">Example hardcoded button with beautiful design</button>
  <ul>
    <UserItem v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></UserItem>
    <input id="leaveCheckbox" type="checkbox" v-model="iAmReadyToLeave">
    <label for="leaveCheckbox">
      I am sure I want to leave this page!
    </label>
  </ul>
</template>

<script>
  import UserItem from './UserItem.vue';

  export default {
    components: {
      UserItem,
    },
    inject: ['users'],

    data() {
      return {
        iAmReadyToLeave: false,
      }
    },

    methods: {
      confirmInput() {
        //some actions
        
        this.$router.push('/teams');

        // this.$router.forward();
        // this.$router.back();
      },
    },

    unmounted() {
      console.log('Unmounted runs after all router hooks');
    },

    beforeRouteLeave(to, from, next) {
      if (this.iAmReadyToLeave) {
        console.log('Before leave');
        next();
      } else {
        next(confirm('Are you sure you want to leave?'));
      }
    },
  };
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 2rem auto;
    max-width: 20rem;
    padding: 0;
  }

  button {
    display: block;
    margin: 10px auto 0;
  }
</style>