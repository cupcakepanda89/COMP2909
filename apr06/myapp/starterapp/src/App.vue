<template>
  <div id="app">
    <router-link  to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/details/20/Friday">Details</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
