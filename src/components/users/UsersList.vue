<template>
  <button @click="confirmInput">Example hardcoded button with beautiful design</button>
  <ul>
    <UserItem v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></UserItem>
  </ul>
</template>

<script>
  import UserItem from './UserItem.vue';

  export default {
    components: {
      UserItem,
    },
    inject: ['users'],

    methods: {
      confirmInput() {
        //some actions
        
        this.$router.push('/teams');

        // this.$router.forward();
        // this.$router.back();
      },
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