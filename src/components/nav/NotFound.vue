<template>
  <main>
    <h1>Wrong way</h1>
    <router-link :to="homeLink">Go to the start page</router-link>
  </main>
</template>

<script>
  export default {
    name: 'NotFound',

    computed: {
      homeLink() {
        return {
          name: 'home',
        }
      }
    }
  }
</script>

<style scoped>
  main {
    text-align: center;
  }
</style>
