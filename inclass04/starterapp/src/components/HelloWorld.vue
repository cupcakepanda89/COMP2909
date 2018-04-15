<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>{{ subtitle}}</h4>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        // Here is a model.
        msg: 'Welcome to Your Vue.js App',
        subtitle: 'Katelyn Truong'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #app {
    color: #ffa2bf;
  }
</style>
