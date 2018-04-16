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
    <hr>
    <h3>{{ msg }}</h3>
    <input type='text' v-model='someContent'>
    <button v-on:click="showContent(someContent)">Show the content</button>
   <hr>
    <h4>second text input</h4>
    <input type='text' v-model='someText'>
    <button v-on:click="showText(someText)">Show the text</button>
    <hr>
    <input type='text' v-model='someCont'>
    <div>
      <span v-if="someCont!=''">Now you don't.</span>
      <span v-if="someCont==''">Now you see me.</span>
    </div>
    <hr>
    <h4>Multiple checked boxes</h4>
    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <h4>Radio</h4>
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>
    <h4>Select</h4>
    <input type="text" v-model="change">
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option><span v-text="change"></span></option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
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
        someCont: '',
        checkedNames: [],
        change: 'AAAA',
        picked: [],
        selected: ''
      }
    },
    methods: {
      showContent: function (message) {
        alert(message)
      },
      showText: function (message) {
        alert(message)
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
