<template>
  <div id="app">
    Parent
    <hello-world />
  </div>
</template>
<script>
  import HelloWorld from './components/HelloWorld'

  export default {
    name: 'app',
    components: {
      HelloWorld
    }
  }
</script>
<style>
  #app {
    color: #00ff00;
  }
</style>
