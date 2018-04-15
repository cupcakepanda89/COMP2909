<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>{{ subtitle}}</h4>
    <hr>
    <ul>
      <li v-for="card in cards">
        {{card.cardNum}} {{card.suit}}
      </li>
    </ul>
    <hr>
    <h3>{{ msg }} </h3>
    <!-- Store data using 2-way data binding. -->
    <input type="text" v-model="myContents"><br />
    <!-- Show data using 2-way data binding. -->
    Input Value: <span v-text="myContents"></span><br />

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        // Here is a model.
        msg: 'Welcome to Your Vue.js App',
        subtitle: 'Katelyn Truong',
        cards: [
          {cardNum: 'A',     suit: 'Clubs'},
          {cardNum: 'Two',   suit: 'Hearts'},
          {cardNum: 'Three', suit: 'Diamonds'}
        ],
        myContents: 'change me',
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
